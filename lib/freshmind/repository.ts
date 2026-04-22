import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { randomUUID } from "node:crypto"

import { categoryContent, serviceContent } from "@/lib/freshmind/seed"
import { loadRuntimeStore, runtimeUploadsDirectory, saveRuntimeStore } from "@/lib/freshmind/runtime-store"
import type {
  CategoryContent,
  CreateOpeningInput,
  CreateRegistrationInput,
  CreateSlotInput,
  Opportunity,
  OpportunityCardData,
  OpportunityCategory,
  OpportunityStatus,
  OpportunityWithSchedule,
  Registration,
  RegistrationStatus,
  RegistrationView,
  RepositoryStore,
  ServiceContent,
  Venue,
} from "@/lib/freshmind/types"
import { createSupabaseServiceClient, hasSupabaseEnv } from "@/lib/supabase/server"

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function createOpeningId() {
  return `opening-${randomUUID()}`
}

function createSlotId() {
  return `slot-${randomUUID()}`
}

function createRegistrationId() {
  return `registration-${randomUUID()}`
}

function createReference() {
  const year = new Date().getFullYear().toString().slice(-2)
  const hash = Math.random().toString(36).slice(2, 7).toUpperCase()
  return `FM-${year}-${hash}`
}

function sortOpenings(openings: Opportunity[]) {
  return [...openings].sort((a, b) => {
    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1
    }

    return a.closingDate.localeCompare(b.closingDate)
  })
}

function buildOpportunityCard(
  store: RepositoryStore,
  opening: Opportunity
): OpportunityCardData {
  const slots = store.slots.filter((slot) => slot.openingId === opening.id)
  const registrations = store.registrations.filter(
    (registration) => registration.openingId === opening.id
  )
  const seatsLeft = Math.max(
    slots.reduce((sum, slot) => sum + slot.capacity, 0) - registrations.length,
    0
  )
  const nextInterviewDate = slots
    .filter((slot) => slot.status === "open")
    .sort((a, b) => a.date.localeCompare(b.date))[0]?.date

  return {
    ...opening,
    categoryInfo: categoryContent[opening.category],
    seatsLeft,
    nextInterviewDate,
    slotCount: slots.length,
  }
}

function buildOpportunityWithSchedule(
  store: RepositoryStore,
  opening: Opportunity
): OpportunityWithSchedule {
  const slots = store.slots
    .filter((slot) => slot.openingId === opening.id)
    .sort((a, b) =>
      `${a.date}${a.startTime}`.localeCompare(`${b.date}${b.startTime}`)
    )
    .map((slot) => {
      const venue = store.venues.find((item) => item.id === slot.venueId)!
      const registrationsCount = store.registrations.filter(
        (registration) => registration.slotId === slot.id
      ).length

      return {
        ...slot,
        venue,
        registrationsCount,
        seatsLeft: Math.max(slot.capacity - registrationsCount, 0),
      }
    })

  return {
    ...opening,
    categoryInfo: categoryContent[opening.category],
    slots,
  }
}

async function saveDocumentLocally(file: File) {
  const bytes = Buffer.from(await file.arrayBuffer())
  const uploadsDir = runtimeUploadsDirectory()
  await mkdir(uploadsDir, { recursive: true })
  const safeName = `${Date.now()}-${slugify(file.name || "document")}`
  const uploadPath = path.join(uploadsDir, safeName)
  await writeFile(uploadPath, bytes)
  return uploadPath
}

type SupabaseRow = Record<string, unknown>

function fromSupabaseOpportunity(row: SupabaseRow): Opportunity {
  return {
    id: String(row.id),
    slug: String(row.slug),
    title: String(row.title),
    category: row.category as OpportunityCategory,
    status: row.status as OpportunityStatus,
    featured: Boolean(row.featured),
    summary: String(row.summary),
    destinationCountry: String(row.destination_country),
    destinationCity: String(row.destination_city),
    employer: String(row.employer),
    openingsCount: Number(row.openings_count),
    salaryRange: String(row.salary_range),
    contractDuration: String(row.contract_duration),
    closingDate: String(row.closing_date),
    postedDate: String(row.posted_date),
    benefits: (row.benefits as string[]) || [],
    requirements: (row.requirements as string[]) || [],
    documents: (row.documents as string[]) || [],
    processHighlights: (row.process_highlights as string[]) || [],
    interviewRegions: (row.interview_regions as string[]) || [],
    visaSupport: String(row.visa_support),
    accommodation: String(row.accommodation),
    transport: String(row.transport),
    feePolicy: String(row.fee_policy),
    trustNote: String(row.trust_note),
  }
}

