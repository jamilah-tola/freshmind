import Image from "next/image"
import Link from "next/link"
import {
  MessageSquareQuote,
  Target,
  Telescope,
} from "lucide-react"

import { Eyebrow } from "@/components/site/editorial"
import { MiddleEastRoutesVisual } from "@/components/site/middle-east-routes-visual"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { aboutPageCopy, homePageCopy } from "@/lib/freshmind/editorial-copy"
import { testimonials } from "@/lib/freshmind/seed"
import { buildMetadata, siteConfig } from "@/lib/site"

const registrationSteps = [
  {
    title: "Choose a verified opening",
    body:
      "Start with a live role published through Freshmind's official channels so the destination, job type, and next screening route are already clear.",
  },
  {
    title: "Submit your registration details",
    body:
      "Complete your profile with the requested basics so the team can match you to the right interview intake and follow up using your reference.",
  },
  {
    title: "Attend screening with documents",
    body:
      "Bring your identification, passport status details, and any role-specific certificates to the venue or interview region listed for that intake.",
  },
  {
    title: "Review contract and expectations",
    body:
      "Shortlisted candidates are briefed on salary structure, employer terms, travel requirements, and what the deployment pathway actually involves.",
  },
  {
    title: "Prepare for travel and placement",
    body:
      "Before departure, Freshmind guides selected candidates through final documentation, orientation, and the support channels available after placement.",
  },
] as const

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export const metadata = buildMetadata({
  title: homePageCopy.metadata.title,
  description: homePageCopy.metadata.description,
  keywords: [
    "jobs abroad for Ugandans",
    "licensed recruitment agency Uganda",
    "verified jobs abroad Uganda",
    "work abroad Uganda",
    "Dubai jobs for Ugandans",
    "Qatar jobs for Ugandans",
    "Saudi jobs for Ugandans",
  ],
})

