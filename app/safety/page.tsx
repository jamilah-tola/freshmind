import Link from "next/link"

import { Eyebrow } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { safetyPageCopy } from "@/lib/freshmind/editorial-copy"
import { buildMetadata, siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: safetyPageCopy.metadata.title,
  description: safetyPageCopy.metadata.description,
  path: "/safety",
})

export default function SafetyPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow={safetyPageCopy.hero.eyebrow}
        title={safetyPageCopy.hero.title}
        description={safetyPageCopy.hero.description}
        imageKey={safetyPageCopy.hero.image}
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
          <div className="site-grid">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{safetyPageCopy.checklist.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[11ch]">
                {safetyPageCopy.checklist.title}
              </h2>
              <p className="section-copy">{safetyPageCopy.checklist.description}</p>
            </div>
            <ol className="site-span-12 border-t border-black/8 lg:col-span-7">
              {safetyPageCopy.checklistSteps.map((step, index) => (
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
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="border-t border-black/8 pt-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Red flags
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-foreground/82">
              {safetyPageCopy.redFlags.map((flag) => (
                <li key={flag}>{flag}</li>
              ))}
            </ul>
          </div>
          <div className="border-t border-black/8 pt-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Worker safeguards
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-foreground/82">
              {safetyPageCopy.safeguards.map((safeguard) => (
                <li key={safeguard}>{safeguard}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container border-t border-black/8 py-10 sm:py-12">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>Official verification</Eyebrow>
              <h2 className="section-title max-w-[11ch]">
                Use the public checks before you comply with any instruction.
              </h2>
            </div>
            <div className="site-span-12 space-y-5 lg:col-span-7">
              <p className="section-copy">
                Freshmind publishes official office channels and links to government-backed
                verification routes so candidates and families can confirm what is legitimate
                before documents are shared or travel planning begins.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <PillButton asChild tone="dark">
                  <a href={siteConfig.verificationLinks.eemis} target="_blank" rel="noreferrer">
                    Verify on EEMIS
                  </a>
                </PillButton>
                <PillButton asChild tone="light">
                  <a href={siteConfig.verificationLinks.esmis} target="_blank" rel="noreferrer">
                    Explore ESMIS
                  </a>
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
