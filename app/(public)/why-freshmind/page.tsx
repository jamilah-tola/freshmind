import Link from "next/link"

import { Eyebrow } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { whyFreshmindPageCopy } from "@/lib/freshmind/editorial-copy"
import { buildMetadata, siteConfig } from "@/lib/site"

const verificationChecklist = [
  "Verify the agency name, license details, and office contacts before sharing documents.",
  "Confirm that the role, destination, and interview route match what is published on the site.",
  "Ask for a written explanation of the next steps, especially around contracts, visas, and employer terms.",
  "Pause if anyone asks for rushed payment, unofficial document handover, or travel on the wrong visa type.",
] as const

const redFlags = [
  "Personal-number pressure that cannot be matched to Freshmind's published office channels.",
  "Promises of guaranteed placement, guaranteed salary, or guaranteed travel regardless of screening.",
  "Requests for money without a formal explanation, receipt path, or role-specific context.",
  "Instructions to use visitor or tourist visas for employment travel.",
] as const

export const metadata = buildMetadata({
  title: whyFreshmindPageCopy.metadata.title,
  description: whyFreshmindPageCopy.metadata.description,
  path: "/why-freshmind",
  keywords: [
    "verify recruitment agency Uganda",
    "anti scam jobs abroad Uganda",
    "ethical recruitment Uganda",
    "licensed recruitment agency Uganda",
  ],
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
              <a href={siteConfig.verificationLinks.eemis} target="_blank" rel="noreferrer">
                Verify on EEMIS
              </a>
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

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <div className="space-y-5">
              <Eyebrow>Trust Checks</Eyebrow>
              <h2 className="section-title max-w-[15ch]">
                Real opportunities should survive a verification-first review.
              </h2>
              <p className="section-copy">
                The strongest trust signal is not a slogan. It is whether a candidate or
                family member can confirm what is real before documents, money, or travel
                are involved.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="surface-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  What to verify
                </p>
                <div className="mt-5 space-y-4">
                  {verificationChecklist.map((item) => (
                    <div key={item} className="border-t border-black/8 pt-4">
                      <p className="text-sm leading-7 text-foreground/82">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Red flags
                </p>
                <div className="mt-5 space-y-4">
                  {redFlags.map((item) => (
                    <div key={item} className="border-t border-black/8 pt-4">
                      <p className="text-sm leading-7 text-foreground/82">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
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
