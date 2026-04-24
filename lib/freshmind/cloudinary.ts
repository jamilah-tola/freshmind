import "server-only"

import { v2 as cloudinary } from "cloudinary"

const candidateDocumentsFolder = "freshmind/candidate-documents"

export function isCloudinaryConfigured() {
  return Boolean(
    process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET
  )
}

export function getCloudinaryPublicConfig() {
  if (!isCloudinaryConfigured()) {
    throw new Error("Cloudinary is not configured.")
  }

  return {
    apiKey: process.env.CLOUDINARY_API_KEY!,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
  }
}

export function createCloudinarySignedUploadPayload(options?: {
  publicId?: string
  timestamp?: number
}) {
  if (!isCloudinaryConfigured()) {
    throw new Error("Cloudinary is not configured.")
  }

  const timestamp = options?.timestamp ?? Math.floor(Date.now() / 1000)
  const publicId =
    options?.publicId ?? `candidate-${timestamp}-${Math.random().toString(36).slice(2, 8)}`

  const paramsToSign = {
    folder: candidateDocumentsFolder,
    public_id: publicId,
    timestamp,
  }

  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET!
  )

  return {
    ...getCloudinaryPublicConfig(),
    folder: candidateDocumentsFolder,
    publicId,
    resourceType: "auto",
    signature,
    timestamp,
  }
}
