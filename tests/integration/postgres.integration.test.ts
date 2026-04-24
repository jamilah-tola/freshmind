import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import { sql as drizzleSql } from "drizzle-orm"

import { seedDatabase } from "@/lib/db/seed"
import {
  adminUsers,
  candidateRegistrations,
  contactSubmissions,
  interviewSlots,
  opportunities,
} from "@/lib/db/schema"

const TEST_DATABASE_URL = process.env.DATABASE_URL_TEST
const describeIfDatabase = TEST_DATABASE_URL ? describe : describe.skip

describeIfDatabase("postgres integration", () => {
  let db: any
  let sql: any

  beforeAll(async () => {
    process.env.DATABASE_URL = TEST_DATABASE_URL
    process.env.ADMIN_SEED_EMAIL = "admin@freshmind.ug"
    process.env.ADMIN_SEED_PASSWORD = "freshmind-secret"

    const { createDb } = await import("@/lib/db/client")
    const created = createDb(TEST_DATABASE_URL)
    db = created.db
    sql = created.sql

    await migrate(db, {
      migrationsFolder: "drizzle",
    })
  })

  beforeEach(async () => {
    await sql.unsafe(
      "TRUNCATE TABLE candidate_registrations, contact_submissions, interview_slots, opportunities, admin_users RESTART IDENTITY CASCADE"
    )

    await seedDatabase(db)
    vi.resetModules()
    delete (globalThis as { __freshmindSql?: unknown }).__freshmindSql
    process.env.DATABASE_URL = TEST_DATABASE_URL
  })

  afterAll(async () => {
    await sql.end()
  })

  it("applies migrations and seeds baseline data", async () => {
    const [opportunityCount] = await db
      .select({ count: drizzleSql<number>`count(*)::int` })
      .from(opportunities)
    const [slotCount] = await db
      .select({ count: drizzleSql<number>`count(*)::int` })
      .from(interviewSlots)
    const [adminCount] = await db
      .select({ count: drizzleSql<number>`count(*)::int` })
      .from(adminUsers)

    expect(Number(opportunityCount.count)).toBeGreaterThan(0)
    expect(Number(slotCount.count)).toBeGreaterThan(0)
    expect(Number(adminCount.count)).toBe(1)
  })

  it("supports repository reads and writes against Postgres", async () => {
    const { getRepository } = await import("@/lib/freshmind/repository")
    const repository = getRepository()

    const createdOpportunity = await repository.createOpening({
      title: "Caregivers for Doha",
      category: "healthcare",
      summary: "A new healthcare intake for screened caregivers.",
      destinationCountry: "Qatar",
      destinationCity: "Doha",
      employer: "Verified care employer",
      salaryRange: "UGX 2.1M - 2.9M equivalent",
      openingsCount: 30,
      closingDate: "2026-06-01",
      benefits: ["Housing support"],
      requirements: ["Diploma in caregiving"],
      documents: ["Passport copy"],
    })

    const venues = await repository.listVenues()
    const createdSlot = await repository.createSlot({
      openingId: createdOpportunity.id,
      venueId: venues[0].id,
      date: "2026-05-01",
      startTime: "09:00",
      endTime: "11:00",
      capacity: 15,
      note: "Bring original documents",
    })

    const createdRegistration = await repository.createRegistration({
      openingId: createdOpportunity.id,
      slotId: createdSlot.id,
      fullName: "Sarah Candidate",
      phone: "+256700000000",
      district: "Kampala",
      email: "sarah@example.com",
      ageBand: "25-30",
      education: "Diploma",
      category: "healthcare",
      yearsOfExperience: "4 years",
      passportStatus: "Valid passport",
      preferredCountry: "Qatar",
      notes: "Available immediately",
      document: null,
    })

    const createdContact = await repository.createContactSubmission({
      fullName: "Employer Team",
      phone: "+971500000000",
      email: "ops@example.com",
      inquiryType: "Employer inquiry",
      subject: "Volume hiring",
      message: "We want to discuss a new intake.",
    })

    const updatedRegistration = await repository.updateRegistrationStatus(
      createdRegistration.id,
      "confirmed"
    )
    const updatedContact = await repository.updateContactSubmissionStatus(
      createdContact.id,
      "reviewed"
    )

    const registrations = await repository.listRegistrations()
    const contactInbox = await repository.listContactSubmissions()

    expect(updatedRegistration.status).toBe("confirmed")
    expect(updatedContact.status).toBe("reviewed")
    expect(registrations.some((item) => item.id === createdRegistration.id)).toBe(true)
    expect(contactInbox.some((item) => item.id === createdContact.id)).toBe(true)
  })

  it("exports a csv from the authenticated route handler", async () => {
    const { getRepository } = await import("@/lib/freshmind/repository")
    const repository = getRepository()
    const opportunitiesList = await repository.listOpenings()
    const venues = await repository.listVenues()

    const slot = await repository.createSlot({
      openingId: opportunitiesList[0].id,
      venueId: venues[0].id,
      date: "2026-05-02",
      startTime: "13:00",
      endTime: "15:00",
      capacity: 10,
      note: "Bring references",
    })

    const registration = await repository.createRegistration({
      openingId: opportunitiesList[0].id,
      slotId: slot.id,
      fullName: "CSV Candidate",
      phone: "+256701111111",
      district: "Wakiso",
      email: "csv@example.com",
      ageBand: "25-30",
      education: "Certificate",
      category: opportunitiesList[0].category,
      yearsOfExperience: "2 years",
      passportStatus: "Valid passport",
      preferredCountry: opportunitiesList[0].destinationCountry,
      notes: "",
      document: null,
    })

    vi.doMock("@/lib/freshmind/auth", () => ({
      getAdminSession: async () => ({
        id: "admin-1",
        email: "admin@freshmind.ug",
        role: "admin",
      }),
    }))

    const { GET } = await import("@/app/(admin)/admin/export/route")
    const response = await GET()
    const csv = await response.text()

    expect(response.status).toBe(200)
    expect(csv).toContain("reference,full_name")
    expect(csv).toContain(registration.reference)
  })
})
