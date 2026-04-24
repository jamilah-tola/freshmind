import Link from "next/link"
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  type LucideIcon,
  HardHat,
  MapPin,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  Truck,
  UtensilsCrossed,
} from "lucide-react"

import { IconCircleButton } from "@/components/site/pill-button"
import { Reveal } from "@/components/site/reveal"
import type { OpportunityCardData, OpportunityCategory } from "@/lib/freshmind/types"

const categoryIcons: Record<OpportunityCategory, LucideIcon> = {
  security: Shield,
  transport: Truck,
  hospitality: UtensilsCrossed,
  construction: HardHat,
  healthcare: Stethoscope,
  retail: ShoppingBag,
}

const scheduleToneClasses = {
  "dates-published": "bg-primary text-primary-foreground",
  ongoing: "bg-secondary text-secondary-foreground",
  "schedule-pending": "bg-muted text-foreground/72",
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

function getScheduleBadge(opening: OpportunityCardData) {
  if (opening.scheduleState === "dates-published") {
    return "Dates published"
  }

  if (opening.scheduleState === "ongoing") {
    return "Ongoing"
  }

  return "Schedule pending"
}

export function OpportunityShowcaseCard({
  opening,
}: OpportunityShowcaseCardProps) {
  const CategoryIcon = categoryIcons[opening.category]
  const formattedInterviewDate = formatDateLabel(opening.nextInterviewDate)
  const scheduleCopy =
    opening.scheduleState === "dates-published" && formattedInterviewDate
      ? `Next interview ${formattedInterviewDate}`
      : opening.scheduleLabel

  return (
    <Reveal>
      <Link
        href={`/opportunities/${opening.slug}#registration`}
        className="group block overflow-hidden rounded-[1.4rem] border border-black/6 bg-white shadow-sm transition-colors duration-150 hover:bg-muted/20"
        aria-label={`Open booking page for ${opening.title}`}
      >
        <article className="grid gap-0 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="relative flex min-h-[250px] flex-col justify-between overflow-hidden border-b border-black/6 bg-[radial-gradient(circle_at_top_left,_rgba(130,186,51,0.24),_transparent_45%),linear-gradient(160deg,#f7fbef_0%,#eef5df_52%,#ffffff_100%)] p-6 lg:min-h-full lg:border-b-0 lg:border-r">
            <div className="absolute -right-10 top-6 h-28 w-28 rounded-full bg-white/50 blur-2xl" />
            <div className="absolute bottom-5 right-5 grid grid-cols-4 gap-2 opacity-60">
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index} className="h-2 w-2 rounded-full bg-primary/20" />
              ))}
            </div>

            <div className="relative flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-black/8 bg-white/90 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground/72">
                {opening.categoryInfo.label}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] ${scheduleToneClasses[opening.scheduleState]}`}
              >
                {getScheduleBadge(opening)}
              </span>
            </div>

            <div className="relative space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.08)]">
                <CategoryIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/56">
                  Interview route
                </p>
                <p className="max-w-[18ch] text-[1.55rem] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground">
                  {scheduleCopy}
                </p>
                <p className="max-w-[24ch] text-sm leading-7 text-foreground/70">
                  {opening.interviewTypeLabel}
                </p>
              </div>
            </div>

            <div className="relative rounded-[1.15rem] border border-black/6 bg-white/88 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Availability
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {opening.availabilityLabel}
              </p>
            </div>
          </div>

          <div className="space-y-6 p-6 sm:p-7">
            <div className="space-y-3">
              <h3 className="max-w-[18ch] text-[1.8rem] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground">
                {opening.title}
              </h3>
              <p className="max-w-[56ch] text-sm leading-7 text-muted-foreground">
                {opening.summary}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[1rem] border border-black/6 bg-background px-4 py-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Destination
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {opening.destinationCity}, {opening.destinationCountry}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1rem] border border-black/6 bg-background px-4 py-4">
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Schedule
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {formattedInterviewDate || opening.scheduleLabel}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1rem] border border-black/6 bg-background px-4 py-4">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Requirements
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {opening.requirements.length} key checks published
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1rem] border border-black/6 bg-background px-4 py-4">
                <div className="flex items-start gap-3">
                  <BriefcaseBusiness className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Candidate support
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {opening.benefits.length} benefits highlighted
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <BadgeCheck className="mt-1 h-4 w-4 text-accent" />
                  <p>
                    Requirements include {opening.requirements.slice(0, 3).join(", ")}
                    {opening.requirements.length > 3 ? ", and more" : ""}.
                  </p>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <ShieldCheck className="mt-1 h-4 w-4 text-accent" />
                  <p>{opening.feePolicy}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <span>Open booking page</span>
                <IconCircleButton />
              </div>
            </div>

            {opening.benefits.length > 0 ? (
              <div className="flex flex-wrap gap-2 border-t border-black/6 pt-5">
                {opening.benefits.slice(0, 4).map((benefit) => (
                  <span
                    key={benefit}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </article>
      </Link>
    </Reveal>
  )
}
