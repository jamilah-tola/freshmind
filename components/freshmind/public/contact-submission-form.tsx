"use client"

import { useState } from "react"
import { toast } from "sonner"

import { PillButton } from "@/components/site/pill-button"

export function ContactSubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <form
      className="grid gap-5 border-t border-black/8 pt-6"
      onSubmit={async (event) => {
        event.preventDefault()
        const form = event.currentTarget
        setIsSubmitting(true)

        const formData = new FormData(form)

        try {
          const response = await fetch("/api/public/contact-submissions", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              fullName: String(formData.get("fullName") || ""),
              phone: String(formData.get("phone") || ""),
              email: String(formData.get("email") || ""),
              inquiryType: String(formData.get("inquiryType") || ""),
              subject: String(formData.get("subject") || ""),
              registrationReference: String(
                formData.get("registrationReference") || ""
              ),
              message: String(formData.get("message") || ""),
            }),
          })

          const data = (await response.json().catch(() => null)) as
            | { error?: string }
            | null

          if (!response.ok) {
            toast.error(data?.error || "Unable to send message.")
            return
          }

          form.reset()
          toast.success("Your message has been delivered to Freshmind.")
        } catch {
          toast.error("Unable to send message.")
        } finally {
          setIsSubmitting(false)
        }
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Full name
          <input
            name="fullName"
            required
            className="public-field"
            placeholder="Enter your full name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Phone number
          <input
            name="phone"
            required
            className="public-field"
            placeholder="Enter your phone number"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Email address
          <input
            name="email"
            type="email"
            className="public-field"
            placeholder="Enter your email address"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Inquiry type
          <select name="inquiryType" required className="public-select">
            <option value="">Select inquiry type</option>
            <option value="Candidate support">Candidate support</option>
            <option value="Employer inquiry">Employer inquiry</option>
            <option value="Opportunity question">Opportunity question</option>
            <option value="Verification request">Verification request</option>
          </select>
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Opportunity or subject
          <input
            name="subject"
            className="public-field"
            placeholder="Role title, destination, or general subject"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Registration reference (optional)
          <input
            name="registrationReference"
            className="public-field"
            placeholder="FM-26-ABCDE"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-foreground">
        Message
        <textarea
          name="message"
          required
          className="public-textarea"
          placeholder="Tell Freshmind what you need help with"
        />
      </label>

      <p className="text-sm leading-7 text-muted-foreground">
        Submitting this form sends your message into Freshmind&apos;s internal
        contact inbox for review.
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        <PillButton type="submit" tone="dark" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </PillButton>
      </div>
    </form>
  )
}
