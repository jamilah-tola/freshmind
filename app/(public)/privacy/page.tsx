import { Eyebrow, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { buildMetadata } from "@/lib/site"

const effectiveDate = "April 24, 2026"

const privacySections = [
  {
    title: "1. Information we collect",
    paragraphs: [
      "Freshmind may collect personal information that you submit directly through this website, including your name, phone number, email address, district, job preferences, education, work history, passport status, and any message or supporting document you choose to provide.",
      "When you use interview booking or contact forms, we may also collect technical information normally generated through website access, such as browser type, device details, IP-related logs, and page-request records used for security and service reliability.",
    ],
  },
  {
    title: "2. Where the information comes from",
    paragraphs: [
      "Most personal data handled through this site comes directly from you when you browse, complete a form, upload a document, or contact Freshmind through public channels.",
      "In some cases, Freshmind may receive updates from employers, screening partners, lawful authorities, or service providers involved in recruitment, compliance, communication, hosting, or document handling.",
    ],
  },
  {
    title: "3. How we use personal information",
    paragraphs: [
      "Freshmind uses submitted data to review role fit, coordinate interview booking, follow up on candidate inquiries, manage contact requests, verify recruitment records, support employer matching, and run lawful recruitment operations.",
      "Depending on the context, information may also be used to prevent fraud, protect candidates, respond to complaints, maintain records, improve service quality, or meet legal, regulatory, or audit obligations.",
    ],
  },
  {
    title: "4. How we may share information",
    paragraphs: [
      "Freshmind may share relevant personal information with authorized staff, verified employers, foreign recruitment or placement partners, technology providers, document-storage providers, communications tools, advisers, or public authorities where that is reasonably necessary for recruitment operations or legal compliance.",
      "Freshmind does not publish private candidate information openly on the website and does not sell personal data as part of the site's public recruitment process.",
    ],
  },
  {
    title: "5. Cross-border recruitment and international transfers",
    paragraphs: [
      "Because overseas recruitment can involve employers, partners, or service providers outside Uganda, some personal information may be transferred across borders where needed for interviews, contracts, visa processing, compliance checks, or deployment preparation.",
      "Where cross-border sharing is required, Freshmind expects the information to be handled only for legitimate recruitment and support purposes connected to the role or service requested.",
    ],
  },
  {
    title: "6. Retention and security",
    paragraphs: [
      "Freshmind keeps recruitment and inquiry records only for as long as reasonably necessary for active opportunities, support follow-up, legal compliance, fraud prevention, dispute handling, and internal record-keeping.",
      "The company uses administrative, technical, and operational controls intended to limit unauthorized access, misuse, loss, or disclosure, but no online system can promise absolute security.",
    ],
  },
  {
    title: "7. Your choices and rights",
    paragraphs: [
      "You may contact Freshmind to request access, correction, or deletion of personal information held through this website, subject to lawful limitations, active recruitment needs, and record-retention obligations that may apply.",
      "You may also ask questions about how your information is being used, object to certain uses where appropriate, or request that Freshmind update inaccurate contact or recruitment details.",
    ],
  },
  {
    title: "8. Cookies, links, and third-party tools",
    paragraphs: [
      "The site may use basic technical cookies or similar technologies needed for functionality, performance, form handling, and session reliability. If Freshmind later introduces broader analytics or marketing tools, this policy should be updated to reflect that.",
      "Third-party sites linked from this website, including maps, ministry systems, or external platforms, operate under their own privacy practices and should be reviewed separately.",
    ],
  },
  {
    title: "9. Contact and policy updates",
    paragraphs: [
      "Questions, requests, or concerns about this Privacy Policy can be sent to info@freshmindinternational.com or raised through the official contact details published on the website.",
      "Freshmind may update this Privacy Policy from time to time. The version published on this page becomes effective from the date shown above unless a different date is stated.",
    ],
  },
] as const

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Understand how Freshmind collects, uses, shares, stores, and protects candidate and employer information submitted through the recruitment website.",
  path: "/privacy",
  keywords: ["Freshmind privacy policy", "recruitment privacy policy Uganda", "job application privacy"],
})

export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Privacy policy"
        title="Personal information should be handled with purpose and care."
        description="This policy outlines how recruitment-related data is collected, used, and protected across Freshmind's public workflows."
        imageKey="trustDesk"
        compact
      />

      <SectionShell>
        <div className="space-y-4 pb-6">
          <Eyebrow>Data handling principles</Eyebrow>
          <h2 className="section-title max-w-[12ch]">
            Recruitment data should be collected for clear operational reasons, not casual sharing.
          </h2>
        </div>
        <article className="surface-card space-y-8 p-8 text-sm leading-8 text-muted-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Effective date: {effectiveDate}
          </p>

          {privacySections.map((section) => (
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
