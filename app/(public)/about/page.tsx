import {
  Globe2,
  Handshake,
  ShieldCheck,
  Target,
  Telescope,
  Users2,
} from "lucide-react"

import { Eyebrow } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { aboutPageCopy } from "@/lib/freshmind/editorial-copy"
import { buildMetadata, siteConfig } from "@/lib/site"

const overviewIcons = [ShieldCheck, Globe2, Users2, Handshake] as const

const teamPlaceholders = [
  {
    initials: "MD",
    role: "Managing Director",
    note: "Leadership profile coming soon.",
  },
  {
    initials: "RO",
    role: "Recruitment Operations",
    note: "Team member profile coming soon.",
  },
  {
    initials: "CW",
    role: "Candidate Welfare",
    note: "Team member profile coming soon.",
  },
  {
    initials: "EP",
    role: "Employer Partnerships",
    note: "Team member profile coming soon.",
  },
] as const

const aboutFaqs = [
  {
    question: "Is Freshmind International licensed?",
    answer: `Yes. Freshmind publishes MGLSD License No. ${siteConfig.licenseNumber} as part of its public company information.`,
  },
  {
    question: "What kind of opportunities does Freshmind handle?",
    answer:
      "Freshmind focuses on overseas recruitment across sectors such as security, transport, hospitality, cleaning, construction, retail, and healthcare.",
  },
  {
    question: "Which destinations are listed in the company profile?",
    answer:
      "The profile names the United Arab Emirates, Qatar, Saudi Arabia, Jordan, and Poland as destination markets.",
  },
  {
    question: "How should candidates contact Freshmind?",
    answer:
      "Candidates should use the official phone numbers, email address, and office details published on this website.",
  },
] as const

export const metadata = buildMetadata({
  title: aboutPageCopy.metadata.title,
  description: aboutPageCopy.metadata.description,
  path: "/about",
})

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow={aboutPageCopy.hero.eyebrow}
        title={aboutPageCopy.hero.title}
        description={aboutPageCopy.hero.description}
        imageKey={aboutPageCopy.hero.image}
        compact
      />

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-[76rem] space-y-8">
            <div className="max-w-[56rem] space-y-5">
              <Eyebrow>{aboutPageCopy.overview.eyebrow}</Eyebrow>
              <div className="space-y-4">
                <h2 className="section-title max-w-[18ch]">{aboutPageCopy.overview.title}</h2>
                <p className="max-w-[54rem] text-xl font-semibold leading-8 text-foreground sm:text-2xl sm:leading-9">
                  {aboutPageCopy.overview.description}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {aboutPageCopy.overviewPoints.map((point, index) => {
                const Icon = overviewIcons[index % overviewIcons.length]

                return (
                  <article
                    key={point}
                    className="rounded-[1rem] border border-black/8 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBF4_100%)] p-5 shadow-[0_14px_30px_rgba(15,23,42,0.05)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{point}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="border-t border-black/8 pt-5">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Target className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Mission
                </p>
                <blockquote className="mt-4 text-[1.2rem] leading-9 text-foreground">
                  {aboutPageCopy.mission}
                </blockquote>
              </div>
            </div>
          </div>

          <div className="border-t border-black/8 pt-5">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Telescope className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Vision
                </p>
                <blockquote className="mt-4 text-[1.2rem] leading-9 text-foreground">
                  {aboutPageCopy.vision}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="max-w-[48rem] space-y-4">
            <Eyebrow>Team</Eyebrow>
            <h2 className="section-title max-w-[14ch]">Meet the Freshmind team</h2>
            <p className="section-copy">
              Profiles for key Freshmind team members will be added here.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamPlaceholders.map((member) => (
              <article
                key={member.role}
                className="rounded-[1.25rem] border border-black/8 bg-white p-6 text-center shadow-[0_16px_34px_rgba(15,23,42,0.06)]"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-lg font-semibold tracking-[0.08em] text-primary">
                  {member.initials}
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-foreground">
                  {member.role}
                </h3>
                <p className="mx-auto mt-3 text-sm leading-7 text-muted-foreground">
                  {member.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container">
          <div className="max-w-[48rem] space-y-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="section-title max-w-[14ch]">Common questions about Freshmind</h2>
            <p className="section-copy">
              A short reference for candidates and families reviewing Freshmind's company information.
            </p>
          </div>

          <div className="mt-10 divide-y divide-black/8 rounded-[1.25rem] border border-black/8 bg-white shadow-[0_16px_34px_rgba(15,23,42,0.06)]">
            {aboutFaqs.map((item) => (
              <details key={item.question} className="group px-6 py-5 open:bg-secondary/40">
                <summary className="cursor-pointer list-none text-base font-semibold tracking-[-0.01em] text-foreground marker:hidden">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {item.question}
                    <span className="text-xl leading-none text-primary group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
