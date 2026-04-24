import Link from "next/link"

import { Eyebrow } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { whyFreshmindPageCopy } from "@/lib/freshmind/editorial-copy"
import { buildMetadata, siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: whyFreshmindPageCopy.metadata.title,
  description: whyFreshmindPageCopy.metadata.description,
  path: "/why-freshmind",
})

export default function WhyFreshmindPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow={whyFreshmindPageCopy.hero.eyebrow}
        title={whyFreshmindPageCopy.hero.title}
        description={whyFreshmindPageCopy.hero.description}
        imageKey={whyFreshmindPageCopy.hero.image}
        compact
        actions={
          <>
            <PillButton asChild tone="dark">
              <Link href="/safety">Review safety guidance</Link>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href="/contact">Contact Freshmind</Link>
            </PillButton>
          </>
        }
      />

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{whyFreshmindPageCopy.credibility.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[12ch]">
                {whyFreshmindPageCopy.credibility.title}
              </h2>
              <p className="section-copy">{whyFreshmindPageCopy.credibility.description}</p>
            </div>
            <div className="site-span-12 grid gap-8 sm:grid-cols-2 lg:col-span-7">
              {whyFreshmindPageCopy.credibilityPoints.map((point) => (
                <div key={point.title} className="border-t border-black/8 pt-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {point.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-foreground/82">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container border-y border-black/8 px-6 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="site-grid">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{whyFreshmindPageCopy.signals.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[12ch]">
                {whyFreshmindPageCopy.signals.title}
              </h2>
              <p className="section-copy">{whyFreshmindPageCopy.signals.description}</p>
            </div>
            <div className="site-span-12 border-t border-black/8 lg:col-span-7">
              {whyFreshmindPageCopy.publicSignals.map((signal) => (
                <div key={signal} className="border-b border-black/8 py-5">
                  <p className="text-sm leading-7 text-foreground/82">{signal}</p>
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
              <Eyebrow>Public reference points</Eyebrow>
              <h2 className="section-title max-w-[11ch]">
                Freshmind should be understandable without a broker translating the process for you.
              </h2>
            </div>
            <div className="site-span-12 space-y-6 text-sm leading-8 text-muted-foreground sm:text-[1.02rem] lg:col-span-7">
              <p>
                The company profile anchors credibility in regulation, employer verification,
                worker preparation, and documented next steps. That is the standard the public
                site should keep reinforcing.
              </p>
              <p>
                Candidates can cross-check Freshmind through published office channels,
                government-linked verification tools, and the company's stated licensing position
                under MGLSD License No. {siteConfig.licenseNumber}.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <PillButton asChild tone="dark">
                  <a href={siteConfig.verificationLinks.eemis} target="_blank" rel="noreferrer">
                    Verify on EEMIS
                  </a>
                </PillButton>
                <PillButton asChild tone="light">
                  <Link href="/about">Read the company profile</Link>
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
