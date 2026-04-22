import Link from "next/link"
import { CalendarDays, MapPin, ShieldCheck, Users } from "lucide-react"

import { categoryVisuals } from "@/lib/freshmind/presentation"
import type { OpportunityCardData } from "@/lib/freshmind/types"
import { cn } from "@/lib/utils"
import { IconCircleButton, PillButton } from "@/components/site/pill-button"
import { MediaCard } from "@/components/site/editorial"
import { Reveal } from "@/components/site/reveal"

type OpportunityShowcaseCardProps = {
  opening: OpportunityCardData
  featured?: boolean
}

export function OpportunityShowcaseCard({
  opening,
  featured = false,
}: OpportunityShowcaseCardProps) {
  const visual = categoryVisuals[opening.category]

  if (featured) {
    return (
      <Reveal>
        <article className="overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-black/8 bg-background px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground/68">
                  {opening.categoryInfo.label}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-secondary-foreground">
                  Featured opening
                </span>
              </div>
              <div>
                <h2 className="max-w-[11ch] text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-foreground">
                  {opening.title}
                </h2>
                <p className="mt-4 max-w-[46ch] text-sm leading-7 text-muted-foreground">
                  {opening.summary}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.25rem] border border-black/6 bg-background px-4 py-4">
                  <div className="metric-label">Destination</div>
                  <div className="mt-2 text-base font-semibold text-foreground">
                    {opening.destinationCity}
                  </div>
                </div>
                <div className="rounded-[1.25rem] border border-black/6 bg-background px-4 py-4">
                  <div className="metric-label">Next interview</div>
                  <div className="mt-2 text-base font-semibold text-foreground">
                    {opening.nextInterviewDate || "Schedule pending"}
                  </div>
                </div>
                <div className="rounded-[1.25rem] border border-black/6 bg-background px-4 py-4">
                  <div className="metric-label">Seats left</div>
                  <div className="mt-2 text-base font-semibold text-foreground">
                    {opening.seatsLeft}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {opening.benefits.slice(0, 3).map((benefit) => (
                  <span
                    key={benefit}
                    className="rounded-full bg-background px-3 py-1.5 text-xs font-medium text-foreground/72"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <PillButton asChild tone="dark">
                  <Link href={`/opportunities/${opening.slug}`}>
                    View opening and register
                  </Link>
                </PillButton>
                <PillButton asChild tone="light">
                  <Link href="/safety">Check safety guide</Link>
                </PillButton>
              </div>
            </div>
            <MediaCard
              imageKey={visual.image}
              badge={visual.accentLabel}
              className="min-h-[420px]"
            />
          </div>
        </article>
      </Reveal>
    )
  }

  return (
    <Reveal>
      <article className="group overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(0,0,0,0.12)]">
        <MediaCard
          imageKey={visual.image}
          badge={visual.accentLabel}
          className="min-h-[280px] rounded-none border-0"
        />
        <div className="space-y-5 p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-black/8 bg-background px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground/68">
              {opening.categoryInfo.label}
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-secondary-foreground">
              {opening.status}
            </span>
          </div>
          <div>
            <h3 className="max-w-[14ch] text-[1.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground">
              {opening.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {opening.summary}
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 text-secondary" />
              <div>
                <p className="font-semibold text-foreground">Destination</p>
                <p>
                  {opening.destinationCity}, {opening.destinationCountry}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CalendarDays className="mt-1 h-4 w-4 text-secondary" />
              <div>
                <p className="font-semibold text-foreground">Next interview</p>
                <p>{opening.nextInterviewDate || "Schedule pending"}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Users className="mt-1 h-4 w-4 text-secondary" />
              <div>
                <p className="font-semibold text-foreground">Seats and roles</p>
                <p>
                  {opening.seatsLeft} seats left across {opening.slotCount} published
                  slot{opening.slotCount === 1 ? "" : "s"}
                </p>
              </div>
            </li>
          </ul>
          <div className="flex items-center justify-between gap-4 border-t border-black/6 pt-5">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              <span className="max-w-[22ch]">{opening.feePolicy}</span>
            </div>
            <Link
              href={`/opportunities/${opening.slug}`}
              className="group inline-flex items-center gap-3"
              aria-label={`View ${opening.title}`}
            >
              <span className="text-sm font-semibold text-foreground">Open</span>
              <IconCircleButton />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
