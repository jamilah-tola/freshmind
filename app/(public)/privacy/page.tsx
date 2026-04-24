import { Eyebrow, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Understand how Freshmind handles candidate and employer information submitted through the recruitment platform.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Privacy policy"
        title="Personal information should be handled with purpose and care."
        description="This policy outlines how recruitment-related data is collected, used, and protected across Freshmind's public workflows."
        imageKey="trustDesk"
        compact
      />

      <SectionShell>
        <div className="space-y-4 pb-6">
          <Eyebrow>Data handling principles</Eyebrow>
          <h2 className="section-title max-w-[12ch]">
            Recruitment data is collected for process execution, not casual sharing.
          </h2>
        </div>
        <article className="surface-card space-y-6 p-8 text-sm leading-8 text-muted-foreground">
          <p>
            Freshmind collects information needed to manage role matching, interview
            registration, screening coordination, documentation follow-up, and worker
            support communication.
          </p>
          <p>
            Data may include identity details, contacts, education, experience,
            destination preferences, and optional supporting documents supplied by users.
          </p>
          <p>
            Information is intended for official recruitment operations, candidate support,
            compliance workflows, and lawful reporting obligations where required.
          </p>
          <p>
            Access to sensitive records should be restricted to authorized personnel and
            approved systems supporting official operations.
          </p>
          <p>
            Anyone needing clarification about data handling should contact Freshmind
            through published channels before sharing additional documents.
          </p>
        </article>
      </SectionShell>
    </main>
  )
}
