import bcrypt from "bcryptjs"
import { z } from "zod"

import { getRepository } from "@/lib/freshmind/repository"

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export async function authorizeAdminCredentials(
  credentials: Record<string, unknown> | undefined
) {
  const parsed = credentialsSchema.safeParse(credentials)
  if (!parsed.success) {
    return null
  }

  const repository = getRepository()
  const admin = await repository.getAdminAuthRecordByEmail(parsed.data.email)
  if (!admin) {
    return null
  }

  const passwordMatches = await bcrypt.compare(
    parsed.data.password,
    admin.passwordHash
  )

  if (!passwordMatches) {
    return null
  }

  return {
    id: admin.id,
    email: admin.email,
    name: admin.email,
    role: admin.role,
  }
}

