import Link from "next/link"

import { Eyebrow, SectionShell } from "@/components/site/editorial"
import { OpportunityShowcaseCard } from "@/components/site/opportunity-showcase-card"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { narrativeMedia } from "@/lib/freshmind/presentation"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Job Categories",
  description:
    "Review Freshmind's main job categories and move into the verified openings that match your skills and preferred path.",
  path: "/job-categories",
})

export default function JobCategoriesPage() {
  const repository = getRepository()
  const categories = repository.listCategories()

  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Job categories"
        title="Different categories need different screening signals, documentation, and candidate preparation."
        description="Freshmind uses category pages to explain what matters before a candidate chooses a live interview slot."
        imageKey={narrativeMedia.jobCategories}
        compact
        actions={
          <PillButton asChild tone="dark">
            <Link href="/opportunities">Browse live opportunities</Link>
          </PillButton>
        }
      />

      <SectionShell>
        <div className="space-y-4 pb-8">
          <Eyebrow>Category overview</Eyebrow>
          <h2 className="section-title max-w-[13ch]">
            Each category page now feels like a guided decision point, not a filler archive.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <article key={category.slug} className="surface-card p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-secondary-foreground">
                {category.eyebrow}
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-foreground">{category.label}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {category.description}
              </p>
              <div className="mt-5 rounded-[1rem] bg-background px-4 py-3 text-sm font-medium text-foreground">
                {category.heroMetric}
              </div>
              <PillButton asChild tone="light" className="mt-6">
                <Link href={`/job-categories/${category.slug}`}>View category</Link>
              </PillButton>
            </article>
          ))}
        </div>
      </SectionShell>
    </main>
  )
}
