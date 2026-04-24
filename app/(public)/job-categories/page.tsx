import Link from "next/link"

import { Eyebrow, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { narrativeMedia } from "@/lib/freshmind/presentation"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

const compensationNotes = [
  "Security and driver roles often pay more where experience, licensing, or overtime requirements are higher.",
  "Accommodation, transport, meals, and medical support depend on the employer contract and destination country.",
  "Candidates should confirm salary, deductions, leave, and contract duration in writing before travel arrangements begin.",
] as const

export const metadata = buildMetadata({
  title: "Job Categories",
  description:
    "Review Freshmind's main job categories and move into the verified openings that match your skills and preferred path.",
  path: "/job-categories",
  keywords: [
    "job categories abroad for Ugandans",
    "security jobs abroad Uganda",
    "driver jobs abroad Uganda",
    "hospitality jobs abroad Uganda",
  ],
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
            Compare sectors, check role examples, and move to live openings with clear expectations.
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

      <section className="pb-16 sm:pb-20">
        <div className="container border-t border-black/8 py-10 sm:py-12">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>Salary context</Eyebrow>
              <h2 className="section-title max-w-[11ch]">
                Typical compensation varies by role, destination, and contract conditions.
              </h2>
            </div>
            <div className="site-span-12 space-y-5 lg:col-span-7">
              <p className="section-copy">
                Pay expectations are strongest when candidates review the role category,
                destination market, and contract structure together instead of relying on
                generic salary promises.
              </p>
              <div className="space-y-4">
                {compensationNotes.map((item) => (
                  <div key={item} className="border-t border-black/8 pt-4">
                    <p className="text-sm leading-7 text-foreground/82">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <PillButton asChild tone="dark">
                  <Link href="/opportunities">Browse live opportunities</Link>
                </PillButton>
                <PillButton asChild tone="light">
                  <Link href="/contact">Talk to Freshmind</Link>
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
