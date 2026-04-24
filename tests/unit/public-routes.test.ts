import { beforeEach, describe, expect, it, vi } from "vitest"

const createRegistration = vi.fn()
const createContactSubmission = vi.fn()

vi.mock("@/lib/freshmind/repository", () => ({
  getRepository: () => ({
    createRegistration,
    createContactSubmission,
  }),
}))

describe("public route handlers", () => {
  beforeEach(() => {
    createRegistration.mockReset()
    createContactSubmission.mockReset()
    vi.resetModules()
  })

  it("returns a validation error for an invalid registration payload", async () => {
    const { POST } = await import("@/app/api/public/registrations/route")
    const response = await POST(
      new Request("http://localhost/api/public/registrations", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({}),
      })
    )

    expect(response.status).toBe(400)
  })

  it("creates a registration for a valid payload without an explicit venue id", async () => {
    createRegistration.mockResolvedValue({ id: "registration-1", reference: "FM-26-ABCDE" })

    const { POST } = await import("@/app/api/public/registrations/route")
    const response = await POST(
      new Request("http://localhost/api/public/registrations", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
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
          notes: "",
          document: null,
        }),
      })
    )

    expect(response.status).toBe(201)
    expect(createRegistration).toHaveBeenCalledWith(
      expect.objectContaining({
        openingId: "opening-1",
        slotId: "slot-1",
        fullName: "Sarah Candidate",
        email: "candidate@example.com",
        notes: undefined,
        document: null,
      })
    )
    expect(createRegistration).toHaveBeenCalledWith(
      expect.not.objectContaining({
        venueId: expect.anything(),
      })
    )
  })

  it("creates a contact submission for a valid payload", async () => {
    createContactSubmission.mockResolvedValue({ id: "contact-1" })

    const { POST } = await import("@/app/api/public/contact-submissions/route")
    const response = await POST(
      new Request("http://localhost/api/public/contact-submissions", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          fullName: "Sarah Candidate",
          phone: "+256700000000",
          email: "sarah@example.com",
          inquiryType: "Candidate support",
          subject: "Slot confirmation",
          registrationReference: "FM-26-ABCDE",
          message: "Please help me confirm my interview slot.",
        }),
      })
    )

    expect(response.status).toBe(201)
    expect(createContactSubmission).toHaveBeenCalledWith(
      expect.objectContaining({
        fullName: "Sarah Candidate",
        inquiryType: "Candidate support",
      })
    )
  })

  it("returns a repository error for a failed contact submission write", async () => {
    createContactSubmission.mockRejectedValue(
      new Error("Unable to store contact submission.")
    )

    const { POST } = await import("@/app/api/public/contact-submissions/route")
    const response = await POST(
      new Request("http://localhost/api/public/contact-submissions", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          fullName: "Sarah Candidate",
          phone: "+256700000000",
          inquiryType: "Candidate support",
          message: "Please help me confirm my interview slot.",
        }),
      })
    )

    expect(response.status).toBe(400)
    await expect(response.json()).resolves.toMatchObject({
      error: "Unable to store contact submission.",
    })
  })
})
