import Link from "next/link"

import { Eyebrow, MediaCard, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { storyOutcomeThemes } from "@/lib/freshmind/presentation"
import { successStories, testimonials } from "@/lib/freshmind/seed"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Success Stories",
  description:
    "Read outcome stories showing how clearer process communication improves candidate confidence and decision quality.",
  path: "/success-stories",
})

export default function SuccessStoriesPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Success stories"
        title="The best outcomes start with clear information, not pressure."
        description="These stories focus on what made the process safer and clearer for candidates: verified communication, practical preparation, and visible next steps."
        imageKey="nightShift"
        compact
        actions={
          <>
            <PillButton asChild tone="dark">
              <Link href="/opportunities">See open interviews</Link>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href="/contact">Talk to the team</Link>
            </PillButton>
          </>
        }
      />

      <section className="pb-10 sm:pb-12">
        <div className="container grid gap-6 lg:grid-cols-3">
          {successStories.map((story) => (
            <article key={story.id} className="surface-card p-6">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
                {story.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{story.summary}</p>
              <div
                className={`mt-6 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                  storyOutcomeThemes[story.outcome] === "dark"
                    ? "bg-primary text-primary-foreground"
                    : storyOutcomeThemes[story.outcome] === "accent"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-background text-foreground"
                }`}
              >
                Outcome: {story.outcome}
              </div>
            </article>
          ))}
        </div>
      </section>

      <SectionShell outerClassName="pt-0">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <Eyebrow>Candidate perspective</Eyebrow>
            <h2 className="section-title max-w-[11ch]">
              Confidence grows when process communication stays consistent.
            </h2>
            <p className="section-copy">
              Testimonials below reflect clarity themes that matter most: official
              communication, realistic expectations, and better preparation.
            </p>
            <MediaCard imageKey="nightShift" className="min-h-[320px]" />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((story) => (
              <div key={story.id} className="rounded-[1rem] border border-black/8 bg-white p-6">
                <p className="text-sm leading-8 text-foreground/82">“{story.quote}”</p>
                <div className="mt-5 text-sm text-muted-foreground">
                  {story.name} • {story.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>
    </main>
  )
}
