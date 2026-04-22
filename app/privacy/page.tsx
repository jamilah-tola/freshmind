import { Eyebrow, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read how Freshmind handles candidate information, registration details, and document uploads during the recruitment process.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Privacy policy"
        title="Candidate information should be collected carefully and disclosed carefully."
        description="This policy explains how Freshmind handles information submitted through the interview registration and admin review process."
        imageKey="trustDesk"
        compact
      />

      <SectionShell>
        <div className="space-y-4 pb-6">
          <Eyebrow>Handling candidate data</Eyebrow>
          <h2 className="section-title max-w-[12ch]">
            Legal pages should feel as deliberate and polished as the rest of the trust system.
          </h2>
        </div>
        <article className="surface-card space-y-6 p-8 text-sm leading-8 text-muted-foreground">
          <p>
            Freshmind collects candidate details to assess interview readiness,
            organize screening schedules, communicate about verified opportunities,
            and support worker welfare and case handling where appropriate.
          </p>
          <p>
            Information collected may include identity details, contact details,
            region, education, experience, passport status, preferred destination,
            and optional uploaded documents. Freshmind uses this information only
            for recruitment operations, candidate support, and lawful compliance
            needs connected to overseas employment processing.
          </p>
          <p>
            Freshmind should not share candidate information casually or with
            unauthorized intermediaries. Access to sensitive data should be limited
            to authorized staff and systems used for official recruitment handling.
          </p>
          <p>
            Candidates who need clarification about the handling of their personal
            information should contact Freshmind through the official channels listed
            on the contact page before sharing additional documents.
          </p>
        </article>
      </SectionShell>
    </main>
  )
}
