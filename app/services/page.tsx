import Link from "next/link"

import { Eyebrow, FeatureTile, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { narrativeMedia } from "@/lib/freshmind/presentation"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"
import { BriefcaseBusiness, GraduationCap, HeartHandshake } from "lucide-react"

export const metadata = buildMetadata({
  title: "Services",
  description:
    "See how Freshmind combines verified job sourcing, candidate preparation, and worker support into a more credible recruitment service.",
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

  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Services"
        title="Freshmind's services are built around trust, readiness, and worker protection."
        description="The public site now explains what Freshmind actually does for candidates instead of relying on vague promises about jobs abroad."
        imageKey={narrativeMedia.services}
        compact
        actions={
          <PillButton asChild tone="dark">
            <Link href="/contact">Talk to the team</Link>
          </PillButton>
        }
      />

      <SectionShell>
        <div className="space-y-4 pb-8">
          <Eyebrow>Public service model</Eyebrow>
          <h2 className="section-title max-w-[14ch]">
            The site now explains how Freshmind serves candidates before and after interview day.
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
    </main>
  )
}
