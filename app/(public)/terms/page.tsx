import { Eyebrow, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { buildMetadata } from "@/lib/site"

const effectiveDate = "April 24, 2026"

const termsSections = [
  {
    title: "1. Scope of these terms",
    paragraphs: [
      "These Terms of Service apply to visitors who browse the Freshmind website, candidates who register for interviews or recruitment follow-up, and employers or partners who contact Freshmind through public forms or published channels.",
      "The website is designed to publish company information, verified openings, interview booking pathways, and contact routes. It is not a guarantee engine for placement, visa approval, salary, or deployment.",
    ],
  },
  {
    title: "2. Eligibility and truthful information",
    paragraphs: [
      "You are responsible for giving accurate, current, and complete information when you submit forms, upload documents, or communicate with Freshmind through the site.",
      "If you submit information on behalf of another person, you should have authority to do so and should make sure the information shared is lawful and accurate.",
    ],
  },
  {
    title: "3. No guarantee of shortlist, placement, or travel",
    paragraphs: [
      "Registration through the site does not guarantee interview selection, shortlist status, employer approval, work visa issuance, travel dates, or final deployment.",
      "Progress depends on role availability, document readiness, employer demand, screening outcomes, legal requirements, and contract conditions that may change over time.",
    ],
  },
  {
    title: "4. Openings, timing, and changes",
    paragraphs: [
      "Freshmind may add, update, pause, or close openings, interview dates, and published guidance whenever role demand, compliance checks, employer instructions, or slot capacity change.",
      "Published salary ranges, benefits, and timelines are informational unless they are confirmed in a formal written contract or official recruitment communication.",
    ],
  },
  {
    title: "5. Acceptable use",
    paragraphs: [
      "You must not use the site for impersonation, fraud, spam, scraping, unlawful document collection, misleading submissions, or any attempt to interfere with the website or recruitment process.",
      "You must not misuse Freshmind's name, logo, office details, or communication channels in a way that could confuse candidates, employers, or the public.",
    ],
  },
  {
    title: "6. Documents, submissions, and communications",
    paragraphs: [
      "When you submit forms or upload recruitment documents, you are allowing Freshmind to review and use that information for role matching, interview coordination, compliance checks, follow-up communication, and related recruitment operations.",
      "Freshmind may contact you through the phone numbers, email addresses, or other contact details you provide, especially where follow-up is needed on a live opportunity or support request.",
    ],
  },
  {
    title: "7. Intellectual property and site content",
    paragraphs: [
      "Unless stated otherwise, the website design, brand assets, written copy, graphics, and published recruitment materials remain the property of Freshmind or its licensors.",
      "You may use the site for personal information and lawful recruitment inquiry purposes, but you may not copy, republish, or commercially reuse site content in a misleading or unauthorized way.",
    ],
  },
  {
    title: "8. Third-party services and external links",
    paragraphs: [
      "The site may link to ministry systems, employer references, maps, or other third-party services. Freshmind does not control those external services and is not responsible for their content, uptime, or privacy practices.",
      "Use external links carefully and review the terms or policies that apply on those third-party platforms.",
    ],
  },
  {
    title: "9. Availability, suspension, and liability limits",
    paragraphs: [
      "Freshmind may suspend, restrict, or change parts of the website where needed for maintenance, security, compliance, or service updates.",
      "To the fullest extent permitted by applicable law, Freshmind does not accept liability for indirect loss, missed opportunity, delay, or decision taken solely in reliance on general website content where no formal contract or official instruction has been issued.",
    ],
  },
  {
    title: "10. Governing law and contact",
    paragraphs: [
      "These terms are intended to be interpreted in line with the applicable laws of Uganda, without overriding any mandatory rights that may apply to a user under relevant law.",
      "Questions about these terms can be sent to info@freshmindinternational.com or delivered through the contact details published on this website.",
    ],
  },
] as const

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Read the terms for using Freshmind's website, verified opportunity listings, interview booking, and recruitment communication channels.",
  path: "/terms",
  keywords: ["Freshmind terms", "recruitment website terms Uganda", "jobs abroad terms"],
})

export default function TermsPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Terms of service"
        title="Platform use should stay clear, lawful, and accountable."
        description="These terms explain expectations for candidates, employers, and visitors using Freshmind's public recruitment platform."
        imageKey="interviewSuite"
        compact
      />

      <SectionShell>
        <div className="space-y-4 pb-6">
          <Eyebrow>Platform expectations</Eyebrow>
          <h2 className="section-title max-w-[12ch]">
            Website use should stay lawful, accurate, and aligned to official recruitment communication.
          </h2>
        </div>
        <article className="surface-card space-y-8 p-8 text-sm leading-8 text-muted-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Effective date: {effectiveDate}
          </p>

          {termsSections.map((section) => (
            <section key={section.title} className="space-y-4 border-t border-black/8 pt-6">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                {section.title}
              </h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>
      </SectionShell>
    </main>
  )
}
