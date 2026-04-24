import { NextResponse } from "next/server"

import { createCloudinarySignedUploadPayload, isCloudinaryConfigured } from "@/lib/freshmind/cloudinary"
import { jsonError, validationError } from "@/lib/freshmind/api"
import { cloudinarySignRequestSchema } from "@/lib/freshmind/validators"

export async function POST(request: Request) {
  if (!isCloudinaryConfigured()) {
    return jsonError("Cloudinary is not configured.", 503)
  }

  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return jsonError("Request body must be valid JSON.", 400)
  }

  const parsed = cloudinarySignRequestSchema.safeParse(payload)
  if (!parsed.success) {
    return validationError(parsed.error)
  }

  const signedPayload = createCloudinarySignedUploadPayload()
  return NextResponse.json({ signedPayload })
}

