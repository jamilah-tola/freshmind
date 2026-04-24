import Link from "next/link"
import {
  CalendarDays,
  FileText,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react"

import { MediaCard } from "@/components/site/editorial"
import { IconCircleButton } from "@/components/site/pill-button"
import { Reveal } from "@/components/site/reveal"
import { categoryVisuals } from "@/lib/freshmind/presentation"
import type { OpportunityCardData } from "@/lib/freshmind/types"

type OpportunityShowcaseCardProps = {
  opening: OpportunityCardData
}

export function OpportunityShowcaseCard({
  opening,
}: OpportunityShowcaseCardProps) {
  const visual = categoryVisuals[opening.category]

  return (
    <Reveal>
      <Link
        href={`/opportunities/${opening.slug}`}
        className="group block overflow-hidden rounded-[1.4rem] border border-black/6 bg-white shadow-sm transition-colors duration-150 hover:bg-muted/20"
        aria-label={`Open booking page for ${opening.title}`}
      >
        <article className="grid gap-0 lg:grid-cols-[320px_minmax(0,1fr)]">
          <MediaCard
            imageKey={visual.image}
            badge={visual.accentLabel}
            className="min-h-[240px] rounded-none border-0 lg:min-h-full"
          />

          <div className="space-y-6 p-6 sm:p-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-black/8 bg-background px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground/68">
                {opening.categoryInfo.label}
              </span>
              <span className="rounded-md bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                {opening.status}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="max-w-[18ch] text-[1.8rem] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground">
                {opening.title}
              </h3>
              <p className="max-w-[56ch] text-sm leading-7 text-muted-foreground">
                {opening.summary}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
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
                      Interview date
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {opening.nextInterviewDate || "Schedule pending"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1rem] border border-black/6 bg-background px-4 py-4">
                <div className="flex items-start gap-3">
                  <Users className="mt-1 h-4 w-4 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Seats available
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {opening.seatsLeft} across {opening.slotCount} slot
                      {opening.slotCount === 1 ? "" : "s"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <FileText className="mt-1 h-4 w-4 text-accent" />
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
                <span>Open booking form</span>
                <IconCircleButton />
              </div>
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
  )
}
