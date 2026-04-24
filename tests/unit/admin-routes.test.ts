import { beforeEach, describe, expect, it, vi } from "vitest"

const getAdminSession = vi.fn()
const listOpenings = vi.fn()
const updateOpportunity = vi.fn()

vi.mock("@/lib/freshmind/auth", () => ({
  getAdminSession,
}))

vi.mock("@/lib/freshmind/repository", () => ({
  getRepository: () => ({
    listOpenings,
    updateOpportunity,
  }),
}))

describe("admin route handlers", () => {
  beforeEach(() => {
    getAdminSession.mockReset()
    listOpenings.mockReset()
    updateOpportunity.mockReset()
    vi.resetModules()
  })

  it("rejects unauthenticated admin opportunity requests", async () => {
    getAdminSession.mockResolvedValue(null)

    const { GET } = await import("@/app/api/admin/opportunities/route")
    const response = await GET()

    expect(response.status).toBe(401)
  })

  it("validates opportunity patch payloads", async () => {
    getAdminSession.mockResolvedValue({
      id: "admin-1",
      email: "admin@freshmind.ug",
      role: "admin",
    })

    const { PATCH } = await import("@/app/api/admin/opportunities/[id]/route")
    const response = await PATCH(
      new Request("http://localhost/api/admin/opportunities/opportunity-1", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({}),
      }),
      {
        params: Promise.resolve({ id: "opportunity-1" }),
      }
    )

    expect(response.status).toBe(400)
  })
})

