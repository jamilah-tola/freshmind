import Link from "next/link"

import { Eyebrow } from "@/components/site/editorial"
import { OpportunityShowcaseCard } from "@/components/site/opportunity-showcase-card"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { opportunitiesPageCopy } from "@/lib/freshmind/editorial-copy"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: opportunitiesPageCopy.metadata.title,
  description: opportunitiesPageCopy.metadata.description,
  path: "/opportunities",
})

export default async function OpportunitiesPage() {
  const repository = getRepository()
  const openings = await repository.listActiveOpenings()

  const live = openings.filter((opening) => opening.status === "active")
  const upcoming = openings.filter((opening) => opening.status === "upcoming")

  return (
    <main className="page-shell">
      <PageHero
        eyebrow={opportunitiesPageCopy.hero.eyebrow}
        title={opportunitiesPageCopy.hero.title}
        description={opportunitiesPageCopy.hero.description}
        imageKey={opportunitiesPageCopy.hero.image}
        compact
        actions={
          <>
            <PillButton asChild tone="dark">
              <a href="#live-openings">Go to live openings</a>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href="/contact">Contact Freshmind</Link>
            </PillButton>
          </>
        }
      />

      <section className="py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="space-y-5">
            <Eyebrow>{opportunitiesPageCopy.intro.eyebrow}</Eyebrow>
            <h2 className="section-title max-w-[10ch]">
              {opportunitiesPageCopy.intro.title}
            </h2>
            <p className="section-copy">{opportunitiesPageCopy.intro.description}</p>
          </div>
          <div className="border-t border-black/8">
            {opportunitiesPageCopy.guidePoints.map((point) => (
              <div key={point} className="border-b border-black/8 py-5">
                <p className="text-sm leading-7 text-foreground/82">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="live-openings" className="pb-12 sm:pb-16 lg:pb-20">
        <div className="container">
          <div className="space-y-4">
            <Eyebrow>Live opportunities</Eyebrow>
            <h2 className="section-title">Published interview routes</h2>
            <p className="section-copy">
              These openings are already live inside Freshmind's published recruitment flow.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {live.map((opening) => (
              <OpportunityShowcaseCard key={opening.id} opening={opening} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container">
          <div className="space-y-4">
            <Eyebrow>Upcoming opportunities</Eyebrow>
            <h2 className="section-title">Roles moving toward publication</h2>
            <p className="section-copy">
              These roles are already in the verified pipeline, even if interview schedules are
              still being finalized.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {upcoming.map((opening) => (
              <OpportunityShowcaseCard key={opening.id} opening={opening} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
