import Link from "next/link"

import { Eyebrow, ProofRail } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { companySectors, employersPageCopy } from "@/lib/freshmind/editorial-copy"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: employersPageCopy.metadata.title,
  description: employersPageCopy.metadata.description,
  path: "/employers",
})

export default function EmployersPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow={employersPageCopy.hero.eyebrow}
        title={employersPageCopy.hero.title}
        description={employersPageCopy.hero.description}
        imageKey={employersPageCopy.hero.image}
        compact
        actions={
          <>
            <PillButton asChild tone="dark">
              <Link href="/contact">Contact Employer Desk</Link>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href="/job-categories">View Talent Sectors</Link>
            </PillButton>
          </>
        }
      />

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{employersPageCopy.valueSection.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[11ch]">
                {employersPageCopy.valueSection.title}
              </h2>
              <p className="section-copy">{employersPageCopy.valueSection.description}</p>
            </div>
            <div className="site-span-12 grid gap-8 sm:grid-cols-2 lg:col-span-7">
              {employersPageCopy.valuePoints.map((point) => (
                <div key={point.title} className="border-t border-black/8 pt-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {point.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-foreground/82">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <ProofRail
            items={companySectors.map((sector) => ({
              label: "Sector supplied",
              value: sector,
              detail: "Talent sourcing and screening support available based on active demand.",
            }))}
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container border-y border-black/8 px-6 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{employersPageCopy.process.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[11ch]">{employersPageCopy.process.title}</h2>
              <p className="section-copy">{employersPageCopy.process.description}</p>
            </div>
            <ol className="site-span-12 border-t border-black/8 lg:col-span-7">
              {employersPageCopy.processSteps.map((step, index) => (
                <li
                  key={step}
                  className="grid gap-4 border-b border-black/8 py-6 sm:grid-cols-[72px_1fr]"
                >
                  <div className="font-display text-[2.2rem] font-semibold leading-none tracking-[-0.05em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="max-w-[54ch] text-sm leading-7 text-foreground/82">{step}</p>
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
              <Eyebrow>Delivery model</Eyebrow>
              <h2 className="section-title max-w-[11ch]">
                Structured coordination from role request to deployment readiness.
              </h2>
            </div>
            <div className="site-span-12 border-t border-black/8 lg:col-span-7">
              {employersPageCopy.deliveryPoints.map((point) => (
                <div key={point} className="border-b border-black/8 py-5">
                  <p className="text-sm leading-7 text-foreground/82">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container rounded-[2rem] border border-black/8 bg-white px-6 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{employersPageCopy.cta.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[11ch]">{employersPageCopy.cta.title}</h2>
            </div>
            <div className="site-span-12 space-y-5 lg:col-span-7">
              <p className="section-copy">{employersPageCopy.cta.description}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <PillButton asChild tone="dark">
                  <Link href={employersPageCopy.cta.primaryHref}>
                    {employersPageCopy.cta.primaryLabel}
                  </Link>
                </PillButton>
                <PillButton asChild tone="light">
                  <Link href={employersPageCopy.cta.secondaryHref}>
                    {employersPageCopy.cta.secondaryLabel}
                  </Link>
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
