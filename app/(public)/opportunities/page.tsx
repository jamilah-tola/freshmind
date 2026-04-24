import { Eyebrow } from "@/components/site/editorial"
import { OpportunityShowcaseCard } from "@/components/site/opportunity-showcase-card"
import { PageHero } from "@/components/site/page-hero"
import { opportunitiesPageCopy } from "@/lib/freshmind/editorial-copy"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

export const dynamic = "force-dynamic"

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
      />

      <section id="live-openings" className="pb-12 sm:pb-16 lg:pb-20">
        <div className="container">
          <div className="space-y-4">
            <Eyebrow>Live opportunities</Eyebrow>
            <h2 className="section-title">Book an active interview route</h2>
            <p className="section-copy">
              Every card below opens the booking page with the opportunity brief, published
              interview dates, requirements, and the registration form.
            </p>
          </div>
          <div className="mt-8 space-y-5">
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
          <div className="mt-8 space-y-5">
            {upcoming.map((opening) => (
              <OpportunityShowcaseCard key={opening.id} opening={opening} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
