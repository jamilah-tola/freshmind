import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Eyebrow } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { contactPageCopy } from "@/lib/freshmind/editorial-copy"
import { buildMetadata, siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: contactPageCopy.metadata.title,
  description: contactPageCopy.metadata.description,
  path: "/contact",
})

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow={contactPageCopy.hero.eyebrow}
        title={contactPageCopy.hero.title}
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
              <h2 className="section-title max-w-[11ch]">
                {contactPageCopy.intro.title}
              </h2>
              <p className="section-copy">{contactPageCopy.intro.description}</p>
            </div>
            <div className="site-span-12 border-t border-black/8 pt-5 lg:col-span-7">
              <div className="space-y-6 text-sm leading-7 text-foreground/82">
                <div className="flex gap-3">
                  <Phone className="mt-1 h-4 w-4 text-secondary" />
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
                  <Mail className="mt-1 h-4 w-4 text-secondary" />
                  <a className="hover:text-foreground" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-secondary" />
                  <div>
                    <div>{siteConfig.address.street}</div>
                    <div>{siteConfig.address.postal}, {siteConfig.address.city}</div>
                    <div>{siteConfig.address.country}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="border-t border-black/8 pt-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Who should contact Freshmind
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-foreground/82">
              {contactPageCopy.contactReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
          <div className="border-t border-black/8 pt-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              What to prepare before you call or visit
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-foreground/82">
              {contactPageCopy.preparation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container border-t border-black/8 py-10 sm:py-12">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>Need a clearer next step?</Eyebrow>
              <h2 className="section-title max-w-[11ch]">
                Start with a published opening or review the safety guidance before you act.
              </h2>
            </div>
            <div className="site-span-12 space-y-5 lg:col-span-7">
              <p className="section-copy">
                Freshmind's public site is designed to keep the next move simple: check the
                role, confirm the process, and use official channels whenever you need help.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <PillButton asChild tone="dark">
                  <Link href="/opportunities">Browse openings</Link>
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
