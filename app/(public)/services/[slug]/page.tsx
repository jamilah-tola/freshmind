import { notFound } from "next/navigation"
import Link from "next/link"

import { Eyebrow, MediaCard, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const repository = getRepository()
  const service = repository.getService(slug)

  if (!service) {
    return buildMetadata({
      title: "Service not found",
      description: "This Freshmind service detail is not currently available.",
      path: `/services/${slug}`,
    })
  }

  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${slug}`,
  })
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const repository = getRepository()
  const service = repository.getService(slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Service detail"
        title={service.title}
        description={service.summary}
        imageKey="interviewSuite"
        compact
        actions={
          <PillButton asChild tone="dark">
            <Link href="/contact">Contact Freshmind</Link>
          </PillButton>
        }
      />
      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-5">
            <Eyebrow>Service promise</Eyebrow>
            <h2 className="section-title max-w-[12ch]">
              The service pages now read like part of the same clear candidate process.
            </h2>
            <p className="section-copy">
              Freshmind uses these pages to make capability visible instead of generic.
            </p>
            <MediaCard imageKey="interviewSuite" className="min-h-[320px]" />
          </div>
          <article className="surface-card p-8">
            <ul className="space-y-4 text-sm leading-8 text-muted-foreground">
              {service.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton asChild tone="dark">
                <Link href="/opportunities">See live openings</Link>
              </PillButton>
              <PillButton asChild tone="light">
                <Link href="/services">Back to services</Link>
              </PillButton>
            </div>
          </article>
        </div>
      </SectionShell>
    </main>
  )
}
