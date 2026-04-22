export type OpportunityCategory =
  | "security"
  | "transport"
  | "hospitality"
  | "construction"
  | "healthcare"
  | "retail"

export type OpportunityStatus = "active" | "upcoming" | "closed" | "draft"
export type SlotStatus = "open" | "full" | "closed"
export type RegistrationStatus =
  | "new"
  | "confirmed"
  | "shortlisted"
  | "no-show"
  | "placed"

export type EducationLevel =
  | "Primary"
  | "O-Level"
  | "A-Level"
  | "Certificate"
  | "Diploma"
  | "Degree"
  | "Postgraduate"

export type AgeBand =
  | "18-24"
  | "25-30"
  | "31-35"
  | "36-40"
  | "41+"

export type PassportStatus = "Valid passport" | "Passport in process" | "No passport"

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
  documentName?: string
  documentPath?: string
  status: RegistrationStatus
  createdAt: string
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

export interface CreateOpeningInput {
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

export interface CreateSlotInput {
  openingId: string
  venueId: string
  date: string
  startTime: string
  endTime: string
  capacity: number
  note: string
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
}
