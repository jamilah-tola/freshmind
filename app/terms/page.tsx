import { Eyebrow, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Review the platform terms for using Freshmind's interview registration and candidate information services.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Terms of service"
        title="Use of this platform should be straightforward, lawful, and transparent."
        description="These terms set expectations for candidates using the Freshmind site to browse openings and register for interviews."
        imageKey="interviewSuite"
        compact
      />

      <SectionShell>
        <div className="space-y-4 pb-6">
          <Eyebrow>Platform expectations</Eyebrow>
          <h2 className="section-title max-w-[12ch]">
            Terms should feel readable, visible, and aligned with the rest of the experience.
          </h2>
        </div>
        <article className="surface-card space-y-6 p-8 text-sm leading-8 text-muted-foreground">
          <p>
            Freshmind publishes opening information, interview registration tools,
            and candidate guidance to support ethical recruitment and a more
            organized screening process. Candidates are expected to submit truthful,
            accurate information when registering for interviews or uploading
            supporting documents.
          </p>
          <p>
            Registration does not guarantee shortlist, selection, visa approval, or
            deployment. Progress depends on role eligibility, employer screening,
            document readiness, and official process requirements.
          </p>
          <p>
            Freshmind reserves the right to update, pause, or close openings and
            interview slots where capacity changes, employer demand changes, or
            verification issues arise.
          </p>
          <p>
            Candidates should not misuse the platform to submit fraudulent
            information, impersonate another person, or interfere with Freshmind's
            recruitment operations. Official communication should be confirmed
            through Freshmind's published channels whenever doubt arises.
          </p>
        </article>
      </SectionShell>
    </main>
  )
}
