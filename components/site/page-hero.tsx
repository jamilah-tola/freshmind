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
  titleClassName?: string
  contentClassName?: string
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
  titleClassName,
  contentClassName,
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
        "relative overflow-hidden border-b py-16 sm:py-20 lg:py-24",
        underHeader && "-mt-16 pt-28 sm:pt-32 lg:-mt-[72px] lg:pt-40",
        inverse
          ? "border-primary-foreground/12 bg-primary text-primary-foreground"
          : "border-black/8 bg-white",
        className
      )}
    >
      <div className="container">
        <div className={cn("site-grid items-center", contentClassName)}>
          <Reveal
            className={cn(
              "site-span-12 space-y-6 lg:space-y-8",
              compact ? "lg:col-span-5" : "lg:col-span-5"
            )}
          >
            {eyebrow ? <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow> : null}

            <div className="space-y-5">
              <h1
                className={cn(
                  compact
                    ? "max-w-[13ch] text-[clamp(2.25rem,4vw,3rem)]"
                    : "max-w-[12ch] text-[clamp(2.5rem,5vw,4rem)]",
                  "font-display font-bold leading-[1.08] tracking-[-0.02em]",
                  inverse ? "text-primary-foreground" : "text-foreground",
                  titleClassName
                )}
              >
                {title}
              </h1>
              <p
                className={cn(
                  "max-w-[60ch] text-base leading-7 sm:leading-8",
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
