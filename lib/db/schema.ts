import { sql } from "drizzle-orm"
import {
  boolean,
  date,
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core"

import {
  contactInquiryTypes,
  contactSubmissionStatuses,
  opportunityCategories,
  opportunityStatuses,
  registrationStatuses,
  slotStatuses,
} from "@/lib/freshmind/types"

const pgValues = <TValues extends readonly string[]>(values: TValues) =>
  values as unknown as [TValues[number], ...TValues[number][]]

export const opportunityCategoryEnum = pgEnum(
  "opportunity_category",
  pgValues(opportunityCategories)
)
export const opportunityStatusEnum = pgEnum(
  "opportunity_status",
  pgValues(opportunityStatuses)
)
export const slotStatusEnum = pgEnum("slot_status", pgValues(slotStatuses))
export const registrationStatusEnum = pgEnum(
  "registration_status",
  pgValues(registrationStatuses)
)
export const contactSubmissionStatusEnum = pgEnum(
  "contact_submission_status",
  pgValues(contactSubmissionStatuses)
)
export const contactInquiryTypeEnum = pgEnum(
  "contact_inquiry_type",
  pgValues(contactInquiryTypes)
)

export const adminUsers = pgTable(
  "admin_users",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    passwordHash: text("password_hash").notNull(),
    role: text("role").notNull().default("admin"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    emailIdx: uniqueIndex("admin_users_email_idx").on(table.email),
  })
)

export const opportunities = pgTable(
  "opportunities",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    category: opportunityCategoryEnum("category").notNull(),
    status: opportunityStatusEnum("status").notNull().default("draft"),
    featured: boolean("featured").notNull().default(false),
    summary: text("summary").notNull(),
    destinationCountry: text("destination_country").notNull(),
    destinationCity: text("destination_city").notNull(),
    employer: text("employer").notNull(),
    openingsCount: integer("openings_count").notNull(),
    salaryRange: text("salary_range").notNull(),
    contractDuration: text("contract_duration").notNull(),
    closingDate: date("closing_date", { mode: "string" }).notNull(),
    postedDate: date("posted_date", { mode: "string" }).notNull(),
    benefits: text("benefits")
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    requirements: text("requirements")
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    documents: text("documents")
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    processHighlights: text("process_highlights")
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    interviewRegions: text("interview_regions")
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    visaSupport: text("visa_support").notNull(),
    accommodation: text("accommodation").notNull(),
    transport: text("transport").notNull(),
    feePolicy: text("fee_policy").notNull(),
    trustNote: text("trust_note").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    slugIdx: uniqueIndex("opportunities_slug_idx").on(table.slug),
    statusIdx: index("opportunities_status_idx").on(table.status),
  })
)

export const interviewSlots = pgTable(
  "interview_slots",
  {
    id: text("id").primaryKey(),
    opportunityId: text("opportunity_id")
      .notNull()
      .references(() => opportunities.id, { onDelete: "cascade" }),
    venueId: text("venue_id").notNull(),
    venueName: text("venue_name").notNull(),
    venueCity: text("venue_city").notNull(),
    venueRegion: text("venue_region").notNull(),
    venueAddress: text("venue_address").notNull(),
    venueMapUrl: text("venue_map_url").notNull(),
    venueNotes: text("venue_notes").notNull(),
    date: date("date", { mode: "string" }).notNull(),
    startTime: text("start_time").notNull(),
    endTime: text("end_time").notNull(),
    capacity: integer("capacity").notNull(),
    note: text("note").notNull(),
    status: slotStatusEnum("status").notNull().default("open"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    opportunityIdx: index("interview_slots_opportunity_idx").on(table.opportunityId),
    statusIdx: index("interview_slots_status_idx").on(table.status),
  })
)

export const candidateRegistrations = pgTable(
  "candidate_registrations",
  {
    id: text("id").primaryKey(),
    reference: text("reference").notNull(),
    opportunityId: text("opportunity_id")
      .notNull()
      .references(() => opportunities.id, { onDelete: "cascade" }),
    slotId: text("slot_id")
      .notNull()
      .references(() => interviewSlots.id, { onDelete: "cascade" }),
    venueId: text("venue_id").notNull(),
    fullName: text("full_name").notNull(),
    phone: text("phone").notNull(),
    district: text("district").notNull(),
    email: text("email"),
    ageBand: text("age_band").notNull(),
    education: text("education").notNull(),
    category: opportunityCategoryEnum("category").notNull(),
    yearsOfExperience: text("years_of_experience").notNull(),
    passportStatus: text("passport_status").notNull(),
    preferredCountry: text("preferred_country").notNull(),
    notes: text("notes"),
    documentOriginalFilename: text("document_original_filename"),
    documentSecureUrl: text("document_secure_url"),
    documentPublicId: text("document_public_id"),
    documentMimeType: text("document_mime_type"),
    documentUploadedAt: timestamp("document_uploaded_at", {
      withTimezone: true,
      mode: "string",
    }),
    status: registrationStatusEnum("status").notNull().default("new"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    referenceIdx: uniqueIndex("candidate_registrations_reference_idx").on(table.reference),
    opportunityIdx: index("candidate_registrations_opportunity_idx").on(table.opportunityId),
    slotIdx: index("candidate_registrations_slot_idx").on(table.slotId),
    statusIdx: index("candidate_registrations_status_idx").on(table.status),
  })
)

export const contactSubmissions = pgTable(
  "contact_submissions",
  {
    id: text("id").primaryKey(),
    fullName: text("full_name").notNull(),
    phone: text("phone").notNull(),
    email: text("email"),
    inquiryType: contactInquiryTypeEnum("inquiry_type").notNull(),
    subject: text("subject"),
    message: text("message").notNull(),
    registrationReference: text("registration_reference"),
    status: contactSubmissionStatusEnum("status").notNull().default("new"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    statusIdx: index("contact_submissions_status_idx").on(table.status),
    createdAtIdx: index("contact_submissions_created_at_idx").on(table.createdAt),
  })
)

