import Link from "next/link"

import { Eyebrow } from "@/components/site/editorial"
import { MiddleEastRoutesVisual } from "@/components/site/middle-east-routes-visual"
import { OpportunityShowcaseCard } from "@/components/site/opportunity-showcase-card"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { homePageCopy } from "@/lib/freshmind/editorial-copy"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: homePageCopy.metadata.title,
  description: homePageCopy.metadata.description,
})

export default async function HomePage() {
  const repository = getRepository()
  const openings = await repository.listActiveOpenings()
  const featured = openings.filter((opening) => opening.featured).slice(0, 2)
  const featuredOpenings = featured.length > 0 ? featured : openings.slice(0, 2)
  const heroStats = [
    { value: "7K+", label: "Placements" },
    { value: "25+", label: "Partners" },
    { value: "15+", label: "Countries" },
  ] as const

  return (
    <main className="page-shell">
      <PageHero
        eyebrow={homePageCopy.hero.eyebrow}
        title={homePageCopy.hero.title}
        titleClassName="max-w-[17ch] text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]"
        description={homePageCopy.hero.description}
        visual={<MiddleEastRoutesVisual />}
        className="min-h-[100svh] py-8 sm:py-10 lg:py-12"
        contentClassName="min-h-[calc(100svh-8rem)] content-center"
        actions={
          <>
            <PillButton asChild tone="dark">
              <Link href={homePageCopy.hero.candidateCta.href}>
                {homePageCopy.hero.candidateCta.label}
              </Link>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href={homePageCopy.hero.employerCta.href}>
                {homePageCopy.hero.employerCta.label}
              </Link>
            </PillButton>
          </>
        }
        details={
          <div className="grid grid-cols-3 gap-4 border-t border-black/8 pt-5 sm:gap-6">
            {heroStats.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="font-display text-[clamp(1.35rem,2.3vw,2rem)] font-semibold leading-none tracking-[-0.02em] text-foreground">
                  {item.value}
                </p>
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-[0.68rem]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        }
      />

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{homePageCopy.trustSection.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[12ch]">
                {homePageCopy.trustSection.title}
              </h2>
              <p className="section-copy">{homePageCopy.trustSection.description}</p>
            </div>
            <div className="site-span-12 grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {homePageCopy.trustBadges.map((item) => (
                <div key={item.label} className="border-t border-black/8 pt-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-foreground">
                    {item.value}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-4">
              <Eyebrow>{homePageCopy.process.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[11ch]">{homePageCopy.process.title}</h2>
              <p className="section-copy">{homePageCopy.process.description}</p>
            </div>
            <ol className="site-span-12 border-t border-black/8 lg:col-span-8">
              {homePageCopy.processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-4 border-b border-black/8 py-6 sm:grid-cols-[72px_1fr]"
                >
                  <div className="font-display text-[2.2rem] font-semibold leading-none tracking-[-0.05em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[54ch] text-sm leading-7 text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" id="featured-openings">
        <div className="container">
          <div className="space-y-4">
            <Eyebrow>{homePageCopy.featuredOpenings.eyebrow}</Eyebrow>
            <h2 className="section-title">{homePageCopy.featuredOpenings.title}</h2>
            <p className="section-copy">{homePageCopy.featuredOpenings.description}</p>
          </div>
          {featuredOpenings.length > 0 ? (
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {featuredOpenings.map((opening) => (
                <OpportunityShowcaseCard key={opening.id} opening={opening} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-[1.25rem] border border-black/8 bg-white p-6 text-sm leading-7 text-muted-foreground">
              No live openings are available right now. Use official channels to request
              the next published interview cycle.
            </div>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container border-y border-black/8 px-6 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{homePageCopy.salarySnapshot.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[12ch]">
                {homePageCopy.salarySnapshot.title}
              </h2>
              <p className="section-copy">{homePageCopy.salarySnapshot.description}</p>
            </div>
            <div className="site-span-12 grid gap-8 lg:col-span-7">
              <div className="border-t border-black/8 pt-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Indicative ranges
                </p>
                <div className="mt-4 grid gap-3">
                  {homePageCopy.salarySnapshot.salaryBands.map((band) => (
                    <div
                      key={band.sector}
                      className="rounded-[1rem] border border-black/8 bg-background px-4 py-3"
                    >
                      <p className="text-sm font-semibold text-foreground">{band.sector}</p>
                      <p className="mt-1 text-sm leading-7 text-muted-foreground">{band.range}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-black/8 pt-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Benefits framework
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground/82">
                  {homePageCopy.salarySnapshot.benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {homePageCopy.salarySnapshot.disclaimer}
                </p>
                <div className="mt-5">
                  <PillButton asChild tone="light">
                    <Link href="/salary-benefits">View Full Salary and Benefits Guide</Link>
                  </PillButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="site-grid">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{homePageCopy.antiScam.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[11ch]">{homePageCopy.antiScam.title}</h2>
              <p className="section-copy">{homePageCopy.antiScam.description}</p>
              <PillButton asChild tone="dark">
                <Link href={homePageCopy.antiScam.ctaHref}>{homePageCopy.antiScam.ctaLabel}</Link>
              </PillButton>
            </div>
            <div className="site-span-12 border-t border-black/8 lg:col-span-7">
              {homePageCopy.antiScam.points.map((point) => (
                <div key={point} className="border-b border-black/8 py-5">
                  <p className="text-sm leading-7 text-foreground/82">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container rounded-[2rem] border border-black/8 bg-white px-6 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{homePageCopy.employerBlock.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[11ch]">
                {homePageCopy.employerBlock.title}
              </h2>
              <p className="section-copy">{homePageCopy.employerBlock.description}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <PillButton asChild tone="dark">
                  <Link href={homePageCopy.employerBlock.primaryCta.href}>
                    {homePageCopy.employerBlock.primaryCta.label}
                  </Link>
                </PillButton>
                <PillButton asChild tone="light">
                  <Link href={homePageCopy.employerBlock.secondaryCta.href}>
                    {homePageCopy.employerBlock.secondaryCta.label}
                  </Link>
                </PillButton>
              </div>
            </div>
            <div className="site-span-12 border-t border-black/8 lg:col-span-7">
              {homePageCopy.employerBlock.points.map((point) => (
                <div key={point} className="border-b border-black/8 py-5">
                  <p className="text-sm leading-7 text-foreground/82">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container border-t border-black/8 py-10 sm:py-12">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{homePageCopy.nextStep.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[11ch]">{homePageCopy.nextStep.title}</h2>
            </div>
            <div className="site-span-12 space-y-5 lg:col-span-7">
              <p className="section-copy">{homePageCopy.nextStep.description}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <PillButton asChild tone="dark">
                  <Link href="/opportunities">Apply for Interviews</Link>
                </PillButton>
                <PillButton asChild tone="light">
                  <Link href="/contact">Contact Freshmind</Link>
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