function fromSupabaseVenue(row: SupabaseRow): Venue {
  return {
    id: String(row.id),
    name: String(row.name),
    city: String(row.city),
    region: String(row.region),
    address: String(row.address),
    mapUrl: String(row.map_url),
    notes: String(row.notes),
  }
}

export type RecruitmentRepository = ReturnType<typeof createRuntimeRepository>

function createRuntimeRepository() {
  return {
    async listPublicOpenings() {
      const store = await loadRuntimeStore()
      return sortOpenings(
        store.openings.filter((opening) => opening.status !== "draft")
      ).map((opening) => buildOpportunityCard(store, opening))
    },
    async listActiveOpenings() {
      const store = await loadRuntimeStore()
      return sortOpenings(
        store.openings.filter(
          (opening) => opening.status === "active" || opening.status === "upcoming"
        )
      ).map((opening) => buildOpportunityCard(store, opening))
    },
    async listOpenings() {
      const store = await loadRuntimeStore()
      return sortOpenings(store.openings).map((opening) =>
        buildOpportunityCard(store, opening)
      )
    },
    async getOpportunityBySlug(slug: string) {
      const store = await loadRuntimeStore()
      const opening = store.openings.find((item) => item.slug === slug)
      if (!opening) {
        return null
      }

      return buildOpportunityWithSchedule(store, opening)
    },
    async listVenues() {
      const store = await loadRuntimeStore()
      return store.venues
    },
    async listRegistrations(): Promise<RegistrationView[]> {
      const store = await loadRuntimeStore()
      return store.registrations
        .map((registration) => {
          const opening = store.openings.find(
            (item) => item.id === registration.openingId
          )
          const slot = store.slots.find((item) => item.id === registration.slotId)
          const venue = store.venues.find((item) => item.id === registration.venueId)

          if (!opening || !slot || !venue) {
            return null
          }

          return {
            ...registration,
            openingTitle: opening.title,
            venueName: venue.name,
            venueCity: venue.city,
            slotLabel: `${slot.date} ${slot.startTime}-${slot.endTime}`,
          }
        })
        .filter(Boolean) as RegistrationView[]
    },
    async createOpening(input: CreateOpeningInput) {
      const store = await loadRuntimeStore()
      const slugBase = slugify(input.title)
      const slug = store.openings.some((item) => item.slug === slugBase)
        ? `${slugBase}-${Date.now().toString().slice(-4)}`
        : slugBase

      const opening: Opportunity = {
        id: createOpeningId(),
        slug,
        title: input.title,
        category: input.category,
        status: "draft",
        featured: false,
        summary: input.summary,
        destinationCountry: input.destinationCountry,
        destinationCity: input.destinationCity,
        employer: input.employer,
        openingsCount: input.openingsCount,
        salaryRange: input.salaryRange,
        contractDuration: "24 months",
        closingDate: input.closingDate,
        postedDate: new Date().toISOString().slice(0, 10),
        benefits: input.benefits,
        requirements: input.requirements,
        documents: input.documents,
        processHighlights: [
          "Freshmind confirms your interview venue and slot after registration.",
          "Shortlisted candidates move to verification and briefing.",
          "All next steps are communicated through official Freshmind channels.",
        ],
        interviewRegions: ["Kampala", "Mbarara", "Gulu"],
        visaSupport: "Visa processing begins after employer selection.",
        accommodation:
          "Accommodation and other deployment terms are confirmed before contract acceptance.",
        transport:
          "Transport support depends on employer assignment and is clarified during final briefing.",
        feePolicy:
          "This intake follows published screening instructions, documented requirements, and official Freshmind follow-up.",
        trustNote:
          "Freshmind communicates this intake only through official channels and booked interview schedules.",
      }

      store.openings.unshift(opening)
      await saveRuntimeStore(store)
      return opening
    },
    async updateOpeningStatus(openingId: string, status: OpportunityStatus) {
      const store = await loadRuntimeStore()
      const opening = store.openings.find((item) => item.id === openingId)
      if (!opening) {
        throw new Error("Opportunity not found.")
      }

      opening.status = status
      await saveRuntimeStore(store)
    },
    async createSlot(input: CreateSlotInput) {
      const store = await loadRuntimeStore()
      store.slots.push({
        id: createSlotId(),
        openingId: input.openingId,
        venueId: input.venueId,
        date: input.date,
        startTime: input.startTime,
        endTime: input.endTime,
        capacity: input.capacity,
        note: input.note,
        status: "open",
      })
      await saveRuntimeStore(store)
    },
    async createRegistration(input: CreateRegistrationInput, file?: File | null) {
      const store = await loadRuntimeStore()
      const opening = store.openings.find((item) => item.id === input.openingId)
      const slot = store.slots.find((item) => item.id === input.slotId)
      const venue = store.venues.find(
        (item) => item.id === (input.venueId || slot?.venueId)
      )

      if (!opening || !slot || !venue) {
        throw new Error("The selected opportunity or interview slot is no longer available.")
      }

      const reservedCount = store.registrations.filter(
        (registration) => registration.slotId === slot.id
      ).length

      if (slot.status !== "open" || reservedCount >= slot.capacity) {
        throw new Error("That interview slot is already full. Please choose another one.")
      }

      const documentPath =
        file && file.size > 0 ? await saveDocumentLocally(file) : undefined

      const registration: Registration = {
        id: createRegistrationId(),
        reference: createReference(),
        openingId: input.openingId,
        slotId: input.slotId,
        venueId: venue.id,
        fullName: input.fullName,
        phone: input.phone,
        district: input.district,
        email: input.email,
        ageBand: input.ageBand,
        education: input.education,
        category: input.category,
        yearsOfExperience: input.yearsOfExperience,
        passportStatus: input.passportStatus,
        preferredCountry: input.preferredCountry,
        notes: input.notes,
        documentName: file?.name,
        documentPath,
        status: "new",
        createdAt: new Date().toISOString(),
      }

      store.registrations.unshift(registration)

      if (reservedCount + 1 >= slot.capacity) {
        slot.status = "full"
      }

      await saveRuntimeStore(store)
      return registration
    },
    async updateRegistrationStatus(
      registrationId: string,
      status: RegistrationStatus
    ) {
      const store = await loadRuntimeStore()
      const registration = store.registrations.find(
        (item) => item.id === registrationId
      )
      if (!registration) {
        throw new Error("Registration not found.")
      }

      registration.status = status
      await saveRuntimeStore(store)
    },
    listCategories() {
      return Object.values(categoryContent)
    },
    getCategory(slug: string) {
      return categoryContent[slug] || null
    },
    listServices() {
      return serviceContent
    },
    getService(slug: string) {
      return serviceContent.find((item) => item.slug === slug) || null
    },
  }
}

