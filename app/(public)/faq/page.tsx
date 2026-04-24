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
    "Find practical answers about eligibility, registration, documentation, communication safety, and next steps.",
  path: "/faq",
})

export default function FaqPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="FAQ"
        title="Practical answers for candidates and families before they commit."
        description="This FAQ focuses on common process, safety, and preparation questions so you can take the next step with better clarity."
        imageKey={narrativeMedia.faq}
        compact
        actions={
          <>
            <PillButton asChild tone="dark">
              <Link href="/opportunities">Browse openings</Link>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href="/safety">Safety guide</Link>
            </PillButton>
          </>
        }
      />

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-5">
            <Eyebrow>Candidate clarity</Eyebrow>
            <h2 className="section-title max-w-[12ch]">
              Strong recruitment communication answers important questions early.
            </h2>
            <p className="section-copy">
              If your concern is not covered below, contact Freshmind through official
              channels before sharing documents or making payments.
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
