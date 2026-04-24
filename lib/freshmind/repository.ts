import "server-only"

import { desc, eq, like, ne, or, sql } from "drizzle-orm"

import { db } from "@/lib/db/client"
import {
  adminUsers,
  candidateRegistrations,
  contactSubmissions,
  interviewSlots,
  opportunities,
} from "@/lib/db/schema"
import {
  buildRegistrationReference,
  createContactSubmissionId,
  createOpportunityId,
  createRegistrationId,
  createSlotId,
  createUniqueSlug,
  slugify,
} from "@/lib/freshmind/identifiers"
import { categoryContent, seededStore, serviceContent } from "@/lib/freshmind/seed"
import type {
  AdminUser,
  CategoryContent,
  ContactSubmission,
  CreateContactSubmissionInput,
  CreateOpeningInput,
  CreateRegistrationInput,
  CreateSlotInput,
  DashboardOverview,
  DocumentAssetMetadata,
  Opportunity,
  OpportunityCardData,
  OpportunityStatus,
  OpportunityWithSchedule,
  Registration,
  RegistrationStatus,
  RegistrationView,
  RepositoryStore,
  ServiceContent,
  UpdateContactSubmissionInput,
  UpdateOpportunityInput,
  Venue,
} from "@/lib/freshmind/types"

type OpportunityRow = typeof opportunities.$inferSelect
type SlotRow = typeof interviewSlots.$inferSelect
type RegistrationRow = typeof candidateRegistrations.$inferSelect
type ContactSubmissionRow = typeof contactSubmissions.$inferSelect
type AdminUserRow = typeof adminUsers.$inferSelect

function sortOpenings(openingsList: Opportunity[]) {
  return [...openingsList].sort((a, b) => {
    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1
    }

    return a.closingDate.localeCompare(b.closingDate)
  })
}

function mapOpportunity(row: OpportunityRow): Opportunity {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category,
    status: row.status,
    featured: row.featured,
    summary: row.summary,
    destinationCountry: row.destinationCountry,
    destinationCity: row.destinationCity,
    employer: row.employer,
    openingsCount: row.openingsCount,
    salaryRange: row.salaryRange,
    contractDuration: row.contractDuration,
    closingDate: row.closingDate,
    postedDate: row.postedDate,
    benefits: row.benefits,
    requirements: row.requirements,
    documents: row.documents,
    processHighlights: row.processHighlights,
    interviewRegions: row.interviewRegions,
    visaSupport: row.visaSupport,
    accommodation: row.accommodation,
    transport: row.transport,
    feePolicy: row.feePolicy,
    trustNote: row.trustNote,
  }
}

function slotRowToVenue(row: SlotRow): Venue {
  return {
    id: row.venueId,
    name: row.venueName,
    city: row.venueCity,
    region: row.venueRegion,
    address: row.venueAddress,
    mapUrl: row.venueMapUrl,
    notes: row.venueNotes,
  }
}

function mapSlot(row: SlotRow) {
  return {
    id: row.id,
    openingId: row.opportunityId,
    venueId: row.venueId,
    date: row.date,
    startTime: row.startTime,
    endTime: row.endTime,
    capacity: row.capacity,
    note: row.note,
    status: row.status,
  }
}

function mapDocumentMetadata(row: RegistrationRow): DocumentAssetMetadata | null {
  if (
    !row.documentOriginalFilename ||
    !row.documentSecureUrl ||
    !row.documentPublicId ||
    !row.documentMimeType ||
    !row.documentUploadedAt
  ) {
    return null
  }

  return {
    originalFilename: row.documentOriginalFilename,
    secureUrl: row.documentSecureUrl,
    publicId: row.documentPublicId,
    mimeType: row.documentMimeType,
    uploadedAt: row.documentUploadedAt,
  }
}

function mapRegistration(row: RegistrationRow): Registration {
  return {
    id: row.id,
    reference: row.reference,
    openingId: row.opportunityId,
    slotId: row.slotId,
    venueId: row.venueId,
    fullName: row.fullName,
    phone: row.phone,
    district: row.district,
    email: row.email ?? undefined,
    ageBand: row.ageBand as Registration["ageBand"],
    education: row.education as Registration["education"],
    category: row.category,
    yearsOfExperience: row.yearsOfExperience,
    passportStatus: row.passportStatus as Registration["passportStatus"],
    preferredCountry: row.preferredCountry,
    notes: row.notes ?? undefined,
    document: mapDocumentMetadata(row),
    status: row.status,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  }
}

function mapContactSubmission(row: ContactSubmissionRow): ContactSubmission {
  return {
    id: row.id,
    fullName: row.fullName,
    phone: row.phone,
    email: row.email ?? undefined,
    inquiryType: row.inquiryType,
    subject: row.subject ?? undefined,
    message: row.message,
    registrationReference: row.registrationReference ?? undefined,
    status: row.status,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  }
}

