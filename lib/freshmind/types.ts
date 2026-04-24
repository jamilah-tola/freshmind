export const opportunityCategories = [
  "security",
  "transport",
  "hospitality",
  "construction",
  "healthcare",
  "retail",
] as const

export type OpportunityCategory = (typeof opportunityCategories)[number]

export const opportunityStatuses = ["active", "upcoming", "closed", "draft"] as const
export type OpportunityStatus = (typeof opportunityStatuses)[number]

export const slotStatuses = ["open", "full", "closed"] as const
export type SlotStatus = (typeof slotStatuses)[number]

export const registrationStatuses = [
  "new",
  "confirmed",
  "shortlisted",
  "no-show",
  "placed",
] as const
export type RegistrationStatus = (typeof registrationStatuses)[number]

export const contactSubmissionStatuses = [
  "new",
  "reviewed",
  "replied",
  "archived",
] as const
export type ContactSubmissionStatus = (typeof contactSubmissionStatuses)[number]

export const educationLevels = [
  "Primary",
  "O-Level",
  "A-Level",
  "Certificate",
  "Diploma",
  "Degree",
  "Postgraduate",
] as const
export type EducationLevel = (typeof educationLevels)[number]

export const ageBands = ["18-24", "25-30", "31-35", "36-40", "41+"] as const
export type AgeBand = (typeof ageBands)[number]

export const passportStatuses = [
  "Valid passport",
  "Passport in process",
  "No passport",
] as const
export type PassportStatus = (typeof passportStatuses)[number]

export const contactInquiryTypes = [
  "Candidate support",
  "Employer inquiry",
  "Opportunity question",
  "Verification request",
] as const
export type ContactInquiryType = (typeof contactInquiryTypes)[number]

export type AdminRole = "admin"

export interface CategoryContent {
  slug: OpportunityCategory
  label: string
  eyebrow: string
  description: string
  examples: string[]
  destinations: string[]
  heroMetric: string
}

export interface ServiceContent {
  slug: "job-placements" | "training" | "support"
  title: string
  summary: string
  highlights: string[]
}

export interface Venue {
  id: string
  name: string
  city: string
  region: string
  address: string
  mapUrl: string
  notes: string
}

export interface Opportunity {
  id: string
  slug: string
  title: string
  category: OpportunityCategory
  status: OpportunityStatus
  featured: boolean
  summary: string
  destinationCountry: string
  destinationCity: string
  employer: string
  openingsCount: number
  salaryRange: string
  contractDuration: string
  closingDate: string
  postedDate: string
  benefits: string[]
  requirements: string[]
  documents: string[]
  processHighlights: string[]
  interviewRegions: string[]
  visaSupport: string
  accommodation: string
  transport: string
  feePolicy: string
  trustNote: string
}

export interface InterviewSlot {
  id: string
  openingId: string
  venueId: string
  date: string
  startTime: string
  endTime: string
  capacity: number
  note: string
  status: SlotStatus
}

export interface DocumentAssetMetadata {
  originalFilename: string
  secureUrl: string
  publicId: string
  mimeType: string
  uploadedAt: string
}

export interface Registration {
  id: string
  reference: string
  openingId: string
  slotId: string
  venueId: string
  fullName: string
  phone: string
  district: string
  email?: string
  ageBand: AgeBand
  education: EducationLevel
  category: OpportunityCategory
  yearsOfExperience: string
  passportStatus: PassportStatus
  preferredCountry: string
  notes?: string
  document?: DocumentAssetMetadata | null
  status: RegistrationStatus
  createdAt: string
  updatedAt: string
}

export interface AdminUser {
  id: string
  email: string
  role: AdminRole
  createdAt: string
  updatedAt: string
}

export interface ContactSubmission {
  id: string
  fullName: string
  phone: string
  email?: string
  inquiryType: ContactInquiryType
  subject?: string
  message: string
  registrationReference?: string
  status: ContactSubmissionStatus
  createdAt: string
  updatedAt: string
}

export interface Testimonial {
  id: string
  name: string
  district: string
  role: string
  quote: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface TrustSignal {
  title: string
  value: string
  detail: string
}

export interface SuccessStory {
  id: string
  title: string
  summary: string
  outcome: string
}

export interface RepositoryStore {
  openings: Opportunity[]
  venues: Venue[]
  slots: InterviewSlot[]
  registrations: Registration[]
}

export interface OpportunityWithSchedule extends Opportunity {
  categoryInfo: CategoryContent
  slots: Array<
    InterviewSlot & {
      venue: Venue
      seatsLeft: number
      registrationsCount: number
    }
  >
}

export interface OpportunityCardData extends Opportunity {
  categoryInfo: CategoryContent
  seatsLeft: number
  nextInterviewDate?: string
  slotCount: number
}

export interface RegistrationView extends Registration {
  openingTitle: string
  venueName: string
  venueCity: string
  slotLabel: string
}

export interface DashboardOverview {
  totalOpportunities: number
  activeOpportunities: number
  openSlots: number
  totalRegistrations: number
  newRegistrations: number
  newContacts: number
}

export interface CreateOpportunityInput {
  title: string
  category: OpportunityCategory
  summary: string
  destinationCountry: string
  destinationCity: string
  employer: string
  salaryRange: string
  openingsCount: number
  closingDate: string
  benefits: string[]
  requirements: string[]
  documents: string[]
}

export type CreateOpeningInput = CreateOpportunityInput

export interface UpdateOpportunityInput {
  title?: string
  category?: OpportunityCategory
  summary?: string
  destinationCountry?: string
  destinationCity?: string
  employer?: string
  salaryRange?: string
  openingsCount?: number
  closingDate?: string
  benefits?: string[]
  requirements?: string[]
  documents?: string[]
  status?: OpportunityStatus
  featured?: boolean
}

export interface CreateSlotInput {
  openingId: string
  venueId: string
  date: string
  startTime: string
  endTime: string
  capacity: number
  note: string
  venueName?: string
  venueCity?: string
  venueRegion?: string
  venueAddress?: string
  venueMapUrl?: string
  venueNotes?: string
}

export interface CreateRegistrationInput {
  openingId: string
  slotId: string
  venueId?: string
  fullName: string
  phone: string
  district: string
  email?: string
  ageBand: AgeBand
  education: EducationLevel
  category: OpportunityCategory
  yearsOfExperience: string
  passportStatus: PassportStatus
  preferredCountry: string
  notes?: string
  document?: DocumentAssetMetadata | null
}

export interface UpdateRegistrationInput {
  status: RegistrationStatus
}

export interface CreateContactSubmissionInput {
  fullName: string
  phone: string
  email?: string
  inquiryType: ContactInquiryType
  subject?: string
  message: string
  registrationReference?: string
}

export interface UpdateContactSubmissionInput {
  status: ContactSubmissionStatus
}
