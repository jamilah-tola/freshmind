import { describe, expect, it } from "vitest"

import {
  contactSubmissionSchema,
  publicRegistrationSchema,
} from "@/lib/freshmind/validators"

describe("validation schemas", () => {
  it("accepts a valid public registration payload", () => {
    const parsed = publicRegistrationSchema.safeParse({
      openingId: "opening-1",
      slotId: "slot-1",
      fullName: "Sarah Candidate",
      phone: "+256700000000",
      district: "Kampala",
      email: "candidate@example.com",
      ageBand: "25-30",
      education: "Diploma",
      category: "security",
      yearsOfExperience: "3 years",
      passportStatus: "Valid passport",
      preferredCountry: "United Arab Emirates",
      notes: "Ready to travel",
      document: null,
    })

    expect(parsed.success).toBe(true)
  })

  it("accepts a contact submission payload with a one-character message", () => {
    const parsed = contactSubmissionSchema.safeParse({
      fullName: "Kiberu Sharif",
      phone: "0740218383",
      email: "info@pwcug.com",
      inquiryType: "Employer inquiry",
      subject: "Cleaner",
      message: "A",
      registrationReference: "",
    })

    expect(parsed.success).toBe(true)
  })

  it("rejects an invalid contact submission payload", () => {
    const parsed = contactSubmissionSchema.safeParse({
      fullName: "Jo",
      phone: "",
      inquiryType: "Unknown",
      message: "",
    })

    expect(parsed.success).toBe(false)
  })
})
