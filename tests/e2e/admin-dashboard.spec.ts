import path from "node:path"

import { expect, test, type Page } from "@playwright/test"

const adminEmail = process.env.E2E_ADMIN_EMAIL ?? process.env.ADMIN_SEED_EMAIL
const adminPassword = process.env.E2E_ADMIN_PASSWORD ?? process.env.ADMIN_SEED_PASSWORD

const hasE2ECredentials = Boolean(adminEmail && adminPassword)
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
      !hasCloudinaryCredentials,
      "Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET to run upload flows."
    )

    test.setTimeout(120_000)

    const uniqueId = `${Date.now()}`
    const candidateName = `E2E Upload ${uniqueId}`
    const candidateEmail = `e2e-upload-${uniqueId}@example.com`
    const uploadPath = path.resolve(process.cwd(), "tests/fixtures/candidate-profile.txt")

    await page.goto("/opportunities")
    await page
      .getByRole("link", {
        name: /Open booking page for Security Officers for UAE Facilities/i,
      })
      .click()
    await expect(page).toHaveURL(/\/opportunities\/.+/)
    await page.locator('input[name="slotId"]:not([disabled])').first().check()
    await page.locator('input[name="fullName"]').fill(candidateName)
    await page.locator('input[name="phone"]').fill(`+256700${uniqueId.slice(-6)}`)
    await page.locator('input[name="district"]').fill("Kampala")
    await page.locator('input[name="email"]').fill(candidateEmail)
    await page.locator('select[name="ageBand"]').selectOption("25-30")
    await page.locator('select[name="education"]').selectOption("Diploma")
    await page.locator('input[name="yearsOfExperience"]').fill("3 years in screening roles")
    await page.locator('select[name="passportStatus"]').selectOption("Valid passport")
    await page.locator('input[name="preferredCountry"]').fill("United Arab Emirates")
    await page.locator('input[name="document"]').setInputFiles(uploadPath)
    await page
      .locator('textarea[name="notes"]')
      .fill("Playwright E2E submission with Cloudinary-backed upload.")

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
})
