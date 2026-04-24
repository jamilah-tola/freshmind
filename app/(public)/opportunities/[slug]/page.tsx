import Link from "next/link"
import { notFound } from "next/navigation"
import {
  CheckCircle2,
  Clock3,
  FileText,
  MapPinned,
  ShieldCheck,
} from "lucide-react"

import { Eyebrow, ProofRail, SectionShell } from "@/components/site/editorial"
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

  const breadcrumbData = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Active Opportunities", path: "/opportunities" },
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
        metrics={[
          {
            label: "Destination",
            value: `${opening.destinationCity}, ${opening.destinationCountry}`,
            detail: "Published before registration so candidates can assess fit early.",
          },
          {
            label: "Salary range",
            value: opening.salaryRange,
            detail: "Displayed as the role is screened, not after the journey begins.",
          },
          {
            label: "Contract",
            value: opening.contractDuration,
            detail: `${opening.openingsCount} seats currently planned in this intake.`,
          },
        ]}
        actions={
          <>
            <PillButton asChild tone="dark">
              <a href="#registration">Register for this interview</a>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href="/safety">Read the safety guide</Link>
            </PillButton>
          </>
        }
      />

      <section className="pb-10 sm:pb-12 lg:pb-16">
        <div className="container">
          <ProofRail
            items={[
              {
                label: "Closing date",
                value: opening.closingDate,
                detail: "The campaign keeps a published closing point so candidates can plan decisively.",
              },
              {
                label: "Interview regions",
                value: opening.interviewRegions.join(", "),
                detail: "Registration is tied to real screening cities instead of vague walk-in instructions.",
              },
              {
                label: "Employer",
                value: opening.employer,
                detail: "Employer identity stays contextualized inside a verified process.",
              },
              {
                label: "Process note",
                value: "Published screening route",
                detail: opening.feePolicy,
              },
            ]}
          />
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container grid gap-8 xl:grid-cols-[0.94fr_1.06fr]">
          <div className="space-y-6">
            <div className="surface-card p-7">
              <Eyebrow>Freshmind note</Eyebrow>
              <h2 className="mt-4 text-[clamp(1.7rem,2.8vw,2.4rem)] font-semibold leading-[1] tracking-[-0.03em] text-foreground">
                This opportunity is presented like a documented brief, with the practical signals left intact.
              </h2>
              <p className="mt-4 text-sm leading-8 text-muted-foreground">
                {opening.trustNote}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="surface-card p-7">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
                  Requirements
                </h2>
                <ul className="mt-5 space-y-3">
                  {opening.requirements.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="surface-card p-7">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
                  Benefits
                </h2>
                <ul className="mt-5 space-y-3">
                  {opening.benefits.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <SectionShell inset={false} className="rounded-none border-0 bg-transparent p-0 shadow-none">
              <div className="rounded-[2rem] border border-black/6 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
                  Documents to prepare
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {opening.documents.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.25rem] border border-black/6 bg-background px-4 py-4 text-sm leading-7 text-muted-foreground"
                    >
                      <div className="flex items-start gap-3">
                        <FileText className="mt-1 h-4 w-4 text-accent" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionShell>

            <div className="surface-card p-7">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
                How this opening moves
              </h2>
              <ol className="mt-6 space-y-4">
                {opening.processHighlights.map((item, index) => (
                  <li key={item} className="flex gap-4 rounded-[1.25rem] border border-black/6 bg-background px-4 py-4 text-sm leading-7 text-muted-foreground">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div id="registration" className="space-y-6 xl:sticky xl:top-24">
            <div className="surface-card p-7 sm:p-8">
              <Eyebrow>Register for this interview</Eyebrow>
              <h2 className="mt-4 text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-foreground">
                Choose your slot and secure a Freshmind reference.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                The form flow is unchanged. The experience around it is simply clearer,
                calmer, and more confident for job seekers and families.
              </p>
              {error ? (
                <div className="mt-5 rounded-[1.25rem] border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                  {error}
                </div>
              ) : null}

              <PublicRegistrationForm
                cloudinaryEnabled={cloudinaryEnabled}
                opening={opening}
              />
            </div>

            <div className="rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-foreground">
                  Safety reminders
                </h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>Use Freshmind's published office channels if any cost or instruction is unclear.</li>
                <li>Keep your registration reference after submission.</li>
                <li>Verify communication against Freshmind's published numbers and ministry links.</li>
                <li>Treat any fee request as valid only when officially documented and receipted.</li>
                <li>Do not hand over passports to unofficial brokers or middlemen.</li>
              </ul>
            </div>

            <div className="rounded-[1rem] border border-black/8 bg-white p-6">
              <div className="flex items-center gap-3">
                <MapPinned className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-foreground">
                  Venue and slot logic stay unchanged
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Slot selection still drives the venue, timing, and seat capacity behind the scenes.
                This redesign only changes the interface around the booking flow, not the registration logic itself.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <PillButton asChild tone="dark">
                  <Link href="/safety">Review the anti-scam guide</Link>
                </PillButton>
                <PillButton asChild tone="light">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Clock3 className="h-4 w-4" />
                    Call before you act
                  </a>
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
