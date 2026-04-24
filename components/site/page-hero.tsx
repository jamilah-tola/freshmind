import Image from "next/image"
import Link from "next/link"
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
  metrics?: readonly HeroMetric[]
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
  const compactTitle =
    eyebrow && title.split(/\s+/).length > 6 ? eyebrow : title

  if (compact) {
    return (
      <section
        className={cn(
          "relative overflow-hidden border-b border-black/8 bg-[#082F27] text-primary-foreground",
          underHeader && "-mt-16 pt-16 lg:-mt-[72px] lg:pt-[72px]",
          className
        )}
      >
        <div className="absolute inset-0">
          <Image
            src="/hero-cities/doha.jpg"
            alt="Doha skyline"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(4,30,25,0.96)_0%,rgba(7,50,40,0.9)_44%,rgba(14,89,68,0.74)_70%,rgba(130,186,51,0.54)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.18),transparent_34%)]" />
        </div>

        <div className="container relative py-12 sm:py-14 lg:py-16">
          <Reveal className="max-w-3xl space-y-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/72">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/42">
                  /
                </li>
                <li aria-current="page" className="text-white">
                  {compactTitle}
                </li>
              </ol>
            </nav>

            <h1
              className={cn(
                "max-w-[15ch] font-display text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white text-shadow-soft",
                titleClassName
              )}
            >
              {compactTitle}
            </h1>
          </Reveal>
        </div>
      </section>
    )
  }

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
              "lg:col-span-5"
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
