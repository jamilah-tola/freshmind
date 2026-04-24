import { beforeEach, describe, expect, it } from "vitest"

import { createCloudinarySignedUploadPayload } from "@/lib/freshmind/cloudinary"

describe("Cloudinary signing helper", () => {
  beforeEach(() => {
    process.env.CLOUDINARY_CLOUD_NAME = "freshmind-demo"
    process.env.CLOUDINARY_API_KEY = "1234567890"
    process.env.CLOUDINARY_API_SECRET = "super-secret"
  })

  it("returns a signed payload for candidate document uploads", () => {
    const payload = createCloudinarySignedUploadPayload({
      publicId: "candidate-cv",
      timestamp: 1710000000,
    })

    expect(payload).toMatchObject({
      apiKey: "1234567890",
      cloudName: "freshmind-demo",
      folder: "freshmind/candidate-documents",
      publicId: "candidate-cv",
      timestamp: 1710000000,
    })
    expect(payload.signature).toBeTruthy()
  })
})

