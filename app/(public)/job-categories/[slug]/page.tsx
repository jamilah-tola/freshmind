import Link from "next/link"
import { notFound } from "next/navigation"

import { Eyebrow, MediaCard, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

export const dynamic = "force-dynamic"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const repository = getRepository()
  const category = repository.getCategory(slug)

  if (!category) {
    return buildMetadata({
      title: "Category not found",
      description: "This Freshmind job category is not currently available.",
      path: `/job-categories/${slug}`,
    })
  }

  return buildMetadata({
    title: category.label,
    description: category.description,
    path: `/job-categories/${slug}`,
  })
}

export default async function JobCategoryDetailPage({ params }: Props) {
  const { slug } = await params
  const repository = getRepository()
  const category = repository.getCategory(slug)
  const openings = (await repository.listPublicOpenings()).filter(
    (opening) => opening.category === slug
  )

  if (!category) {
    notFound()
  }

  return (
    <main className="page-shell">
      <PageHero
        eyebrow={category.eyebrow}
        title={category.label}
        description={category.description}
        imageKey="travelReadiness"
        compact
      />

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <MediaCard imageKey="travelReadiness" className="min-h-[320px]" />
            <div className="surface-card p-7">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
                Typical roles
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                {category.examples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="mt-8 text-lg font-semibold text-foreground">
                Common destinations
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {category.destinations.join(", ")}
              </p>
              <div className="mt-5 rounded-[1rem] bg-background px-4 py-3 text-sm font-medium text-foreground">
                {category.heroMetric}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <Eyebrow>Openings in this category</Eyebrow>
            {openings.map((opening) => (
              <article key={opening.id} className="surface-card p-6">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
                  {opening.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {opening.summary}
                </p>
                <PillButton asChild tone="dark" className="mt-6">
                  <Link href={`/opportunities/${opening.slug}`}>View opening</Link>
                </PillButton>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>
    </main>
  )
}