export default function HomePage() {
  const heroStats = [
    { value: "7K+", label: "Placements" },
    { value: "25+", label: "Partners" },
    { value: "15+", label: "Countries" },
  ] as const
  const homepageTestimonials = testimonials.slice(0, 4)
  const featuredTestimonial = homepageTestimonials.at(0)
  const supportingTestimonials = homepageTestimonials.slice(1)

  return (
    <main className="page-shell">
      <PageHero
        eyebrow={homePageCopy.hero.eyebrow}
        title={homePageCopy.hero.title}
        titleClassName="max-w-[17ch] text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]"
        description={homePageCopy.hero.description}
        visual={<MiddleEastRoutesVisual />}
        className="min-h-[100svh] !border-b-0 py-8 sm:py-10 lg:py-12"
        contentClassName="min-h-[calc(100svh-8rem)] content-center"
        actions={
          <>
            <PillButton asChild tone="dark">
              <Link href={homePageCopy.hero.candidateCta.href}>
                {homePageCopy.hero.candidateCta.label}
              </Link>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href={homePageCopy.hero.employerCta.href}>
                {homePageCopy.hero.employerCta.label}
              </Link>
            </PillButton>
          </>
        }
        details={
          <div className="grid grid-cols-3 gap-4 border-t border-black/8 pt-5 sm:gap-6">
            {heroStats.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="font-display text-[clamp(1.35rem,2.3vw,2rem)] font-semibold leading-none tracking-[-0.02em] text-foreground">
                  {item.value}
                </p>
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-[0.68rem]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        }
      />

      <section className="py-6 sm:py-8">
        <div className="container">
          <div
            className="relative overflow-hidden rounded-[1.25rem] border border-white/12 px-6 py-6 text-white shadow-[0_20px_44px_rgba(14,89,68,0.18)] sm:px-8 sm:py-7 lg:px-10"
            style={{
              background:
                "linear-gradient(135deg, #0E5944 0%, hsl(var(--primary-hover)) 48%, hsl(var(--primary)) 100%)",
            }}
          >
            <svg
              viewBox="0 0 1000 220"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[56%] opacity-[0.22] lg:block"
              aria-hidden="true"
            >
              <path
                d="M60 54 C230 18 356 120 520 82 S804 20 1060 80"
                className="fill-none"
                stroke="rgba(255,255,255,0.74)"
                strokeWidth="1.4"
              />
              <path
                d="M20 144 C220 96 386 184 568 142 S830 84 1048 128"
                className="fill-none"
                stroke="rgba(255,255,255,0.46)"
                strokeWidth="1.1"
              />
            </svg>
            <div className="pointer-events-none absolute bottom-5 right-8 hidden grid-cols-6 gap-1.5 opacity-[0.45] lg:grid">
              {Array.from({ length: 36 }).map((_, index) => (
                <span key={index} className="h-1 w-1 rounded-full bg-white" />
              ))}
            </div>

            <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_auto] lg:items-center">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/78">
                  Opportunities now open
                </p>
                <h2 className="max-w-[20ch] text-2xl font-semibold leading-tight tracking-[-0.01em] sm:text-3xl">
                  Your next opportunity abroad could start here.
                </h2>
                <p className="max-w-[56ch] text-sm leading-7 text-white/86">
                  Browse current destinations, role requirements, interview routes, and
                  application guidance published through official Freshmind channels.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center lg:min-w-[520px]">
                <div className="border-l border-white/18 pl-4 sm:pl-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/72">
                    Need help?
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/88">
                    Call{" "}
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="font-semibold text-white hover:text-white/80"
                    >
                      {siteConfig.phone}
                    </a>
                    <br />
                    Email{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-semibold text-white hover:text-white/80"
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
                <div className="sm:justify-self-end">
                  <PillButton asChild tone="light">
                    <Link href="/opportunities">View Opportunities</Link>
                  </PillButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="site-grid lg:items-center">
            <div className="site-span-12 lg:col-span-6">
              <div className="overflow-hidden rounded-[1.5rem] border border-black/8 bg-white shadow-[0_20px_44px_rgba(15,23,42,0.1)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/hero-cities/jeddah.jpg"
                    alt="Jeddah skyline representing Freshmind's destination markets"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="site-span-12 space-y-6 lg:col-span-6 lg:pl-4">
              <Eyebrow>Who We Are</Eyebrow>
              <div className="space-y-4">
                <h2 className="section-title max-w-[13ch]">About Freshmind International</h2>
                <p className="max-w-[34rem] text-xl font-semibold leading-8 text-foreground sm:text-2xl sm:leading-9">
                  We connect Ugandan job seekers to verified overseas opportunities through a
                  documented, worker-first recruitment process.
                </p>
                <p className="section-copy">
                  Freshmind International is a Uganda-based labor recruitment company
                  focused on verified overseas placements, transparent process guidance,
                  and worker-first safeguards from screening to deployment.
                </p>
              </div>
              <div className="space-y-6 border-l border-black/8 pl-5">
                <div className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Target className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      Mission Statement
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {aboutPageCopy.mission}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Telescope className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      Vision Statement
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {aboutPageCopy.vision}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <PillButton asChild tone="dark">
                  <Link href="/about">More About Us</Link>
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" id="how-to-register">
        <div className="container">
          <div className="mx-auto grid max-w-[72rem] gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
            <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              <Eyebrow>How to Register</Eyebrow>
              <h2 className="section-title max-w-[18ch]">
                Start your journey through a simplified process.
              </h2>
              <p className="max-w-[42rem] text-lg leading-8 text-foreground/72 sm:text-[1.1rem]">
                Working abroad is a big step. Freshmind keeps the process clear from
                the start, so you know how to apply, what to prepare, and what happens
                at each stage.
              </p>
            </div>

            <ol className="relative space-y-0 pl-16 before:absolute before:left-[1.05rem] before:top-4 before:bottom-4 before:w-px before:bg-black/10 sm:pl-20 sm:before:left-[1.55rem]">
              {registrationSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="relative border-b border-black/8 py-6 last:border-b-0 sm:py-7"
                >
                  <span className="absolute left-[-4rem] top-6 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-[0_10px_24px_rgba(14,89,68,0.18)] sm:left-[-5rem] sm:h-12 sm:w-12 sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-3">
                    <h3 className="max-w-[18ch] text-[1.15rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.32rem]">
                      {step.title}
                    </h3>
                    <p className="max-w-[54ch] text-sm leading-7 text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" id="testimonials">
        <div className="container">
          <div className="space-y-5">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="section-title max-w-[17ch]">
              What people say about Freshmind International
            </h2>

            <div className="grid items-start gap-6 lg:grid-cols-12">
              {featuredTestimonial ? (
                <article
                  className="relative self-start overflow-hidden rounded-[1.75rem] px-6 py-7 text-white shadow-[0_20px_44px_rgba(14,89,68,0.18)] sm:px-8 sm:py-8 lg:col-span-7"
                  style={{
                    background:
                      "linear-gradient(135deg, #0E5944 0%, hsl(var(--primary-hover)) 46%, hsl(var(--primary)) 100%)",
                  }}
                >
                  <MessageSquareQuote className="absolute right-6 top-6 h-16 w-16 text-white/14" />
                  <p className="max-w-[24ch] text-[1.3rem] font-semibold leading-9 tracking-[-0.02em] text-white sm:text-[1.45rem] sm:leading-10">
                    “{featuredTestimonial.quote}”
                  </p>
                  <div className="mt-8 flex items-center gap-4 border-t border-white/16 pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/14 text-sm font-semibold uppercase tracking-[0.12em] text-white">
                      {getInitials(featuredTestimonial.name)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {featuredTestimonial.name}
                      </p>
                      <p className="text-sm leading-7 text-white/76">
                        {featuredTestimonial.role} • {featuredTestimonial.district}
                      </p>
                    </div>
                  </div>
                </article>
              ) : null}

              {supportingTestimonials.at(0) ? (
                <article
                  key={supportingTestimonials[0].id}
                  className="rounded-[1.35rem] border border-black/8 bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.06)] lg:col-span-5"
                >
                  <p className="text-lg leading-8 tracking-[-0.01em] text-foreground">
                    “{supportingTestimonials[0].quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-4 border-t border-black/8 pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      {getInitials(supportingTestimonials[0].name)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {supportingTestimonials[0].name}
                      </p>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {supportingTestimonials[0].role} • {supportingTestimonials[0].district}
                      </p>
                    </div>
                  </div>
                </article>
              ) : null}

              {supportingTestimonials.slice(1).map((story) => (
                <article
                  key={story.id}
                  className="rounded-[1.35rem] border border-black/8 bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.06)] lg:col-span-6"
                >
                  <p className="text-lg leading-8 tracking-[-0.01em] text-foreground">
                    “{story.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-4 border-t border-black/8 pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      {getInitials(story.name)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{story.name}</p>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {story.role} • {story.district}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
