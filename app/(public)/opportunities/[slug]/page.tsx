import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarDays, MapPin, ShieldCheck } from "lucide-react"

import { Eyebrow } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { StructuredData } from "@/components/site/structured-data"
import { PublicRegistrationForm } from "@/components/freshmind/public/public-registration-form"
import { isCloudinaryConfigured } from "@/lib/freshmind/cloudinary"
import { categoryVisuals } from "@/lib/freshmind/presentation"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata, createBreadcrumbJsonLd, siteConfig } from "@/lib/site"

export const dynamic = "force-dynamic"

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ error?: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const repository = getRepository()
  const opening = await repository.getOpportunityBySlug(slug)

  if (!opening) {
    return buildMetadata({
      title: "Opportunity not found",
      description: "This Freshmind opportunity is not currently available.",
      path: `/opportunities/${slug}`,
    })
  }

  return buildMetadata({
    title: `${opening.title} in ${opening.destinationCountry}`,
    description: opening.summary,
    path: `/opportunities/${slug}`,
  })
}

export default async function OpportunityDetailPage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params
  const { error } = await searchParams
  const repository = getRepository()
  const opening = await repository.getOpportunityBySlug(slug)

  if (!opening) {
    notFound()
  }

  const visual = categoryVisuals[opening.category]
  const cloudinaryEnabled = isCloudinaryConfigured()
  const hasBookableSlots = opening.slots.some(
    (slot) => slot.status === "open" && slot.seatsLeft > 0
  )

  const breadcrumbData = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Opportunities", path: "/opportunities" },
    { name: opening.title, path: `/opportunities/${opening.slug}` },
  ])

  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: opening.title,
    description: opening.summary,
    datePosted: opening.postedDate,
    validThrough: opening.closingDate,
    employmentType: "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: opening.destinationCountry,
        addressLocality: opening.destinationCity,
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "UGX",
      value: opening.salaryRange,
    },
  }

  return (
    <main className="page-shell">
      <StructuredData data={[breadcrumbData, jobPostingJsonLd]} />

      <PageHero
        eyebrow={opening.categoryInfo.label}
        title={opening.title}
        description={opening.summary}
        imageKey={visual.image}
        compact
        actions={
          <>
            <PillButton asChild tone="dark">
              <a href="#registration">Go to booking</a>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href="/opportunities">Browse opportunities</Link>
            </PillButton>
          </>
        }
      />

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.25rem] border border-black/6 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Destination
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {opening.destinationCity}, {opening.destinationCountry}
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-black/6 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Employer
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {opening.employer}
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-black/6 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Closing date
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {opening.closingDate}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
            <div id="registration" className="surface-card p-7 sm:p-8">
              <Eyebrow>{hasBookableSlots ? "Booking page" : "Opportunity inquiry"}</Eyebrow>
              <h2 className="mt-4 text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-foreground">
                {hasBookableSlots
                  ? "Choose your slot and complete registration."
                  : "Interview dates for this opportunity are not open right now."}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {hasBookableSlots
                  ? "Use the form below to book your interview slot and receive your Freshmind reference."
                  : "Use the contact team for schedule confirmation, then return here when booking opens."}
              </p>
              {error ? (
                <div className="mt-5 rounded-[1.25rem] border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                  {error}
                </div>
              ) : null}

              {hasBookableSlots ? (
                <PublicRegistrationForm
                  cloudinaryEnabled={cloudinaryEnabled}
                  opening={opening}
                />
              ) : (
                <div className="mt-8 space-y-4">
                  <div className="rounded-[1.25rem] border border-black/6 bg-background px-5 py-5 text-sm leading-7 text-muted-foreground">
                    Freshmind will publish the next interview schedule on this page when booking is available.
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <PillButton asChild tone="dark">
                      <Link href="/contact">Contact the team</Link>
                    </PillButton>
                    <PillButton asChild tone="light">
                      <Link href="/opportunities">Back to opportunities</Link>
                    </PillButton>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-5">
              <div className="rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-accent" />
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-foreground">
                    Before booking
                  </h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                  {opening.requirements.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-foreground">
                    Candidate support
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {opening.benefits.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-foreground">
                    Safety reminder
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Use only Freshmind&apos;s published office channels and keep your registration
                  reference after booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
