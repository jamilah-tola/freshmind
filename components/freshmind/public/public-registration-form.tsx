"use client"

import { useRef, useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Check, CircleHelp } from "lucide-react"

import { PillButton } from "@/components/site/pill-button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  ageBands,
  educationLevels,
  passportStatuses,
  type OpportunityWithSchedule,
} from "@/lib/freshmind/types"
import { cn } from "@/lib/utils"

const formSteps = [
  {
    id: 1,
    title: "Choose your slot",
    copy: "Pick the interview date and venue you can attend.",
  },
  {
    id: 2,
    title: "Candidate profile",
    copy: "Share the basics Freshmind needs before screening.",
  },
  {
    id: 3,
    title: "Final details",
    copy: "Add the last details and submit your registration.",
  },
] as const

type Props = {
  cloudinaryEnabled: boolean
  opening: OpportunityWithSchedule
}

type HelpMarkerProps = {
  label: string
  text: string
}

type FieldLabelProps = {
  label: string
  helpText?: string
}

function HelpMarker({ label, text }: HelpMarkerProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={label}
          className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/8 bg-white text-muted-foreground transition-colors duration-150 hover:text-foreground"
        >
          <CircleHelp className="h-3.5 w-3.5" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-[240px] rounded-md border border-black/6 bg-white px-3 py-2 text-xs leading-6 text-foreground shadow-md">
        {text}
      </TooltipContent>
    </Tooltip>
  )
}

function FieldLabel({ label, helpText }: FieldLabelProps) {
  return (
    <span className="flex items-center gap-2 text-sm font-medium text-foreground">
      {label}
      {helpText ? <HelpMarker label={`Help for ${label}`} text={helpText} /> : null}
    </span>
  )
}

