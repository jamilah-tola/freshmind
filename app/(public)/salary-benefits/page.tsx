import Link from "next/link"

import { Eyebrow } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { buildMetadata } from "@/lib/site"
import { salaryBenefitsPageCopy } from "@/lib/freshmind/editorial-copy"

export const metadata = buildMetadata({
  title: salaryBenefitsPageCopy.metadata.title,
  description: salaryBenefitsPageCopy.metadata.description,
  path: "/salary-benefits",
})

export default function SalaryBenefitsPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow={salaryBenefitsPageCopy.hero.eyebrow}
        title={salaryBenefitsPageCopy.hero.title}
        description={salaryBenefitsPageCopy.hero.description}
        imageKey={salaryBenefitsPageCopy.hero.image}
        compact
        actions={
          <>
            <PillButton asChild tone="dark">
              <Link href="/opportunities">Browse opportunities</Link>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href="/contact">Ask a question</Link>
            </PillButton>
          </>
        }
      />

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{salaryBenefitsPageCopy.salarySection.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[11ch]">
                {salaryBenefitsPageCopy.salarySection.title}
              </h2>
              <p className="section-copy">{salaryBenefitsPageCopy.salarySection.description}</p>
            </div>
            <div className="site-span-12 grid gap-4 lg:col-span-7">
              {salaryBenefitsPageCopy.salaryRows.map((row) => (
                <div
                  key={row.role}
                  className="rounded-[1rem] border border-black/8 bg-white px-5 py-4"
                >
                  <p className="text-sm font-semibold text-foreground">{row.role}</p>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">{row.range}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="border-t border-black/8 pt-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Benefits framework
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-foreground/82">
              {salaryBenefitsPageCopy.benefitsFramework.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="border-t border-black/8 pt-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Contract notes
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-foreground/82">
              {salaryBenefitsPageCopy.contractNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container border-y border-black/8 px-6 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>Worker safeguards</Eyebrow>
              <h2 className="section-title max-w-[11ch]">
                Compensation clarity should sit inside a broader protection framework.
              </h2>
            </div>
            <div className="site-span-12 border-t border-black/8 lg:col-span-7">
              {salaryBenefitsPageCopy.safeguards.map((item) => (
                <div key={item} className="border-b border-black/8 py-5">
                  <p className="text-sm leading-7 text-foreground/82">{item}</p>
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
              <Eyebrow>Important disclaimer</Eyebrow>
              <h2 className="section-title max-w-[11ch]">
                Final terms always depend on active contract conditions.
              </h2>
            </div>
            <div className="site-span-12 space-y-5 lg:col-span-7">
              <p className="section-copy">{salaryBenefitsPageCopy.disclaimer}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <PillButton asChild tone="dark">
                  <Link href="/opportunities">Go to live opportunities</Link>
                </PillButton>
                <PillButton asChild tone="light">
                  <Link href="/safety">Review safety guidance</Link>
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
