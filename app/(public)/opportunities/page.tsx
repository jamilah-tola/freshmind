import Link from "next/link"

import { Eyebrow } from "@/components/site/editorial"
import { OpportunityShowcaseCard } from "@/components/site/opportunity-showcase-card"
import { PageHero } from "@/components/site/page-hero"
import { opportunitiesPageCopy } from "@/lib/freshmind/editorial-copy"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

export const dynamic = "force-dynamic"

const opportunityThemes = [
  {
    title: "Jobs in Dubai for Ugandans",
    description:
      "UAE openings often cover security, hospitality, cleaners, and facilities support with employer-managed accommodation or transport terms.",
  },
  {
    title: "Jobs in Qatar for Ugandans",
    description:
      "Qatar demand commonly includes driver, logistics, airport support, and other service roles that require clean screening records.",
  },
  {
    title: "Jobs in Saudi Arabia for Ugandans",
    description:
      "Saudi Arabia remains a high-intent destination for hotel support, construction trades, care support, and employer-led workforce hiring.",
  },
  {
    title: "Security and guarding jobs abroad",
    description:
      "Security candidates are usually screened for discipline, presentation, shift readiness, and document preparation before shortlisting.",
  },
  {
    title: "Driver and logistics jobs abroad",
    description:
      "Driver roles rely on permit history, safety record, and route-readiness, which is why those details appear early in the recruitment flow.",
  },
  {
    title: "Hospitality, cleaning, and care roles",
    description:
      "Hotel support, cleaning, caregiver, and service roles stay popular because candidates can compare requirements, destinations, and next steps more easily.",
  },
] as const

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

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-5">
              <Eyebrow>{opportunitiesPageCopy.intro.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[15ch]">
                {opportunitiesPageCopy.intro.title}
              </h2>
              <p className="section-copy">{opportunitiesPageCopy.intro.description}</p>

              <div className="border-t border-black/8 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Before you register
                </p>
                <div className="mt-4 space-y-3">
                  {opportunitiesPageCopy.guidePoints.map((point) => (
                    <p key={point} className="text-sm leading-7 text-foreground/82">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {opportunityThemes.map((theme) => (
                <article key={theme.title} className="surface-card p-5">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                    {theme.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {theme.description}
                  </p>
                  <Link
                    href="#opportunities-list"
                    className="mt-5 inline-flex text-sm font-semibold text-primary hover:text-primary/80"
                  >
                    Jump to live openings
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

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
