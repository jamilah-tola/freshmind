import Link from "next/link"
import {
  BriefcaseBusiness,
  MapPin,
} from "lucide-react"

import { PillButton } from "@/components/site/pill-button"
import { Reveal } from "@/components/site/reveal"
import type { OpportunityCardData } from "@/lib/freshmind/types"

const scheduleToneClasses = {
  "dates-published": "bg-primary text-primary-foreground",
  ongoing: "border border-primary/15 bg-primary/10 text-primary",
  "schedule-pending": "border border-black/8 bg-muted text-foreground/72",
} as const

type OpportunityShowcaseCardProps = {
  opening: OpportunityCardData
}

function formatDateLabel(value?: string) {
  if (!value) {
    return null
  }

  const parsed = new Date(`${value}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat("en-UG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsed)
}

function getInterviewLabel(opening: OpportunityCardData, formattedInterviewDate: string | null) {
  if (opening.scheduleState === "dates-published") {
    return `Interview: ${formattedInterviewDate ?? "Date to be confirmed"}`
  }

  if (opening.scheduleState === "ongoing") {
    return "Interview: Ongoing"
  }

  return "Interview: To be announced"
}

export function OpportunityShowcaseCard({
  opening,
}: OpportunityShowcaseCardProps) {
  const formattedInterviewDate = formatDateLabel(opening.nextInterviewDate)
  const interviewLabel = getInterviewLabel(opening, formattedInterviewDate)

  return (
    <Reveal>
      <article className="group overflow-hidden rounded-[1.4rem] border border-black/6 bg-white shadow-sm transition-colors duration-150 hover:bg-muted/20">
        <div className="grid gap-0 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="relative flex min-h-[250px] flex-col justify-between overflow-hidden border-b border-black/6 bg-[radial-gradient(circle_at_top_left,_rgba(130,186,51,0.24),_transparent_45%),linear-gradient(160deg,#f7fbef_0%,#eef5df_52%,#ffffff_100%)] p-6 lg:min-h-full lg:border-b-0 lg:border-r">
            <div className="absolute -right-10 top-6 h-28 w-28 rounded-full bg-white/50 blur-2xl" />
            <div className="absolute bottom-5 right-5 grid grid-cols-4 gap-2 opacity-60">
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index} className="h-2 w-2 rounded-full bg-primary/20" />
              ))}
            </div>

            <div className="relative flex h-full flex-col justify-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.08)]">
                <BriefcaseBusiness className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <p className="max-w-[18ch] text-[1.55rem] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground">
                  Job opening
                </p>
                <p className="max-w-[24ch] text-sm leading-7 text-foreground/70">
                  Verified role ready for registration through Freshmind.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 p-6 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-3">
                <h3 className="max-w-[18ch] text-[1.8rem] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground">
                  {opening.title}
                </h3>
                <p className="max-w-[56ch] text-sm leading-7 text-muted-foreground">
                  {opening.summary}
                </p>
              </div>
              <span
                className={`inline-flex shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${scheduleToneClasses[opening.scheduleState]}`}
              >
                {interviewLabel}
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <p className="font-semibold text-foreground">
                {opening.destinationCity}, {opening.destinationCountry}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Requirements
                </p>
                <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
                  {opening.requirements.map((requirement) => (
                    <li key={requirement} className="flex items-start gap-3">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Benefits
                </p>
                {opening.benefits.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {opening.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm leading-7 text-muted-foreground">
                    Benefit details are shared during employer confirmation.
                  </p>
                )}
                <p className="text-sm leading-7 text-muted-foreground">{opening.feePolicy}</p>
              </div>
            </div>

            <div className="pt-2">
              <PillButton asChild tone="dark" icon="arrow-up-right">
                <Link
                  href={`/opportunities/book?opening=${opening.slug}`}
                  aria-label={`Register for interview for ${opening.title}`}
                >
                  Register for interview
                </Link>
              </PillButton>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