export function PublicRegistrationForm({
  cloudinaryEnabled,
  opening,
}: Props) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [activeStep, setActiveStep] = useState(1)
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

  function validateStep(stepId: number) {
    const stepPanel = formRef.current?.querySelector<HTMLElement>(
      `[data-step-panel="${stepId}"]`
    )

    if (!stepPanel) {
      return false
    }

    const fields = Array.from(
      stepPanel.querySelectorAll("input, select, textarea")
    ) as Array<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    const checkedRadioGroups = new Set<string>()

    for (const field of fields) {
      if (field instanceof HTMLInputElement && field.type === "radio") {
        if (!field.required || checkedRadioGroups.has(field.name)) {
          continue
        }

        checkedRadioGroups.add(field.name)
        const selected = stepPanel.querySelector<HTMLInputElement>(
          `input[name="${field.name}"]:checked`
        )

        if (!selected) {
          field.reportValidity()
          return false
        }

        continue
      }

      if (!field.checkValidity()) {
        field.reportValidity()
        return false
      }
    }

    return true
  }

  function goToNextStep() {
    if (!validateStep(activeStep)) {
      return
    }

    setActiveStep((current) => Math.min(current + 1, formSteps.length))
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
    <TooltipProvider delayDuration={120}>
      <form
        ref={formRef}
        className="space-y-8"
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

        <div className="grid gap-3 lg:grid-cols-3">
          {formSteps.map((step) => {
            const isActive = activeStep === step.id
            const isComplete = activeStep > step.id

            return (
              <div
                key={step.id}
                className={cn(
                  "rounded-[1.2rem] border p-4 transition-colors duration-150",
                  isActive
                    ? "border-primary bg-primary/6"
                    : isComplete
                      ? "border-primary/15 bg-primary/6"
                      : "border-black/6 bg-background"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Step {step.id}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {step.copy}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                      isComplete
                        ? "bg-primary text-primary-foreground"
                        : isActive
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary text-secondary-foreground"
                    )}
                  >
                    {isComplete ? <Check className="h-4 w-4" /> : step.id}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <fieldset
          data-step-panel="1"
          hidden={activeStep !== 1}
          className="space-y-5"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <p className="metric-label">Choose your slot</p>
              <HelpMarker
                label="Help for choosing your slot"
                text="Pick the venue and interview time you can confidently attend. Your registration is tied to this selection."
              />
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              Select one open interview slot before moving to the next step.
            </p>
          </div>

          <div className="space-y-3">
            {bookableSlots.map((slot) => (
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
            ))}
          </div>

          <div className="flex justify-end pt-2">
            <PillButton type="button" tone="dark" onClick={goToNextStep}>
              Continue to profile
            </PillButton>
          </div>
        </fieldset>

        <fieldset
          data-step-panel="2"
          hidden={activeStep !== 2}
          className="space-y-5"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <p className="metric-label">Candidate profile</p>
              <HelpMarker
                label="Help for candidate profile"
                text="Use the same details Freshmind can verify later by phone, document review, and interview attendance."
              />
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              Complete your personal and experience details as clearly as possible.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <FieldLabel
                label="Full name"
                helpText="Enter your official names the same way they appear on your main identification document."
              />
              <input name="fullName" required className="public-field" />
            </label>
            <label className="space-y-2">
              <FieldLabel
                label="Phone"
                helpText="Use the number Freshmind should call or message for interview follow-up."
              />
              <input name="phone" required className="public-field" />
            </label>
            <label className="space-y-2">
              <FieldLabel
                label="District"
                helpText="Share the district where you currently live so the team can plan follow-up accurately."
              />
              <input name="district" required className="public-field" />
            </label>
            <label className="space-y-2">
              <FieldLabel label="Email (optional)" />
              <input name="email" type="email" className="public-field" />
            </label>
            <label className="space-y-2">
              <FieldLabel label="Age band" />
              <select name="ageBand" required className="public-select">
                <option value="">Select</option>
                {ageBands.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2">
              <FieldLabel label="Education" />
              <select name="education" required className="public-select">
                <option value="">Select</option>
                {educationLevels.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2">
              <FieldLabel
                label="Years of experience"
                helpText="Keep this short and practical, for example: 3 years as a hotel cleaner or 2 years in warehouse loading."
              />
              <input
                name="yearsOfExperience"
                required
                placeholder="Example: 3 years in security"
                className="public-field"
              />
            </label>
            <label className="space-y-2">
              <FieldLabel
                label="Passport status"
                helpText="Choose the option that matches your current passport progress today."
              />
              <select name="passportStatus" required className="public-select">
                <option value="">Select</option>
                {passportStatuses.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex flex-wrap justify-between gap-3 pt-2">
            <PillButton
              type="button"
              tone="light"
              icon="none"
              onClick={() => setActiveStep(1)}
            >
              Back
            </PillButton>
            <PillButton type="button" tone="dark" onClick={goToNextStep}>
              Continue to final details
            </PillButton>
          </div>
        </fieldset>

        <fieldset
          data-step-panel="3"
          hidden={activeStep !== 3}
          className="space-y-5"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <p className="metric-label">Final details</p>
              <HelpMarker
                label="Help for final details"
                text="Use this step for anything that can help the team assess readiness, documents, and destination preference before interview day."
              />
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              Review the final details, then submit to receive your registration reference.
            </p>
          </div>

          <label className="space-y-2">
            <FieldLabel
              label="Preferred country"
              helpText="This is the destination you are currently willing and prepared to interview for."
            />
            <input
              name="preferredCountry"
              defaultValue={opening.destinationCountry}
              required
              className="public-field"
            />
          </label>
          <label className="space-y-2">
            <FieldLabel
              label="Optional CV or document upload"
              helpText="You can attach a CV, certificate, or related document if it helps explain your background. This step is optional."
            />
            <input
              name="document"
              type="file"
              className="block w-full rounded-[1.5rem] border border-dashed border-black/10 bg-background px-4 py-4 text-sm"
            />
          </label>
          <label className="space-y-2">
            <FieldLabel
              label="Notes"
              helpText="Use notes for useful context only, such as availability, prior Gulf experience, or anything the team should know before the interview."
            />
            <textarea
              name="notes"
              rows={4}
              className="public-textarea"
              placeholder="Anything the Freshmind team should know before your interview."
            />
          </label>

          <div className="flex flex-wrap justify-between gap-3 pt-2">
            <PillButton
              type="button"
              tone="light"
              icon="none"
              onClick={() => setActiveStep(2)}
            >
              Back
            </PillButton>
            <PillButton type="submit" tone="dark" disabled={isPending}>
              {isPending ? "Submitting registration..." : "Submit registration and get reference"}
            </PillButton>
          </div>
        </fieldset>
      </form>
    </TooltipProvider>
  )
}
