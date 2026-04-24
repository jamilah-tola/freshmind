import { describe, expect, it } from "vitest"

import { buildRegistrationReference, createUniqueSlug, slugify } from "@/lib/freshmind/identifiers"

describe("identifier helpers", () => {
  it("slugifies titles consistently", () => {
    expect(slugify(" Security Officers for UAE Facilities ")).toBe(
      "security-officers-for-uae-facilities"
    )
  })

  it("creates a unique slug when the base already exists", () => {
    expect(
      createUniqueSlug("Hotel Support Teams", [
        "hotel-support-teams",
        "hotel-support-teams-2",
      ])
    ).toBe("hotel-support-teams-3")
  })

  it("builds registration references with the current year suffix", () => {
    expect(buildRegistrationReference(new Date("2026-04-23T08:00:00Z"), "ABCDE")).toBe(
      "FM-26-ABCDE"
    )
  })
})

