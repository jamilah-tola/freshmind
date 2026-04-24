import Link from "next/link"
import { ArrowRight, CalendarDays, MapPin, ShieldCheck, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { OpportunityCardData } from "@/lib/freshmind/types"

type OpportunityCardProps = {
  opening: OpportunityCardData
}

export function OpportunityCard({ opening }: OpportunityCardProps) {
  return (
    <article className="surface-card flex h-full flex-col p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {opening.categoryInfo.label}
        </span>
        <span className="rounded-full bg-secondary/14 px-3 py-1 text-xs font-semibold text-primary">
          {opening.status}
        </span>
      </div>

      <div className="mt-5 space-y-3">
        <h3 className="balanced-wrap text-2xl font-semibold tracking-tight text-foreground">
          {opening.title}
        </h3>
        <p className="text-sm leading-7 text-muted-foreground">
          {opening.summary}
        </p>
      </div>

      <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
        <li className="flex items-start gap-3">
          <MapPin className="mt-1 h-4 w-4 text-accent" />
          <div>
            <p className="font-semibold text-foreground">Destination</p>
            <p>
              {opening.destinationCity}, {opening.destinationCountry}
            </p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-4 w-4 text-accent" />
          <div>
            <p className="font-semibold text-foreground">Next interview</p>
            <p>{opening.nextInterviewDate || "Schedule pending"}</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Users className="mt-1 h-4 w-4 text-accent" />
          <div>
            <p className="font-semibold text-foreground">Seats and roles</p>
            <p>
              {opening.seatsLeft} seats left across {opening.slotCount} published
              slot{opening.slotCount === 1 ? "" : "s"}
            </p>
          </div>
        </li>
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {opening.benefits.slice(0, 2).map((benefit) => (
          <span
            key={benefit}
            className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
          >
            {benefit}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-8">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary">
          <ShieldCheck className="h-4 w-4 text-accent" />
          {opening.feePolicy}
        </div>
        <Button asChild className="w-full">
          <Link href={`/opportunities/${opening.slug}`}>
            View opening and register
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  )
}
