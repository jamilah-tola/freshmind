import { Eyebrow, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Review terms for using Freshmind's website, opportunity listings, and interview registration flow.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Terms of service"
        title="Platform use should stay clear, lawful, and accountable."
        description="These terms explain expectations for candidates, employers, and visitors using Freshmind's public recruitment platform."
        imageKey="interviewSuite"
        compact
      />

      <SectionShell>
        <div className="space-y-4 pb-6">
          <Eyebrow>Platform expectations</Eyebrow>
          <h2 className="section-title max-w-[12ch]">
            Use the platform with accurate information and official communication practices.
          </h2>
        </div>
        <article className="surface-card space-y-6 p-8 text-sm leading-8 text-muted-foreground">
          <p>
            Freshmind publishes opportunity information, process guidance, and registration
            tools to support structured and ethical recruitment pathways.
          </p>
          <p>
            Users are responsible for submitting truthful and complete information when
            registering for interviews or sharing supporting records.
          </p>
          <p>
            Registration does not guarantee shortlist, placement, visa approval, or final
            deployment. Progress depends on eligibility, role demand, screening outcomes,
            and contract requirements.
          </p>
          <p>
            Freshmind may update, pause, or close openings where intake conditions,
            employer requirements, compliance checks, or slot capacity changes.
          </p>
          <p>
            Users should avoid fraudulent submissions, impersonation, or unauthorized use
            of Freshmind branding and communication channels.
          </p>
        </article>
      </SectionShell>
    </main>
  )
}
