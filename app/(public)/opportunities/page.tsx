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
  keywords: [
    "verified jobs abroad for Ugandans",
    "jobs in Dubai for Ugandans",
    "jobs in Qatar for Ugandans",
    "jobs in Saudi Arabia for Ugandans",
    "security jobs abroad for Ugandans",
    "driver jobs abroad for Ugandans",
  ],
})

export default async function OpportunitiesPage() {
  const repository = getRepository()
  const openings = await repository.listPublicOpenings()

  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Opportunities available"
        title={opportunitiesPageCopy.hero.title}
        description={opportunitiesPageCopy.hero.description}
        imageKey={opportunitiesPageCopy.hero.image}
        compact
      />

      <section id="opportunities-list" className="py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="space-y-5">
            {openings.length > 0 ? (
              openings.map((opening) => (
                <OpportunityShowcaseCard key={opening.id} opening={opening} />
              ))
            ) : (
              <div className="rounded-[1.5rem] border border-black/6 bg-white px-6 py-10 text-sm leading-7 text-muted-foreground shadow-sm">
                There are no published opportunities right now. New listings and updated
                interview dates will appear here.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
