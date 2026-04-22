import Link from "next/link"

import { AccordionList } from "@/components/site/accordion-list"
import { Eyebrow, MediaCard, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { narrativeMedia } from "@/lib/freshmind/presentation"
import { faqItems } from "@/lib/freshmind/seed"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Get clear answers about Freshmind's registration process, interview slots, documentation, and verification guidance.",
  path: "/faq",
})

export default function FaqPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="FAQ"
        title="Questions candidates ask before they decide whether to trust a process."
        description="The answers below are written to reduce confusion, remove guesswork, and make it easier for candidates and families to assess whether a recruitment path is credible."
        imageKey={narrativeMedia.faq}
        compact
        actions={
          <>
            <PillButton asChild tone="dark">
              <Link href="/opportunities">Browse openings</Link>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href="/contact">Talk to Freshmind</Link>
            </PillButton>
          </>
        }
      />

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-5">
            <Eyebrow>Candidate clarity</Eyebrow>
            <h2 className="section-title max-w-[12ch]">
              The FAQ should answer the practical questions candidates ask before they proceed.
            </h2>
            <p className="section-copy">
              Clear answers matter because most doubts about recruitment quality show up
              before interview day, not after.
            </p>
            <MediaCard imageKey="travelReadiness" className="min-h-[320px]" />
          </div>
          <div className="rounded-[2rem] border border-black/6 bg-background px-6 py-4">
            <AccordionList
              items={faqItems.map((item) => ({
                title: item.question,
                body: item.answer,
              }))}
            />
          </div>
        </div>
      </SectionShell>
    </main>
  )
}
