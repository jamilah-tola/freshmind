"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

import { getAdminSession, signInAdmin, signOutAdmin } from "@/lib/freshmind/auth"
import { getRepository } from "@/lib/freshmind/repository"

const registrationSchema = z.object({
  openingId: z.string().min(1),
  openingSlug: z.string().min(1),
  slotId: z.string().min(1),
  venueId: z.string().optional(),
  fullName: z.string().min(3),
  phone: z.string().min(9),
  district: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  ageBand: z.enum(["18-24", "25-30", "31-35", "36-40", "41+"]),
  education: z.enum([
    "Primary",
    "O-Level",
    "A-Level",
    "Certificate",
    "Diploma",
    "Degree",
    "Postgraduate",
  ]),
  category: z.enum([
    "security",
    "transport",
    "hospitality",
    "construction",
    "healthcare",
    "retail",
  ]),
  yearsOfExperience: z.string().min(1),
  passportStatus: z.enum([
    "Valid passport",
    "Passport in process",
    "No passport",
  ]),
  preferredCountry: z.string().min(2),
  notes: z.string().optional(),
})

const openingSchema = z.object({
  title: z.string().min(4),
  category: z.enum([
    "security",
    "transport",
    "hospitality",
    "construction",
    "healthcare",
    "retail",
  ]),
  summary: z.string().min(10),
  destinationCountry: z.string().min(2),
  destinationCity: z.string().min(2),
  employer: z.string().min(2),
  salaryRange: z.string().min(2),
  openingsCount: z.coerce.number().int().positive(),
  closingDate: z.string().min(8),
})

const slotSchema = z.object({
  openingId: z.string().min(1),
  venueId: z.string().min(1),
  date: z.string().min(8),
  startTime: z.string().min(4),
  endTime: z.string().min(4),
  capacity: z.coerce.number().int().positive(),
  note: z.string().min(2),
})

async function requireAdmin() {
  const session = await getAdminSession()
  if (!session) {
    redirect("/admin/login?error=Please sign in to continue.")
  }

  return session
}

function toList(value: FormDataEntryValue | null) {
  return String(value || "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean)
}

export async function registerCandidateAction(formData: FormData) {
  const parsed = registrationSchema.safeParse({
    openingId: formData.get("openingId"),
    openingSlug: formData.get("openingSlug"),
    slotId: formData.get("slotId"),
    venueId: formData.get("venueId") || undefined,
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    district: formData.get("district"),
    email: formData.get("email"),
    ageBand: formData.get("ageBand"),
    education: formData.get("education"),
    category: formData.get("category"),
    yearsOfExperience: formData.get("yearsOfExperience"),
    passportStatus: formData.get("passportStatus"),
    preferredCountry: formData.get("preferredCountry"),
    notes: formData.get("notes"),
  })

  if (!parsed.success) {
    redirect(
      `/opportunities/${String(
        formData.get("openingSlug") || ""
      )}?error=Please complete all required registration fields.`
    )
  }

  const file = formData.get("document")
  const repository = getRepository()
  const registration = await repository.createRegistration(
    {
      ...parsed.data,
      email: parsed.data.email || undefined,
      notes: parsed.data.notes || undefined,
    },
    file instanceof File ? file : null
  )

  revalidatePath("/")
  revalidatePath("/opportunities")
  revalidatePath(`/opportunities/${parsed.data.openingSlug}`)
  revalidatePath("/admin")

  redirect(
    `/register/success?reference=${registration.reference}&opening=${parsed.data.openingSlug}`
  )
}

export async function adminLoginAction(formData: FormData) {
  const email = String(formData.get("email") || "")
  const password = String(formData.get("password") || "")
  const result = await signInAdmin(email, password)

  if (!result.ok) {
    redirect(`/admin/login?error=${encodeURIComponent(result.error || "Unable to sign in.")}`)
  }

  redirect("/admin")
}

export async function adminLogoutAction() {
  await signOutAdmin()
  redirect("/admin/login")
}

export async function createOpeningAction(formData: FormData) {
  await requireAdmin()

  const parsed = openingSchema.safeParse({
    title: formData.get("title"),
    category: formData.get("category"),
    summary: formData.get("summary"),
    destinationCountry: formData.get("destinationCountry"),
    destinationCity: formData.get("destinationCity"),
    employer: formData.get("employer"),
    salaryRange: formData.get("salaryRange"),
    openingsCount: formData.get("openingsCount"),
    closingDate: formData.get("closingDate"),
  })

  if (!parsed.success) {
    redirect("/admin?error=Please fill in the opportunity form correctly.")
  }

  const repository = getRepository()
  await repository.createOpening({
    ...parsed.data,
    benefits: toList(formData.get("benefits")),
    requirements: toList(formData.get("requirements")),
    documents: toList(formData.get("documents")),
  })

  revalidatePath("/")
  revalidatePath("/opportunities")
  revalidatePath("/admin")
  redirect("/admin?notice=Opportunity created in draft mode.")
}

export async function createSlotAction(formData: FormData) {
  await requireAdmin()

  const parsed = slotSchema.safeParse({
    openingId: formData.get("openingId"),
    venueId: formData.get("venueId"),
    date: formData.get("date"),
    startTime: formData.get("startTime"),
    endTime: formData.get("endTime"),
    capacity: formData.get("capacity"),
    note: formData.get("note"),
  })

  if (!parsed.success) {
    redirect("/admin?error=Please complete the slot form correctly.")
  }

  const repository = getRepository()
  await repository.createSlot(parsed.data)

  revalidatePath("/")
  revalidatePath("/opportunities")
  revalidatePath("/admin")
  redirect("/admin?notice=Interview slot published.")
}

export async function updateOpeningStatusAction(formData: FormData) {
  await requireAdmin()

  const openingId = String(formData.get("openingId") || "")
  const status = String(formData.get("status") || "")

  if (!openingId || !["draft", "active", "upcoming", "closed"].includes(status)) {
    redirect("/admin?error=Invalid opportunity status update.")
  }

  const repository = getRepository()
  await repository.updateOpeningStatus(openingId, status as never)

  revalidatePath("/")
  revalidatePath("/opportunities")
  revalidatePath("/admin")
  redirect("/admin?notice=Opportunity status updated.")
}

export async function updateRegistrationStatusAction(formData: FormData) {
  await requireAdmin()

  const registrationId = String(formData.get("registrationId") || "")
  const status = String(formData.get("status") || "")

  if (
    !registrationId ||
    !["new", "confirmed", "shortlisted", "no-show", "placed"].includes(status)
  ) {
    redirect("/admin?error=Invalid registration update.")
  }

  const repository = getRepository()
  await repository.updateRegistrationStatus(registrationId, status as never)

  revalidatePath("/admin")
  redirect("/admin?notice=Candidate status updated.")
}