function createSupabaseRepository() {
  const client = createSupabaseServiceClient()
  if (!client) {
    return null
  }

  return {
    async listPublicOpenings() {
      const [{ data: openings }, { data: venues }, { data: slots }, { data: registrations }] =
        await Promise.all([
          client.from("fm_openings").select("*").order("closing_date", { ascending: true }),
          client.from("fm_venues").select("*"),
          client.from("fm_slots").select("*"),
          client.from("fm_registrations").select("id, opening_id, slot_id"),
        ])

      const store: RepositoryStore = {
        openings: (openings || []).map(fromSupabaseOpportunity),
        venues: (venues || []).map(fromSupabaseVenue),
        slots: (slots || []).map((row) => ({
          id: String(row.id),
          openingId: String(row.opening_id),
          venueId: String(row.venue_id),
          date: String(row.date),
          startTime: String(row.start_time),
          endTime: String(row.end_time),
          capacity: Number(row.capacity),
          note: String(row.note || ""),
          status: row.status as "open" | "full" | "closed",
        })),
        registrations: (registrations || []).map((row) => ({
          id: String(row.id),
          reference: "",
          openingId: String(row.opening_id),
          slotId: String(row.slot_id),
          venueId: "",
          fullName: "",
          phone: "",
          district: "",
          ageBand: "25-30",
          education: "Certificate",
          category: "security",
          yearsOfExperience: "",
          passportStatus: "Valid passport",
          preferredCountry: "",
          status: "new",
          createdAt: new Date().toISOString(),
        })),
      }

      return sortOpenings(store.openings).map((opening) =>
        buildOpportunityCard(store, opening)
      )
    },
    async listActiveOpenings() {
      const openings = await this.listPublicOpenings()
      return openings.filter(
        (opening) => opening.status === "active" || opening.status === "upcoming"
      )
    },
    async listOpenings() {
      return this.listPublicOpenings()
    },
    async getOpportunityBySlug(slug: string) {
      const { data: openingRow } = await client
        .from("fm_openings")
        .select("*")
        .eq("slug", slug)
        .maybeSingle()

      if (!openingRow) {
        return null
      }

      const opening = fromSupabaseOpportunity(openingRow)
      const [{ data: slots }, { data: venues }, { data: registrations }] =
        await Promise.all([
          client.from("fm_slots").select("*").eq("opening_id", opening.id),
          client.from("fm_venues").select("*"),
          client
            .from("fm_registrations")
            .select("id, slot_id")
            .eq("opening_id", opening.id),
        ])

      const store: RepositoryStore = {
        openings: [opening],
        venues: (venues || []).map(fromSupabaseVenue),
        slots: (slots || []).map((row) => ({
          id: String(row.id),
          openingId: String(row.opening_id),
          venueId: String(row.venue_id),
          date: String(row.date),
          startTime: String(row.start_time),
          endTime: String(row.end_time),
          capacity: Number(row.capacity),
          note: String(row.note || ""),
          status: row.status as "open" | "full" | "closed",
        })),
        registrations: (registrations || []).map((row) => ({
          id: String(row.id),
          reference: "",
          openingId: opening.id,
          slotId: String(row.slot_id),
          venueId: "",
          fullName: "",
          phone: "",
          district: "",
          ageBand: "25-30",
          education: "Certificate",
          category: opening.category,
          yearsOfExperience: "",
          passportStatus: "Valid passport",
          preferredCountry: opening.destinationCountry,
          status: "new",
          createdAt: new Date().toISOString(),
        })),
      }

      return buildOpportunityWithSchedule(store, opening)
    },
    async listVenues() {
      const { data } = await client.from("fm_venues").select("*")
      return (data || []).map(fromSupabaseVenue)
    },
    async listRegistrations(): Promise<RegistrationView[]> {
      const { data } = await client
        .from("fm_registration_admin_view")
        .select("*")
        .order("created_at", { ascending: false })

      return (data || []).map((row) => ({
        id: String(row.id),
        reference: String(row.reference),
        openingId: String(row.opening_id),
        slotId: String(row.slot_id),
        venueId: String(row.venue_id),
        fullName: String(row.full_name),
        phone: String(row.phone),
        district: String(row.district),
        email: row.email ? String(row.email) : undefined,
        ageBand: row.age_band as Registration["ageBand"],
        education: row.education as Registration["education"],
        category: row.category as OpportunityCategory,
        yearsOfExperience: String(row.years_of_experience),
        passportStatus: row.passport_status as Registration["passportStatus"],
        preferredCountry: String(row.preferred_country),
        notes: row.notes ? String(row.notes) : undefined,
        documentName: row.document_name ? String(row.document_name) : undefined,
        documentPath: row.document_path ? String(row.document_path) : undefined,
        status: row.status as RegistrationStatus,
        createdAt: String(row.created_at),
        openingTitle: String(row.opening_title),
        venueName: String(row.venue_name),
        venueCity: String(row.venue_city),
        slotLabel: `${row.slot_date} ${row.start_time}-${row.end_time}`,
      }))
    },
    async createOpening(input: CreateOpeningInput) {
      const payload = {
        slug: slugify(input.title),
        title: input.title,
        category: input.category,
        status: "draft",
        featured: false,
        summary: input.summary,
        destination_country: input.destinationCountry,
        destination_city: input.destinationCity,
        employer: input.employer,
        openings_count: input.openingsCount,
        salary_range: input.salaryRange,
        contract_duration: "24 months",
        closing_date: input.closingDate,
        posted_date: new Date().toISOString().slice(0, 10),
        benefits: input.benefits,
        requirements: input.requirements,
        documents: input.documents,
        process_highlights: [
          "Freshmind confirms your interview venue and slot after registration.",
          "Shortlisted candidates move to verification and briefing.",
          "All next steps are communicated through official Freshmind channels.",
        ],
        interview_regions: ["Kampala", "Mbarara", "Gulu"],
        visa_support: "Visa processing begins after employer selection.",
        accommodation:
          "Accommodation and other deployment terms are confirmed before contract acceptance.",
        transport:
          "Transport support depends on employer assignment and is clarified during final briefing.",
        fee_policy:
          "This intake follows published screening instructions, documented requirements, and official Freshmind follow-up.",
        trust_note:
          "Freshmind communicates this intake only through official channels and booked interview schedules.",
      }

      const { data, error } = await client
        .from("fm_openings")
        .insert(payload)
        .select("*")
        .single()

      if (error) {
        throw new Error(error.message)
      }

      return fromSupabaseOpportunity(data)
    },
    async updateOpeningStatus(openingId: string, status: OpportunityStatus) {
      const { error } = await client
        .from("fm_openings")
        .update({ status })
        .eq("id", openingId)
      if (error) {
        throw new Error(error.message)
      }
    },
    async createSlot(input: CreateSlotInput) {
      const { error } = await client.from("fm_slots").insert({
        opening_id: input.openingId,
        venue_id: input.venueId,
        date: input.date,
        start_time: input.startTime,
        end_time: input.endTime,
        capacity: input.capacity,
        note: input.note,
        status: "open",
      })

      if (error) {
        throw new Error(error.message)
      }
    },
    async createRegistration(input: CreateRegistrationInput, file?: File | null) {
      const { data: slotRow } = await client
        .from("fm_slots")
        .select("venue_id")
        .eq("id", input.slotId)
        .maybeSingle()

      const resolvedVenueId = input.venueId || String(slotRow?.venue_id || "")
      if (!resolvedVenueId) {
        throw new Error("That interview slot is no longer available.")
      }

      let documentPath: string | undefined
      if (file && file.size > 0) {
        const extension = file.name.split(".").pop() || "bin"
        const objectPath = `registrations/${Date.now()}-${randomUUID()}.${extension}`
        const bytes = Buffer.from(await file.arrayBuffer())
        const { error } = await client.storage
          .from("candidate-documents")
          .upload(objectPath, bytes, {
            contentType: file.type || "application/octet-stream",
            upsert: false,
          })

        if (error) {
          throw new Error(error.message)
        }

        documentPath = objectPath
      }

      const { data, error } = await client
        .from("fm_registrations")
        .insert({
          reference: createReference(),
          opening_id: input.openingId,
          slot_id: input.slotId,
          venue_id: resolvedVenueId,
          full_name: input.fullName,
          phone: input.phone,
          district: input.district,
          email: input.email,
          age_band: input.ageBand,
          education: input.education,
          category: input.category,
          years_of_experience: input.yearsOfExperience,
          passport_status: input.passportStatus,
          preferred_country: input.preferredCountry,
          notes: input.notes,
          document_name: file?.name,
          document_path: documentPath,
          status: "new",
        })
        .select("*")
        .single()

      if (error) {
        throw new Error(error.message)
      }

      return {
        id: String(data.id),
        reference: String(data.reference),
        openingId: String(data.opening_id),
        slotId: String(data.slot_id),
        venueId: String(data.venue_id),
        fullName: String(data.full_name),
        phone: String(data.phone),
        district: String(data.district),
        email: data.email ? String(data.email) : undefined,
        ageBand: data.age_band as Registration["ageBand"],
        education: data.education as Registration["education"],
        category: data.category as OpportunityCategory,
        yearsOfExperience: String(data.years_of_experience),
        passportStatus: data.passport_status as Registration["passportStatus"],
        preferredCountry: String(data.preferred_country),
        notes: data.notes ? String(data.notes) : undefined,
        documentName: data.document_name ? String(data.document_name) : undefined,
        documentPath: data.document_path ? String(data.document_path) : undefined,
        status: data.status as RegistrationStatus,
        createdAt: String(data.created_at),
      }
    },
    async updateRegistrationStatus(
      registrationId: string,
      status: RegistrationStatus
    ) {
      const { error } = await client
        .from("fm_registrations")
        .update({ status })
        .eq("id", registrationId)
      if (error) {
        throw new Error(error.message)
      }
    },
    listCategories() {
      return Object.values(categoryContent)
    },
    getCategory(slug: string) {
      return categoryContent[slug] || null
    },
    listServices() {
      return serviceContent
    },
    getService(slug: string) {
      return serviceContent.find((item) => item.slug === slug) || null
    },
  }
}

export function getRepository() {
  if (hasSupabaseEnv()) {
    const repo = createSupabaseRepository()
    if (repo) {
      return repo
    }
  }

  return createRuntimeRepository()
}

export function getCategoryContent(slug: string): CategoryContent | null {
  return categoryContent[slug] || null
}

export function getServiceContent(slug: string): ServiceContent | null {
  return serviceContent.find((item) => item.slug === slug) || null
}
