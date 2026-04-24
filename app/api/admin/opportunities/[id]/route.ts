import { NextResponse } from "next/server"

import { jsonError, validationError } from "@/lib/freshmind/api"
import { requireAdminApiSession } from "@/lib/freshmind/admin-api"
import { getRepository } from "@/lib/freshmind/repository"
import { opportunityUpdateSchema } from "@/lib/freshmind/validators"

type RouteProps = {
  params: Promise<{ id: string }>
}

export async function PATCH(request: Request, { params }: RouteProps) {
  const session = await requireAdminApiSession()
  if (!session) {
    return jsonError("Unauthorized", 401)
  }

  const { id } = await params

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return jsonError("Request body must be valid JSON.", 400)
  }

  const parsed = opportunityUpdateSchema.safeParse(payload)
  if (!parsed.success) {
    return validationError(parsed.error)
  }

  try {
    const repository = getRepository()
    const opportunity = await repository.updateOpportunity(id, parsed.data)
    return NextResponse.json({ opportunity })
  } catch (error) {
    return jsonError(
      error instanceof Error ? error.message : "Unable to update opportunity.",
      400
    )
  }
}
