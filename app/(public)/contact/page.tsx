import Link from "next/link"
import { BriefcaseBusiness, Mail, MapPin, Phone } from "lucide-react"

import { Eyebrow } from "@/components/site/editorial"
import { ContactSubmissionForm } from "@/components/freshmind/public/contact-submission-form"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { contactPageCopy } from "@/lib/freshmind/editorial-copy"
import { buildMetadata, siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: contactPageCopy.metadata.title,
  description: contactPageCopy.metadata.description,
  path: "/contact",
  keywords: [
    "contact Freshmind",
    "verify job offer Uganda",
    "licensed recruitment agency contact Uganda",
    "jobs abroad support Uganda",
  ],
})

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Talk to us"
        title="How to reach us"
        description={contactPageCopy.hero.description}
        imageKey={contactPageCopy.hero.image}
        compact
        actions={
          <>
            <PillButton asChild tone="dark">
              <a href={`tel:${siteConfig.phone}`}>Call {siteConfig.phone}</a>
            </PillButton>
            <PillButton asChild tone="light">
              <a href={`mailto:${siteConfig.email}`}>Email Freshmind</a>
            </PillButton>
          </>
        }
      />

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>{contactPageCopy.intro.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-[11ch]">{contactPageCopy.intro.title}</h2>
              <p className="section-copy">{contactPageCopy.intro.description}</p>
            </div>
            <div className="site-span-12 border-t border-black/8 pt-5 lg:col-span-7">
              <div className="space-y-6 text-sm leading-7 text-foreground/82">
                <div className="flex gap-3">
                  <Phone className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <a className="block hover:text-foreground" href={`tel:${siteConfig.phone}`}>
                      {siteConfig.phone}
                    </a>
                    <a className="block hover:text-foreground" href={`tel:${siteConfig.altPhone}`}>
                      {siteConfig.altPhone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-1 h-4 w-4 text-accent" />
                  <a className="hover:text-foreground" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <div>{siteConfig.address.street}</div>
                    <div>
                      {siteConfig.address.postal}, {siteConfig.address.city}
                    </div>
                    <div>{siteConfig.address.country}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BriefcaseBusiness className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Office hours</p>
                    {contactPageCopy.officeHours.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
            <div className="surface-card p-6 sm:p-7">
              <Eyebrow>What We Help With</Eyebrow>
              <h2 className="mt-4 section-title max-w-[15ch]">
                Contact reasons should be clear before you reach out.
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Candidate support
                  </p>
                  <div className="mt-4 space-y-3">
                    {contactPageCopy.candidateReasons.map((item) => (
                      <p key={item} className="text-sm leading-7 text-foreground/82">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Employer inquiries
                  </p>
                  <div className="mt-4 space-y-3">
                    {contactPageCopy.employerReasons.map((item) => (
                      <p key={item} className="text-sm leading-7 text-foreground/82">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-card p-6 sm:p-7">
              <Eyebrow>Before You Contact Us</Eyebrow>
              <h2 className="mt-4 section-title max-w-[14ch]">
                A few details help the team respond faster.
              </h2>
              <div className="mt-8 space-y-4">
                {contactPageCopy.preparation.map((item) => (
                  <div key={item} className="border-t border-black/8 pt-4">
                    <p className="text-sm leading-7 text-foreground/82">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-[52rem] space-y-8">
            <div className="space-y-5">
              <Eyebrow>Contact form</Eyebrow>
              <h2 className="section-title max-w-[11ch]">Talk to us</h2>
              <p className="section-copy">
                Share the details you want clarified and Freshmind can review your
                message through the published contact route.
              </p>
            </div>

            <ContactSubmissionForm />

            <div className="flex flex-wrap gap-3 pt-2">
              <PillButton asChild tone="light">
                <Link href="/opportunities">Browse openings</Link>
              </PillButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
