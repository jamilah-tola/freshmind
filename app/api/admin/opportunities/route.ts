import { NextResponse } from "next/server"

import { jsonError, validationError } from "@/lib/freshmind/api"
import { requireAdminApiSession } from "@/lib/freshmind/admin-api"
import { getRepository } from "@/lib/freshmind/repository"
import { opportunitySchema } from "@/lib/freshmind/validators"

export async function GET() {
  const session = await requireAdminApiSession()
  if (!session) {
    return jsonError("Unauthorized", 401)
  }

  const repository = getRepository()
  const opportunities = await repository.listOpenings()
  return NextResponse.json({ opportunities })
}

export async function POST(request: Request) {
  const session = await requireAdminApiSession()
  if (!session) {
    return jsonError("Unauthorized", 401)
  }

  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return jsonError("Request body must be valid JSON.", 400)
  }

  const parsed = opportunitySchema.safeParse(payload)
  if (!parsed.success) {
    return validationError(parsed.error)
  }

  const repository = getRepository()
  const opportunity = await repository.createOpening(parsed.data)
  return NextResponse.json({ opportunity }, { status: 201 })
}
