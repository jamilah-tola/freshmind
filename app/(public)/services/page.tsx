import Link from "next/link"
import { BriefcaseBusiness, CircleCheckBig, GraduationCap, HeartHandshake } from "lucide-react"

import { Eyebrow, FeatureTile, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { narrativeMedia } from "@/lib/freshmind/presentation"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore Freshmind's recruitment services across placement, documentation support, readiness training, and welfare pathways.",
  path: "/services",
})

export default async function ServicesPage() {
  const repository = getRepository()
  const services = repository.listServices()
  const icons = {
    "job-placements": BriefcaseBusiness,
    training: GraduationCap,
    support: HeartHandshake,
  } as const

  const supportPathways = [
    "Role and destination clarity before interview registration.",
    "Documentation guidance tied to category and employer requirements.",
    "Pre-departure readiness support for selected candidates.",
    "Welfare communication and escalation channels after placement.",
    "Dispute guidance through official process and partner pathways.",
  ]

  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Services"
        title="Candidate support should be practical before, during, and after recruitment."
        description="Freshmind's service model combines placement sourcing, interview readiness, documentation clarity, and welfare-oriented follow-up."
        imageKey={narrativeMedia.services}
        compact
        actions={
          <>
            <PillButton asChild tone="dark">
              <Link href="/opportunities">Browse opportunities</Link>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href="/contact">Talk to the team</Link>
            </PillButton>
          </>
        }
      />

      <SectionShell>
        <div className="space-y-4 pb-8">
          <Eyebrow>Service pillars</Eyebrow>
          <h2 className="section-title max-w-[14ch]">
            Freshmind's public service model is structured around outcomes candidates and employers can verify.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.slug} className="space-y-5">
              <FeatureTile
                icon={icons[service.slug]}
                eyebrow="Freshmind service"
                title={service.title}
                description={service.summary}
              />
              <PillButton asChild tone="light" className="w-full">
                <Link href={`/services/${service.slug}`}>Read more</Link>
              </PillButton>
            </div>
          ))}
        </div>
      </SectionShell>

      <section className="pb-16 sm:pb-20">
        <div className="container border-t border-black/8 py-10 sm:py-12">
          <div className="site-grid lg:items-start">
            <div className="site-span-12 space-y-5 lg:col-span-5">
              <Eyebrow>Worker support pathways</Eyebrow>
              <h2 className="section-title max-w-[11ch]">
                Support quality matters as much as placement speed.
              </h2>
              <p className="section-copy">
                Freshmind describes welfare and case handling as part of service delivery, not an afterthought.
              </p>
            </div>
            <div className="site-span-12 border-t border-black/8 lg:col-span-7">
              {supportPathways.map((item) => (
                <div key={item} className="flex gap-3 border-b border-black/8 py-5">
                  <CircleCheckBig className="mt-1 h-4 w-4 text-accent" />
                  <p className="text-sm leading-7 text-foreground/82">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
