"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"

import { PillButton } from "@/components/site/pill-button"
import type { OpportunityWithSchedule } from "@/lib/freshmind/types"

type Props = {
  cloudinaryEnabled: boolean
  opening: OpportunityWithSchedule
}

export function PublicRegistrationForm({
  cloudinaryEnabled,
  opening,
}: Props) {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const bookableSlots = opening.slots.filter(
    (slot) => slot.status === "open" && slot.seatsLeft > 0
  )

  async function uploadDocument(file: File) {
    const signResponse = await fetch("/api/uploads/cloudinary-sign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        filename: file.name,
        mimeType: file.type,
      }),
    })

    const signData = await signResponse.json()
    if (!signResponse.ok) {
      throw new Error(signData.error || "Unable to sign Cloudinary upload.")
    }

    const {
      apiKey,
      cloudName,
      folder,
      publicId,
      signature,
      timestamp,
    } = signData.signedPayload

    const uploadFormData = new FormData()
    uploadFormData.append("file", file)
    uploadFormData.append("api_key", apiKey)
    uploadFormData.append("folder", folder)
    uploadFormData.append("public_id", publicId)
    uploadFormData.append("signature", signature)
    uploadFormData.append("timestamp", String(timestamp))

    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
      {
        method: "POST",
        body: uploadFormData,
      }
    )

    const uploadData = await uploadResponse.json()
    if (!uploadResponse.ok) {
      throw new Error(uploadData.error?.message || "Cloudinary upload failed.")
    }

    return {
      originalFilename: file.name,
      secureUrl: uploadData.secure_url as string,
      publicId: uploadData.public_id as string,
      mimeType: file.type || "application/octet-stream",
      uploadedAt:
        (uploadData.created_at as string | undefined) || new Date().toISOString(),
    }
  }

  async function handleSubmit(formData: FormData) {
    const file = formData.get("document")
    const document =
      file instanceof File && file.size > 0
        ? await uploadDocument(file)
        : null

    const payload = {
      openingId: String(formData.get("openingId") || ""),
      slotId: String(formData.get("slotId") || ""),
      venueId: String(formData.get("venueId") || "") || undefined,
      fullName: String(formData.get("fullName") || ""),
      phone: String(formData.get("phone") || ""),
      district: String(formData.get("district") || ""),
      email: String(formData.get("email") || ""),
      ageBand: String(formData.get("ageBand") || ""),
      education: String(formData.get("education") || ""),
      category: String(formData.get("category") || ""),
      yearsOfExperience: String(formData.get("yearsOfExperience") || ""),
      passportStatus: String(formData.get("passportStatus") || ""),
      preferredCountry: String(formData.get("preferredCountry") || ""),
      notes: String(formData.get("notes") || ""),
      document,
    }

    const response = await fetch("/api/public/registrations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.error || "Unable to submit registration.")
    }

    startTransition(() => {
      router.push(
        `/register/success?reference=${encodeURIComponent(
          data.registration.reference
        )}&opening=${encodeURIComponent(opening.slug)}`
      )
      router.refresh()
    })
  }

  return (
    <form
      className="mt-8 space-y-8"
      onSubmit={(event) => {
        event.preventDefault()
        setError(null)

        const formData = new FormData(event.currentTarget)
        const file = formData.get("document")
        if (file instanceof File && file.size > 0 && !cloudinaryEnabled) {
          setError(
            "Document upload is not configured yet. Remove the file or configure Cloudinary."
          )
          return
        }

        void handleSubmit(formData).catch((submitError) => {
          setError(
            submitError instanceof Error
              ? submitError.message
              : "Unable to submit registration."
          )
        })
      }}
    >
      <input type="hidden" name="openingId" value={opening.id} />
      <input type="hidden" name="category" value={opening.category} />

      {error ? (
        <div className="rounded-[1.25rem] border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      <fieldset className="space-y-4">
        <legend className="metric-label">1. Choose your slot</legend>
        <div className="space-y-3">
          {bookableSlots.map((slot) => {
            return (
              <label
                key={slot.id}
                className="public-choice"
                data-disabled="false"
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="slotId"
                    value={slot.id}
                    required
                    className="mt-1 h-4 w-4 accent-[hsl(var(--accent))]"
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-semibold text-foreground">
                        {slot.venue.name} • {slot.venue.city}
                      </span>
                      <span className="rounded-full bg-secondary px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                        {slot.seatsLeft} seats left
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {slot.date} • {slot.startTime} - {slot.endTime}
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {slot.note}
                    </p>
                  </div>
                </div>
              </label>
            )
          })}
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="metric-label">2. Candidate profile</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-foreground">Full name</span>
            <input name="fullName" required className="public-field" />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-foreground">Phone</span>
            <input name="phone" required className="public-field" />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-foreground">District</span>
            <input name="district" required className="public-field" />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-foreground">Email (optional)</span>
            <input name="email" type="email" className="public-field" />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-foreground">Age band</span>
            <select name="ageBand" required className="public-select">
              <option value="">Select</option>
              {["18-24", "25-30", "31-35", "36-40", "41+"].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-foreground">Education</span>
            <select name="education" required className="public-select">
              <option value="">Select</option>
              {[
                "Primary",
                "O-Level",
                "A-Level",
                "Certificate",
                "Diploma",
                "Degree",
                "Postgraduate",
              ].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-foreground">
              Years of experience
            </span>
            <input
              name="yearsOfExperience"
              required
              placeholder="Example: 3 years in security"
              className="public-field"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-foreground">Passport status</span>
            <select name="passportStatus" required className="public-select">
              <option value="">Select</option>
              {["Valid passport", "Passport in process", "No passport"].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="metric-label">3. Final details</legend>
        <label className="space-y-2">
          <span className="text-sm font-medium text-foreground">Preferred country</span>
          <input
            name="preferredCountry"
            defaultValue={opening.destinationCountry}
            required
            className="public-field"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-foreground">
            Optional CV or document upload
          </span>
          <input
            name="document"
            type="file"
            className="block w-full rounded-[1.5rem] border border-dashed border-black/10 bg-background px-4 py-4 text-sm"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-foreground">Notes</span>
          <textarea
            name="notes"
            rows={4}
            className="public-textarea"
            placeholder="Anything the Freshmind team should know before your interview."
          />
        </label>
      </fieldset>

      <PillButton type="submit" tone="dark" className="w-full" disabled={isPending}>
        {isPending ? "Submitting registration..." : "Submit registration and get reference"}
      </PillButton>
    </form>
  )
}
