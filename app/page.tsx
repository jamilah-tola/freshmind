import Link from "next/link"

import { Eyebrow } from "@/components/site/editorial"
import { MiddleEastRoutesVisual } from "@/components/site/middle-east-routes-visual"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import {
  companyDestinations,
  companySectors,
  homePageCopy,
} from "@/lib/freshmind/editorial-copy"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: homePageCopy.metadata.title,
  description: homePageCopy.metadata.description,
})

export default function HomePage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow={homePageCopy.hero.eyebrow}
        title={homePageCopy.hero.title}
        description={homePageCopy.hero.description}
        visual={<MiddleEastRoutesVisual />}
        className="pt-6 pb-12 sm:pt-8 sm:pb-14 lg:pt-8 lg:pb-16"
        actions={
          <>
            <PillButton asChild tone="dark">
              <Link href="/opportunities">Register for Interview</Link>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href="/contact">Contact Freshmind</Link>
            </PillButton>
          </>
        }
        details={
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {homePageCopy.hero.proofLine}
          </p>
        }
      />

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{homePageCopy.licensedPath.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[12ch]">
                {homePageCopy.licensedPath.title}
              </h2>
              <p className="section-copy">{homePageCopy.licensedPath.description}</p>
            </div>
            <div className="site-span-12 grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {homePageCopy.licensedProofs.map((item) => (
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
              <h2 className="section-title max-w-[11ch]">
                {homePageCopy.process.title}
              </h2>
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

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="site-grid">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{homePageCopy.placements.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[12ch]">
                {homePageCopy.placements.title}
              </h2>
              <p className="section-copy">{homePageCopy.placements.description}</p>
            </div>
            <div className="site-span-12 grid gap-8 sm:grid-cols-2 lg:col-span-7">
              <div className="border-t border-black/8 pt-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Destination markets
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground/82">
                  {companyDestinations.map((destination) => (
                    <li key={destination}>{destination}</li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-black/8 pt-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Employment sectors
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground/82">
                  {companySectors.map((sector) => (
                    <li key={sector}>{sector}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container border-y border-black/8 px-6 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{homePageCopy.protections.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[11ch]">
                {homePageCopy.protections.title}
              </h2>
              <p className="section-copy">{homePageCopy.protections.description}</p>
              <blockquote className="border-l-2 border-black/10 pl-5 text-lg leading-8 text-foreground/82">
                {homePageCopy.protections.quote}
              </blockquote>
            </div>
            <div className="site-span-12 border-t border-black/8 lg:col-span-7">
              {homePageCopy.protectionPoints.map((point) => (
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
                  <Link href="/opportunities">View Live Opportunities</Link>
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