function mapAdminUser(row: AdminUserRow): AdminUser {
  return {
    id: row.id,
    email: row.email,
    role: row.role as AdminUser["role"],
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  }
}

function buildStoreFromRows(
  openingRows: OpportunityRow[],
  slotRows: SlotRow[],
  registrationRows: RegistrationRow[]
): RepositoryStore {
  const venuesMap = new Map<string, Venue>()

  for (const row of slotRows) {
    if (!venuesMap.has(row.venueId)) {
      venuesMap.set(row.venueId, slotRowToVenue(row))
    }
  }

  return {
    openings: openingRows.map(mapOpportunity),
    venues: Array.from(venuesMap.values()),
    slots: slotRows.map(mapSlot),
    registrations: registrationRows.map(mapRegistration),
  }
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

async function loadStoreSnapshot() {
  const [openingRows, slotRows, registrationRows] = await Promise.all([
    db.select().from(opportunities),
    db.select().from(interviewSlots),
    db.select().from(candidateRegistrations),
  ])

  return buildStoreFromRows(openingRows, slotRows, registrationRows)
}

function loadSeedStoreSnapshot(): RepositoryStore {
  return JSON.parse(JSON.stringify(seededStore)) as RepositoryStore
}

async function loadPublicStoreSnapshot() {
  try {
    return await loadStoreSnapshot()
  } catch (error) {
    console.error(
      "[freshmind] Falling back to seeded opportunity content because Postgres is unavailable.",
      error
    )
    return loadSeedStoreSnapshot()
  }
}

async function resolveVenue(venueId: string, fallback?: Partial<Venue>) {
  const slotRows = await db
    .select()
    .from(interviewSlots)
    .where(eq(interviewSlots.venueId, venueId))

  const existingVenue = slotRows[0] ? slotRowToVenue(slotRows[0]) : null
  if (existingVenue) {
    return existingVenue
  }

  if (
    fallback?.name &&
    fallback.city &&
    fallback.region &&
    fallback.address &&
    fallback.mapUrl &&
    fallback.notes
  ) {
    return {
      id: venueId,
      name: fallback.name,
      city: fallback.city,
      region: fallback.region,
      address: fallback.address,
      mapUrl: fallback.mapUrl,
      notes: fallback.notes,
    }
  }

  throw new Error("Venue details are incomplete.")
}

async function countRows(
  table: typeof opportunities | typeof interviewSlots | typeof candidateRegistrations | typeof contactSubmissions,
  filter?: ReturnType<typeof eq>
) {
  const query = db
    .select({
      count: sql<number>`count(*)::int`,
    })
    .from(table)

  if (filter) {
    return Number((await query.where(filter))[0]?.count ?? 0)
  }

  return Number((await query)[0]?.count ?? 0)
}

async function findOpportunityBySlug(slug: string) {
  const [openingRow] = await db
    .select()
    .from(opportunities)
    .where(eq(opportunities.slug, slug))
    .limit(1)

  return openingRow ?? null
}

async function findOpportunityById(id: string) {
  const [openingRow] = await db
    .select()
    .from(opportunities)
    .where(eq(opportunities.id, id))
    .limit(1)

  return openingRow ?? null
}

async function findSlotById(id: string) {
  const [slotRow] = await db
    .select()
    .from(interviewSlots)
    .where(eq(interviewSlots.id, id))
    .limit(1)

  return slotRow ?? null
}

function createPostgresRepository() {
  return {
    async listPublicOpenings() {
      const store = await loadPublicStoreSnapshot()
      return sortOpenings(
        store.openings.filter((opening) => opening.status !== "draft")
      ).map((opening) => buildOpportunityCard(store, opening))
    },

    async listActiveOpenings() {
      const openings = await this.listPublicOpenings()
      return openings.filter(
        (opening) => opening.status === "active" || opening.status === "upcoming"
      )
    },

    async listOpenings() {
      const store = await loadStoreSnapshot()
      return sortOpenings(store.openings).map((opening) =>
        buildOpportunityCard(store, opening)
      )
    },

    async getOpportunityBySlug(slug: string) {
      const store = await loadPublicStoreSnapshot()
      const opening = store.openings.find((item) => item.slug === slug)

      if (!opening) {
        return null
      }

      return buildOpportunityWithSchedule(store, opening)
    },

    async listVenues() {
      const slotRows = await db.select().from(interviewSlots)
      const uniqueVenues = new Map<string, Venue>()

      for (const row of slotRows) {
        if (!uniqueVenues.has(row.venueId)) {
          uniqueVenues.set(row.venueId, slotRowToVenue(row))
        }
      }

      return Array.from(uniqueVenues.values()).sort((a, b) =>
        `${a.region}${a.city}${a.name}`.localeCompare(
          `${b.region}${b.city}${b.name}`
        )
      )
    },

    async listRegistrations(): Promise<RegistrationView[]> {
      const rows = await db
        .select({
          registration: candidateRegistrations,
          openingTitle: opportunities.title,
          venueName: interviewSlots.venueName,
          venueCity: interviewSlots.venueCity,
          slotDate: interviewSlots.date,
          slotStartTime: interviewSlots.startTime,
          slotEndTime: interviewSlots.endTime,
        })
        .from(candidateRegistrations)
        .innerJoin(
          opportunities,
          eq(candidateRegistrations.opportunityId, opportunities.id)
        )
        .innerJoin(interviewSlots, eq(candidateRegistrations.slotId, interviewSlots.id))
        .orderBy(desc(candidateRegistrations.createdAt))

      return rows.map((row) => ({
        ...mapRegistration(row.registration),
        openingTitle: row.openingTitle,
        venueName: row.venueName,
        venueCity: row.venueCity,
        slotLabel: `${row.slotDate} ${row.slotStartTime}-${row.slotEndTime}`,
      }))
    },

    async listContactSubmissions() {
      const rows = await db
        .select()
        .from(contactSubmissions)
        .orderBy(desc(contactSubmissions.createdAt))

      return rows.map(mapContactSubmission)
    },

    async getDashboardOverview(): Promise<DashboardOverview> {
      const [
        totalOpportunities,
        activeOpportunities,
        openSlots,
        totalRegistrations,
        newRegistrations,
        newContacts,
      ] = await Promise.all([
        countRows(opportunities),
        countRows(opportunities, ne(opportunities.status, "draft")),
        countRows(interviewSlots, eq(interviewSlots.status, "open")),
        countRows(candidateRegistrations),
        countRows(candidateRegistrations, eq(candidateRegistrations.status, "new")),
        countRows(contactSubmissions, eq(contactSubmissions.status, "new")),
      ])

      return {
        totalOpportunities,
        activeOpportunities,
        openSlots,
        totalRegistrations,
        newRegistrations,
        newContacts,
      }
    },

    async getAdminUserByEmail(email: string) {
      const [row] = await db
        .select()
        .from(adminUsers)
        .where(eq(adminUsers.email, email.toLowerCase()))
        .limit(1)

      return row ? mapAdminUser(row) : null
    },

    async getAdminAuthRecordByEmail(email: string) {
      const [row] = await db
        .select()
        .from(adminUsers)
        .where(eq(adminUsers.email, email.toLowerCase()))
        .limit(1)

      return row ?? null
    },

    async createOpening(input: CreateOpeningInput) {
      const baseSlug = slugify(input.title)
      const existingSlugs = (
        await db
          .select({ slug: opportunities.slug })
          .from(opportunities)
          .where(
            or(
              eq(opportunities.slug, baseSlug),
              like(opportunities.slug, `${baseSlug}-%`)
            )
          )
      ).map((item) => item.slug)

      const [created] = await db
        .insert(opportunities)
        .values({
          id: createOpportunityId(),
          slug: createUniqueSlug(input.title, existingSlugs),
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
        })
        .returning()

      return mapOpportunity(created)
    },

    async updateOpportunity(opportunityId: string, input: UpdateOpportunityInput) {
      const updates: Partial<typeof opportunities.$inferInsert> = {
        updatedAt: new Date().toISOString(),
      }

      if (typeof input.summary !== "undefined") {
        updates.summary = input.summary
      }
      if (typeof input.closingDate !== "undefined") {
        updates.closingDate = input.closingDate
      }
      if (typeof input.status !== "undefined") {
        updates.status = input.status
      }
      if (typeof input.featured !== "undefined") {
        updates.featured = input.featured
      }

      const [updated] = await db
        .update(opportunities)
        .set(updates)
        .where(eq(opportunities.id, opportunityId))
        .returning()

      if (!updated) {
        throw new Error("Opportunity not found.")
      }

      return mapOpportunity(updated)
    },

    async updateOpeningStatus(opportunityId: string, status: OpportunityStatus) {
      return this.updateOpportunity(opportunityId, { status })
    },

    async createSlot(input: CreateSlotInput) {
      const opening = await findOpportunityById(input.openingId)
      if (!opening) {
        throw new Error("Opportunity not found.")
      }

      const venue = await resolveVenue(input.venueId, {
        name: input.venueName,
        city: input.venueCity,
        region: input.venueRegion,
        address: input.venueAddress,
        mapUrl: input.venueMapUrl,
        notes: input.venueNotes,
      })

      const [created] = await db
        .insert(interviewSlots)
        .values({
          id: createSlotId(),
          opportunityId: input.openingId,
          venueId: venue.id,
          venueName: venue.name,
          venueCity: venue.city,
          venueRegion: venue.region,
          venueAddress: venue.address,
          venueMapUrl: venue.mapUrl,
          venueNotes: venue.notes,
          date: input.date,
          startTime: input.startTime,
          endTime: input.endTime,
          capacity: input.capacity,
          note: input.note,
          status: "open",
        })
        .returning()

      return mapSlot(created)
    },

    async createRegistration(input: CreateRegistrationInput) {
      return db.transaction(async (tx) => {
        const [opening, slot] = await Promise.all([
          tx
            .select()
            .from(opportunities)
            .where(eq(opportunities.id, input.openingId))
            .limit(1)
            .then((rows) => rows[0] ?? null),
          tx
            .select()
            .from(interviewSlots)
            .where(eq(interviewSlots.id, input.slotId))
            .limit(1)
            .then((rows) => rows[0] ?? null),
        ])

        if (!opening || !slot || slot.opportunityId !== input.openingId) {
          throw new Error(
            "The selected opportunity or interview slot is no longer available."
          )
        }

        const venueId = input.venueId || slot.venueId

        const reservedCount = Number(
          (
            await tx
              .select({
                count: sql<number>`count(*)::int`,
              })
              .from(candidateRegistrations)
              .where(eq(candidateRegistrations.slotId, input.slotId))
          )[0]?.count ?? 0
        )

        if (slot.status !== "open" || reservedCount >= slot.capacity) {
          throw new Error("That interview slot is already full. Please choose another one.")
        }

        const [created] = await tx
          .insert(candidateRegistrations)
          .values({
            id: createRegistrationId(),
            reference: buildRegistrationReference(),
            opportunityId: input.openingId,
            slotId: input.slotId,
            venueId,
            fullName: input.fullName,
            phone: input.phone,
            district: input.district,
            email: input.email,
            ageBand: input.ageBand,
            education: input.education,
            category: opening.category,
            yearsOfExperience: input.yearsOfExperience,
            passportStatus: input.passportStatus,
            preferredCountry: input.preferredCountry,
            notes: input.notes,
            documentOriginalFilename: input.document?.originalFilename,
            documentSecureUrl: input.document?.secureUrl,
            documentPublicId: input.document?.publicId,
            documentMimeType: input.document?.mimeType,
            documentUploadedAt: input.document?.uploadedAt,
            status: "new",
            updatedAt: new Date().toISOString(),
          })
          .returning()

        if (reservedCount + 1 >= slot.capacity) {
          await tx
            .update(interviewSlots)
            .set({
              status: "full",
              updatedAt: new Date().toISOString(),
            })
            .where(eq(interviewSlots.id, slot.id))
        }

        return mapRegistration(created)
      })
    },

    async updateRegistrationStatus(registrationId: string, status: RegistrationStatus) {
      const [updated] = await db
        .update(candidateRegistrations)
        .set({
          status,
          updatedAt: new Date().toISOString(),
        })
        .where(eq(candidateRegistrations.id, registrationId))
        .returning()

      if (!updated) {
        throw new Error("Registration not found.")
      }

      return mapRegistration(updated)
    },

    async createContactSubmission(input: CreateContactSubmissionInput) {
      const [created] = await db
        .insert(contactSubmissions)
        .values({
          id: createContactSubmissionId(),
          fullName: input.fullName,
          phone: input.phone,
          email: input.email,
          inquiryType: input.inquiryType,
          subject: input.subject,
          message: input.message,
          registrationReference: input.registrationReference,
        })
        .returning()

      return mapContactSubmission(created)
    },

    async updateContactSubmission(
      contactSubmissionId: string,
      input: UpdateContactSubmissionInput
    ) {
      const [updated] = await db
        .update(contactSubmissions)
        .set({
          status: input.status,
          updatedAt: new Date().toISOString(),
        })
        .where(eq(contactSubmissions.id, contactSubmissionId))
        .returning()

      if (!updated) {
        throw new Error("Contact submission not found.")
      }

      return mapContactSubmission(updated)
    },

    async updateContactSubmissionStatus(contactSubmissionId: string, status: ContactSubmission["status"]) {
      return this.updateContactSubmission(contactSubmissionId, { status })
    },

    listCategories() {
      return Object.values(categoryContent) as CategoryContent[]
    },

    getCategory(slug: string) {
      return categoryContent[slug] || null
    },

    listServices() {
      return serviceContent as ServiceContent[]
    },

    getService(slug: string) {
      return serviceContent.find((item) => item.slug === slug) || null
    },
  }
}

export type RecruitmentRepository = ReturnType<typeof createPostgresRepository>

const repository = createPostgresRepository()

export function getRepository() {
  return repository
}
