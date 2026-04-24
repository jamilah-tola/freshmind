import { NextResponse } from "next/server"

import { jsonError, validationError } from "@/lib/freshmind/api"
import { requireAdminApiSession } from "@/lib/freshmind/admin-api"
import { getRepository } from "@/lib/freshmind/repository"
import { slotSchema } from "@/lib/freshmind/validators"

type RouteProps = {
  params: Promise<{ id: string }>
}

export async function POST(request: Request, { params }: RouteProps) {
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

  const parsed = slotSchema.safeParse(payload)
  if (!parsed.success) {
    return validationError(parsed.error)
  }

  try {
    const repository = getRepository()
    const slot = await repository.createSlot({
      openingId: id,
      ...parsed.data,
    })

    return NextResponse.json({ slot }, { status: 201 })
  } catch (error) {
    return jsonError(
      error instanceof Error ? error.message : "Unable to publish slot.",
      400
    )
  }
}
