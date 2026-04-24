import { NextResponse } from "next/server"

import { jsonError, validationError } from "@/lib/freshmind/api"
import { getRepository } from "@/lib/freshmind/repository"
import { publicRegistrationSchema } from "@/lib/freshmind/validators"

export async function POST(request: Request) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return jsonError("Request body must be valid JSON.", 400)
  }

  const parsed = publicRegistrationSchema.safeParse(payload)
  if (!parsed.success) {
    return validationError(parsed.error)
  }

  try {
    const repository = getRepository()
    const registration = await repository.createRegistration({
      ...parsed.data,
      email: parsed.data.email || undefined,
      notes: parsed.data.notes || undefined,
      document: parsed.data.document ?? null,
    })

    return NextResponse.json(
      {
        registration,
      },
      { status: 201 }
    )
  } catch (error) {
    return jsonError(
      error instanceof Error ? error.message : "Unable to create registration.",
      400
    )
  }
}

