import path from "node:path"

import { expect, test, type Page } from "@playwright/test"

const adminEmail = process.env.E2E_ADMIN_EMAIL ?? process.env.ADMIN_SEED_EMAIL
const adminPassword = process.env.E2E_ADMIN_PASSWORD ?? process.env.ADMIN_SEED_PASSWORD

const hasE2ECredentials = Boolean(adminEmail && adminPassword)
const hasDatabaseUrl = Boolean(process.env.DATABASE_URL)
const hasCloudinaryCredentials = Boolean(
  process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
)

async function login(page: Page) {
  await page.goto("/admin/login")
  await expect(page.getByLabel("Email")).toBeVisible()
  await page.getByLabel("Email").fill(adminEmail!)
  await page.getByLabel("Password").fill(adminPassword!)
  await page.getByRole("button", { name: "Sign in to admin" }).click()
}

async function openSecurityOfficerBooking(page: Page) {
  await page.goto("/opportunities")
  await page
    .getByRole("link", {
      name: /Register for interview for Security Officers for UAE Facilities/i,
    })
    .click()
  await expect(page).toHaveURL(/\/opportunities\/book\?opening=/)
}

async function completeBookingFlow(
  page: Page,
  candidate: {
    fullName: string
    phone: string
    district: string
    email: string
    experience: string
    preferredCountry: string
    notes: string
  }
) {
  await expect(page.getByText("Step 1")).toBeVisible()
  await page.locator('input[name="slotId"]:not([disabled])').first().check()
  await page.getByRole("button", { name: "Continue to profile" }).click()

  await expect(page.getByText("Step 2")).toBeVisible()
  await page.locator('input[name="fullName"]').fill(candidate.fullName)
  await page.locator('input[name="phone"]').fill(candidate.phone)
  await page.locator('input[name="district"]').fill(candidate.district)
  await page.locator('input[name="email"]').fill(candidate.email)
  await page.locator('select[name="ageBand"]').selectOption("25-30")
  await page.locator('select[name="education"]').selectOption("Diploma")
  await page.locator('input[name="yearsOfExperience"]').fill(candidate.experience)
  await page.locator('select[name="passportStatus"]').selectOption("Valid passport")
  await page.getByRole("button", { name: "Continue to final details" }).click()

  await expect(page.getByText("Step 3")).toBeVisible()
  await page.locator('input[name="preferredCountry"]').fill(candidate.preferredCountry)
  await page.locator('textarea[name="notes"]').fill(candidate.notes)
}

test.describe("Freshmind admin dashboard", () => {
  test.skip(
    !hasE2ECredentials,
    "Set E2E_ADMIN_EMAIL/E2E_ADMIN_PASSWORD or ADMIN_SEED_EMAIL/ADMIN_SEED_PASSWORD to run these flows."
  )

  test("redirects anonymous users away from /admin", async ({ page }) => {
    await page.goto("/admin")
    await expect(page).toHaveURL(/\/admin\/login$/)
  })

  test("logs in and loads the admin overview", async ({ page }) => {
    await login(page)

    await expect(page).toHaveURL(/\/admin$/)
    await expect(
      page.getByRole("heading", { name: "Recruitment operations at a glance." })
    ).toBeVisible()
  })

  test("submits a public registration with document upload and shows it in admin", async ({
    page,
  }) => {
    test.skip(
      !hasDatabaseUrl,
      "Set DATABASE_URL to run the public registration flow end-to-end."
    )

    test.skip(
      !hasCloudinaryCredentials,
      "Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET to run upload flows."
    )

    test.setTimeout(120_000)

    const uniqueId = `${Date.now()}`
    const candidateName = `E2E Upload ${uniqueId}`
    const candidateEmail = `e2e-upload-${uniqueId}@example.com`
    const uploadPath = path.resolve(process.cwd(), "tests/fixtures/candidate-profile.txt")

    await openSecurityOfficerBooking(page)
    await completeBookingFlow(page, {
      fullName: candidateName,
      phone: `+256700${uniqueId.slice(-6)}`,
      district: "Kampala",
      email: candidateEmail,
      experience: "3 years in screening roles",
      preferredCountry: "United Arab Emirates",
      notes: "Playwright E2E submission with Cloudinary-backed upload.",
    })
    await page.locator('input[name="document"]').setInputFiles(uploadPath)

    await page
      .getByRole("button", { name: "Submit registration and get reference" })
      .click()

    await expect(page).toHaveURL(/\/register\/success/)

    const referenceHeading = page.getByRole("heading", { name: /Reference:/ })
    await expect(referenceHeading).toBeVisible()

    const reference = ((await referenceHeading.textContent()) || "")
      .replace("Reference:", "")
      .trim()

    await login(page)
    await expect(page).toHaveURL(/\/admin$/)

    await page.goto("/admin/registrations")

    const candidateRow = page.locator("tr", { hasText: candidateName })
    await expect(candidateRow).toBeVisible()
    await expect(candidateRow).toContainText(reference)
    await expect(candidateRow).toContainText("candidate-profile.txt")
    await expect(
      candidateRow.getByRole("link", { name: "candidate-profile.txt" })
    ).toHaveAttribute("href", /https?:\/\//)
  })

  test("submits a public registration through the multi-step booking flow", async ({
    page,
  }) => {
    test.skip(
      !hasDatabaseUrl,
      "Set DATABASE_URL to run the public registration flow end-to-end."
    )

    const uniqueId = `${Date.now()}`
    const candidateName = `E2E Booking ${uniqueId}`
    const candidateEmail = `e2e-booking-${uniqueId}@example.com`

    await openSecurityOfficerBooking(page)
    await completeBookingFlow(page, {
      fullName: candidateName,
      phone: `+256701${uniqueId.slice(-6)}`,
      district: "Kampala",
      email: candidateEmail,
      experience: "2 years in security screening",
      preferredCountry: "United Arab Emirates",
      notes: "Playwright multi-step registration without document upload.",
    })

    await page
      .getByRole("button", { name: "Submit registration and get reference" })
      .click()

    await expect(page).toHaveURL(/\/register\/success/)
    await expect(page.getByRole("heading", { name: /Reference:/ })).toBeVisible()
    await expect(
      page.getByRole("link", { name: "Back to opportunities" })
    ).toHaveAttribute("href", /\/opportunities\/book\?opening=/)

    await login(page)
    await expect(page).toHaveURL(/\/admin$/)

    await page.goto("/admin/registrations")

    const candidateRow = page.locator("tr", { hasText: candidateName })
    await expect(candidateRow).toBeVisible()
    await expect(candidateRow).toContainText(candidateEmail)
    await expect(candidateRow).toContainText("Security Officers for UAE Facilities")
  })
})
