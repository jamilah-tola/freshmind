import Link from "next/link"

import { EditorialSplit, Eyebrow, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { narrativeMedia } from "@/lib/freshmind/presentation"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "How It Works",
  description:
    "Understand Freshmind's application workflow, preparation checklist, timelines, and what happens after registration.",
  path: "/how-it-works",
})

export default function HowItWorksPage() {
  const steps = [
    {
      title: "Browse a verified opening",
      copy:
        "Review role requirements, destination, and interview regions before choosing your slot.",
    },
    {
      title: "Choose your interview slot",
      copy:
        "Select an available venue and time, then secure your registration with complete details.",
    },
    {
      title: "Submit profile and get reference",
      copy:
        "After submission, keep your Freshmind reference for all official follow-up communication.",
    },
    {
      title: "Attend screening and checks",
      copy:
        "Arrive with required documents and follow the published screening instructions for your intake.",
    },
    {
      title: "Shortlist, briefing, and deployment prep",
      copy:
        "Selected candidates move into contract clarification, documentation processing, and pre-departure preparation.",
    },
  ]

  const preparationChecklist = [
    "Valid identification and passport status details.",
    "Academic, training, and work reference documents where relevant.",
    "Clear understanding of destination and role expectations.",
    "Any questions on process, fees, or safety prepared in advance.",
  ]

  const timelineNotes = [
    {
      label: "Registration to screening",
      value: "Depends on slot availability",
      detail:
        "Candidates can reduce delays by selecting active slots and submitting complete information.",
    },
    {
      label: "Screening to shortlist",
      value: "Varies by role intake",
      detail:
        "Shortlist timing depends on employer demand, candidate fit, and document readiness.",
    },
    {
      label: "Shortlist to deployment prep",
      value: "Contract-driven",
      detail:
        "Documentation and travel readiness follow confirmed contract and compliance requirements.",
    },
  ]

  const afterRegistration = [
    "Use your reference number in every follow-up message.",
    "Respond only to official Freshmind communication channels.",
    "Report suspicious payment or travel instructions immediately.",
    "Keep copies of submitted records and receipts for verification.",
  ]

  return (
    <main className="page-shell">
      <PageHero
        eyebrow="How it works"
        title="A clear process reduces risk for candidates and improves fit for employers."
        description="Freshmind's workflow is designed to make every stage visible: from role review and registration to screening, contract preparation, and deployment readiness."
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
              <h2 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-foreground">
                {step.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="border-t border-black/8 pt-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              What to prepare
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-foreground/82">
              {preparationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border-t border-black/8 pt-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Typical timeline signals
            </p>
            <div className="mt-5 grid gap-4">
              {timelineNotes.map((note) => (
                <div
                  key={note.label}
                  className="rounded-[1rem] border border-black/8 bg-background px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {note.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{note.value}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{note.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionShell outerClassName="pt-0">
        <EditorialSplit
          eyebrow="After registration"
          title="Official follow-up should stay simple, documented, and verifiable."
          description="Candidates should be able to track their next step through references, official channels, and published safety guidance."
          imageKey="interviewSuite"
          theme="light"
          points={afterRegistration}
          cta={
            <div className="flex flex-wrap gap-3">
              <PillButton asChild tone="dark">
                <Link href="/opportunities">Browse openings</Link>
              </PillButton>
              <PillButton asChild tone="light">
                <Link href="/safety">Review safety guidance</Link>
              </PillButton>
            </div>
          }
        />
      </SectionShell>
    </main>
  )
}
