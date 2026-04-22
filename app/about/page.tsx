import Link from "next/link"

import { Eyebrow } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import {
  aboutPageCopy,
  companyDestinations,
  companySectors,
} from "@/lib/freshmind/editorial-copy"
import { buildMetadata, siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: aboutPageCopy.metadata.title,
  description: aboutPageCopy.metadata.description,
  path: "/about",
})

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow={aboutPageCopy.hero.eyebrow}
        title={aboutPageCopy.hero.title}
        description={aboutPageCopy.hero.description}
        imageKey={aboutPageCopy.hero.image}
        compact
        actions={
          <>
            <PillButton asChild tone="dark">
              <Link href="/opportunities">View Opportunities</Link>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href="/contact">Contact Freshmind</Link>
            </PillButton>
          </>
        }
      />

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="site-grid">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{aboutPageCopy.background.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[12ch]">
                {aboutPageCopy.background.title}
              </h2>
            </div>
            <div className="site-span-12 space-y-6 text-sm leading-8 text-muted-foreground sm:text-[1.02rem] lg:col-span-7">
              <p>{aboutPageCopy.background.description}</p>
              <p>
                The company profile ties Freshmind's credibility to MGLSD licensing,
                UAERA alignment, transparent employer relationships, and a public commitment
                to ethical labor migration rather than informal placement routes.
              </p>
              <p>
                Freshmind states that it operates under License No. {siteConfig.licenseNumber},
                with recruitment activity designed around lawful contracts, documentation,
                worker preparation, and continued communication after placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="border-t border-black/8 pt-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Mission
            </p>
            <blockquote className="mt-4 text-[1.2rem] leading-9 text-foreground">
              {aboutPageCopy.mission}
            </blockquote>
          </div>
          <div className="border-t border-black/8 pt-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Vision
            </p>
            <blockquote className="mt-4 text-[1.2rem] leading-9 text-foreground">
              {aboutPageCopy.vision}
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="site-grid">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>Where Freshmind Works</Eyebrow>
              <h2 className="section-title max-w-[12ch]">
                Destination markets and sectors are presented as practical pathways, not abstract ambition.
              </h2>
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
        <div className="container">
          <div className="site-grid">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{aboutPageCopy.services.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[12ch]">
                {aboutPageCopy.services.title}
              </h2>
              <p className="section-copy">{aboutPageCopy.services.description}</p>
            </div>
            <div className="site-span-12 border-t border-black/8 lg:col-span-7">
              {aboutPageCopy.servicePoints.map((point) => (
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
              <Eyebrow>{aboutPageCopy.growth.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[12ch]">{aboutPageCopy.growth.title}</h2>
            </div>
            <div className="site-span-12 space-y-5 lg:col-span-7">
              <p className="section-copy">{aboutPageCopy.growth.description}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <PillButton asChild tone="dark">
                  <Link href="/why-freshmind">See the process standards</Link>
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
