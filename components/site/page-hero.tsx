import type { ReactNode } from "react"

import { DisplayMetric, Eyebrow, MediaCard } from "@/components/site/editorial"
import { Reveal } from "@/components/site/reveal"
import type {
  HeroMetric,
  ImageAssetKey,
  SectionTheme,
} from "@/lib/freshmind/presentation"
import { cn } from "@/lib/utils"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  imageKey?: ImageAssetKey
  visual?: ReactNode
  className?: string
  actions?: ReactNode
  details?: ReactNode
  metrics?: HeroMetric[]
  aside?: ReactNode
  theme?: SectionTheme
  underHeader?: boolean
  compact?: boolean
}

export function PageHero({
  eyebrow,
  title,
  description,
  imageKey,
  visual,
  className,
  actions,
  details,
  metrics,
  aside,
  theme = "light",
  underHeader = false,
  compact = false,
}: PageHeroProps) {
  const inverse = theme === "dark"

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b py-12 sm:py-16 lg:py-20",
        underHeader && "-mt-[84px] pt-[116px] sm:pt-[132px] lg:pt-[148px]",
        inverse
          ? "border-primary-foreground/12 bg-primary text-primary-foreground"
          : "border-black/8 bg-white",
        className
      )}
    >
      <div className="container">
        <div className="site-grid items-center">
          <Reveal
            className={cn(
              "site-span-12 space-y-6 lg:space-y-8",
              compact ? "lg:col-span-5" : "lg:col-span-5"
            )}
          >
            <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>

            <div className="space-y-5">
              <h1
                className={cn(
                  compact
                    ? "max-w-[13ch] text-[clamp(1.95rem,3.3vw,3.15rem)]"
                    : "max-w-[12ch] text-[clamp(2.2rem,4vw,4.05rem)]",
                  "font-display font-semibold leading-[0.97] tracking-[-0.045em]",
                  inverse ? "text-primary-foreground" : "text-foreground"
                )}
              >
                {title}
              </h1>
              <p
                className={cn(
                  "max-w-[46ch] text-[0.98rem] leading-7 sm:text-[1rem] sm:leading-8",
                  inverse ? "text-primary-foreground/76" : "text-muted-foreground"
                )}
              >
                {description}
              </p>
            </div>

            {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
            {details ? <div>{details}</div> : null}

            {metrics?.length ? (
              <div className="grid gap-4 pt-2 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <DisplayMetric key={metric.label} inverse={inverse} {...metric} />
                ))}
              </div>
            ) : null}
          </Reveal>

          <Reveal className="site-span-12 space-y-5 lg:col-span-7 lg:pl-4">
            {visual ? (
              visual
            ) : imageKey ? (
              <MediaCard
                imageKey={imageKey}
                priority
                className={cn(
                  compact ? "min-h-[360px]" : "min-h-[460px]",
                  "!rounded-none !border-0 !bg-transparent !shadow-none"
                )}
              />
            ) : null}
            {aside ? <div className="grid gap-4 sm:grid-cols-2">{aside}</div> : null}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
