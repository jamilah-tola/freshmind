import Link from "next/link"

import { EditorialSplit, Eyebrow, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { narrativeMedia } from "@/lib/freshmind/presentation"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "How It Works",
  description:
    "Understand Freshmind's interview registration, screening, shortlisting, and deployment preparation process before you apply.",
  path: "/how-it-works",
})

export default function HowItWorksPage() {
  const steps = [
    {
      title: "Browse a verified opening",
      copy:
        "Read the role, the destination, the expected documents, and the current interview regions before you register.",
    },
    {
      title: "Choose your interview slot",
      copy:
        "Select the city, date, and time that works for you. Published seat counts help you act before a venue fills up.",
    },
    {
      title: "Submit your profile",
      copy:
        "Enter your candidate details and receive a Freshmind reference immediately after submission.",
    },
    {
      title: "Attend screening and document check",
      copy:
        "Bring the required originals and arrive early. Freshmind handles screening through official office and hub channels only.",
    },
    {
      title: "Shortlist, briefing, and deployment prep",
      copy:
        "Selected candidates move into documentation, employer processing, pre-departure briefing, and official travel preparation.",
    },
  ]

  return (
    <main className="page-shell">
      <PageHero
        eyebrow="How it works"
        title="A professional recruitment process should feel visible at every step."
        description="Freshmind's job is not just to attract candidates. It is to explain what happens next, who communicates, and how each worker stays protected while moving through the process."
        imageKey={narrativeMedia.howItWorks}
        compact
        actions={
          <PillButton asChild tone="dark">
            <Link href="/opportunities">Start with active opportunities</Link>
          </PillButton>
        }
      />

      <section className="pb-10 sm:pb-12">
        <div className="container grid gap-5 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="surface-card p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-foreground">
                Step {index + 1}
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-foreground">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <SectionShell outerClassName="pt-0">
        <EditorialSplit
          eyebrow="Expectations and boundaries"
          title="The process language now feels structured enough to lower anxiety."
          description="The redesigned page helps candidates understand both what Freshmind will do and what a credible agency will not ask them to accept."
          imageKey="interviewSuite"
          theme="light"
          points={[
            "Official Freshmind communication only.",
            "Published requirements and official follow-up at each stage.",
            "Reference-based follow-up after registration.",
            "Verification guidance available before any next step.",
          ]}
          cta={
            <PillButton asChild tone="dark">
              <Link href="/opportunities">Start with active opportunities</Link>
            </PillButton>
          }
        />
      </SectionShell>
    </main>
  )
}
