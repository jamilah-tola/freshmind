import { NextResponse } from "next/server"
import type { ZodError } from "zod"

export function jsonError(message: string, status: number, details?: unknown) {
  return NextResponse.json(
    {
      error: message,
      ...(typeof details === "undefined" ? {} : { details }),
    },
    { status }
  )
}

export function validationError(error: ZodError) {
  return jsonError("Validation failed.", 400, error.flatten())
}

