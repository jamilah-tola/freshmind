import { expect, test, type Page } from "@playwright/test"

const adminEmail = process.env.E2E_ADMIN_EMAIL ?? process.env.ADMIN_SEED_EMAIL
const adminPassword = process.env.E2E_ADMIN_PASSWORD ?? process.env.ADMIN_SEED_PASSWORD

const hasE2ECredentials = Boolean(adminEmail && adminPassword)
const hasDatabaseUrl = Boolean(process.env.DATABASE_URL)

async function login(page: Page) {
  await page.goto("/admin/login")
  await expect(page.getByLabel("Email")).toBeVisible()
  await page.getByLabel("Email").fill(adminEmail!)
  await page.getByLabel("Password").fill(adminPassword!)
  await page.getByRole("button", { name: "Sign in to admin" }).click()
}

test.describe("Freshmind contact form", () => {
  test.skip(
    !hasDatabaseUrl || !hasE2ECredentials,
    "Set DATABASE_URL and admin credentials to run the public contact flow end-to-end."
  )

  test("submits a public contact form and records it in the admin inbox", async ({
    page,
  }) => {
    const uniqueId = `${Date.now()}`
    const fullName = `E2E Contact ${uniqueId}`
    const email = `e2e-contact-${uniqueId}@example.com`
    const message = `Playwright contact message ${uniqueId}`

    await page.goto("/contact")
    await page.locator('input[name="fullName"]').fill(fullName)
    await page.locator('input[name="phone"]').fill(`+256700${uniqueId.slice(-6)}`)
    await page.locator('input[name="email"]').fill(email)
    await page.locator('select[name="inquiryType"]').selectOption("Candidate support")
    await page.locator('input[name="subject"]').fill("Interview confirmation")
    await page.locator('input[name="registrationReference"]').fill("FM-26-E2E01")
    await page.locator('textarea[name="message"]').fill(message)

    await page.getByRole("button", { name: "Send message" }).click()

    await expect(
      page.getByText("Your message has been delivered to Freshmind.")
    ).toBeVisible()
    await expect(page.locator('input[name="fullName"]')).toHaveValue("")
    await expect(page.locator('input[name="phone"]')).toHaveValue("")
    await expect(page.locator('input[name="email"]')).toHaveValue("")
    await expect(page.locator('select[name="inquiryType"]')).toHaveValue("")
    await expect(page.locator('input[name="subject"]')).toHaveValue("")
    await expect(page.locator('input[name="registrationReference"]')).toHaveValue("")
    await expect(page.locator('textarea[name="message"]')).toHaveValue("")

    await login(page)
    await expect(page).toHaveURL(/\/admin$/)

    await page.goto("/admin/contact-submissions")

    const submissionCard = page.locator('[class*="border-black/6"]', {
      hasText: fullName,
    })
    await expect(submissionCard).toBeVisible()
    await expect(submissionCard).toContainText(fullName)
    await expect(submissionCard).toContainText("Candidate support")
    await expect(submissionCard).toContainText(email)
    await expect(submissionCard).toContainText(message)
  })
})
