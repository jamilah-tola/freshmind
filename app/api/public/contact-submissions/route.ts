import { NextResponse } from "next/server"

import { jsonError, validationError } from "@/lib/freshmind/api"
import { getRepository } from "@/lib/freshmind/repository"
import { contactSubmissionSchema } from "@/lib/freshmind/validators"

export async function POST(request: Request) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return jsonError("Request body must be valid JSON.", 400)
  }

  const parsed = contactSubmissionSchema.safeParse(payload)
  if (!parsed.success) {
    return validationError(parsed.error)
  }

  try {
    const repository = getRepository()
    const submission = await repository.createContactSubmission({
      ...parsed.data,
      email: parsed.data.email || undefined,
      subject: parsed.data.subject || undefined,
      registrationReference: parsed.data.registrationReference || undefined,
    })

    return NextResponse.json({ submission }, { status: 201 })
  } catch (error) {
    return jsonError(
      error instanceof Error ? error.message : "Unable to create contact submission.",
      400
    )
  }
}
