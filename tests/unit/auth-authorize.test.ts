import { beforeEach, describe, expect, it, vi } from "vitest"

const compare = vi.fn()
const getAdminAuthRecordByEmail = vi.fn()

vi.mock("bcryptjs", () => ({
  default: {
    compare,
  },
  compare,
}))

vi.mock("@/lib/freshmind/repository", () => ({
  getRepository: () => ({
    getAdminAuthRecordByEmail,
  }),
}))

describe("Auth.js credentials authorize flow", () => {
  beforeEach(() => {
    process.env.AUTH_SECRET = "test-secret"
    process.env.AUTH_TRUST_HOST = "true"
    getAdminAuthRecordByEmail.mockReset()
    compare.mockReset()
    vi.resetModules()
  })

  it("returns a user when the password hash matches", async () => {
    getAdminAuthRecordByEmail.mockResolvedValue({
      id: "admin-1",
      email: "admin@freshmind.ug",
      passwordHash: "hashed-value",
      role: "admin",
    })
    compare.mockResolvedValue(true)

    const { authorizeAdminCredentials } = await import(
      "@/lib/freshmind/admin-credentials"
    )
    const user = await authorizeAdminCredentials({
      email: "admin@freshmind.ug",
      password: "correct-password",
    })

    expect(user).toMatchObject({
      id: "admin-1",
      email: "admin@freshmind.ug",
      role: "admin",
    })
  })

  it("returns null when the credentials are invalid", async () => {
    getAdminAuthRecordByEmail.mockResolvedValue(null)

    const { authorizeAdminCredentials } = await import(
      "@/lib/freshmind/admin-credentials"
    )
    const user = await authorizeAdminCredentials({
      email: "missing@freshmind.ug",
      password: "incorrect",
    })

    expect(user).toBeNull()
  })
})
