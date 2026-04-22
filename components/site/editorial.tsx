import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

import type {
  ImageAssetKey,
  ProofRailItem,
  SectionTheme,
} from "@/lib/freshmind/presentation"
import { imageAssets } from "@/lib/freshmind/presentation"
import { cn } from "@/lib/utils"
import { PillButton, IconCircleButton } from "@/components/site/pill-button"
import { Reveal } from "@/components/site/reveal"

const sectionThemeClasses: Record<SectionTheme, string> = {
  light: "border-black/8 bg-white text-foreground",
  dark: "border-black/8 bg-white text-foreground",
  accent: "border-black/8 bg-white text-foreground",
}

export function Eyebrow({
  children,
  className,
  inverse = false,
}: {
  children: ReactNode
  className?: string
  inverse?: boolean
}) {
  return (
    <span
      className={cn(
        "section-eyebrow",
        inverse &&
          "!border-primary-foreground/12 !bg-primary-foreground/8 !text-primary-foreground/76",
        className
      )}
      style={
        inverse
          ? {
              borderColor: "rgba(43,20,15,0.12)",
              backgroundColor: "rgba(43,20,15,0.08)",
              color: "rgba(43,20,15,0.76)",
            }
          : undefined
      }
    >
      {children}
    </span>
  )
}

export function SectionShell({
  children,
  theme = "light",
  className,
  outerClassName,
  inset = true,
}: {
  children: ReactNode
  theme?: SectionTheme
  className?: string
  outerClassName?: string
  inset?: boolean
}) {
  return (
    <section className={cn("py-16 sm:py-20 lg:py-28", outerClassName)}>
      <div className="container">
        <div
          className={cn(
            inset &&
              "rounded-[1rem] border px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16",
            inset && sectionThemeClasses[theme],
            className
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}

export function DisplayMetric({
  label,
  value,
  detail,
  inverse = false,
}: {
  label: string
  value: string
  detail?: string
  inverse?: boolean
}) {
  return (
    <div
      className={cn(
        "metric-chip",
        inverse &&
          "border-primary-foreground/12 bg-primary-foreground/6 text-primary-foreground"
      )}
    >
      <div className={cn("metric-label", inverse && "text-primary-foreground/60")}>
        {label}
      </div>
      <div className={cn("metric-value", inverse && "text-primary-foreground")}>
        {value}
      </div>
      {detail ? (
        <p
          className={cn(
            "mt-2 max-w-[22ch] text-sm leading-6",
            inverse ? "text-primary-foreground/68" : "text-muted-foreground"
          )}
        >
          {detail}
        </p>
      ) : null}
    </div>
  )
}

export function MediaCard({
  imageKey,
  alt,
  className,
  priority = false,
  badge,
  overlay,
}: {
  imageKey: ImageAssetKey
  alt?: string
  className?: string
  priority?: boolean
  badge?: string
  overlay?: ReactNode
}) {
  const asset = imageAssets[imageKey]

  return (
    <div className={cn("group media-card", asset.ratio, className)}>
      <Image
        src={asset.src}
        alt={alt ?? asset.alt}
        fill
        priority={priority}
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.02),rgba(17,17,17,0.22))]" />
      {badge ? (
        <span className="absolute left-5 top-5 rounded-full bg-white/88 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-foreground shadow-sm">
          {badge}
        </span>
      ) : null}
      {overlay ? <div className="absolute inset-x-5 bottom-5">{overlay}</div> : null}
    </div>
  )
}

export function FeatureTile({
  icon: Icon,
  eyebrow,
  title,
  description,
  theme = "light",
}: {
  icon: LucideIcon
  eyebrow?: string
  title: string
  description: string
  theme?: SectionTheme
}) {
  return (
    <Reveal>
      <article
        className={cn(
          "group rounded-[1.75rem] border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.1)]",
          theme === "dark"
            ? "border-primary-foreground/12 bg-primary/90 text-primary-foreground"
            : theme === "accent"
              ? "border-black/6 bg-secondary text-secondary-foreground"
              : "border-black/6 bg-white"
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-4">
            {eyebrow ? (
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {eyebrow}
              </p>
            ) : null}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5">
              <Icon className="h-5 w-5" />
            </div>
          </div>
          <IconCircleButton />
        </div>
        <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em]">{title}</h3>
        <p
          className={cn(
            "mt-3 text-sm leading-7",
            theme === "dark"
              ? "text-primary-foreground/74"
              : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      </article>
    </Reveal>
  )
}

export function ProofRail({
  items,
  theme = "light",
}: {
  items: ProofRailItem[]
  theme?: SectionTheme
}) {
  return (
    <div
      className={cn(
        "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
        theme === "dark" && "text-primary-foreground"
      )}
    >
      {items.map((item, index) => {
        const content = (
          <Reveal delay={index * 0.05}>
            <article
              className={cn(
                "rounded-[1.5rem] border p-5",
                theme === "dark"
                  ? "border-primary-foreground/12 bg-primary-foreground/6"
                  : "border-black/6 bg-white"
              )}
            >
              <p
                className={cn(
                  "text-[0.72rem] font-semibold uppercase tracking-[0.16em]",
                  theme === "dark"
                    ? "text-primary-foreground/52"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">
                {item.value}
              </h3>
              {item.detail ? (
                <p
                  className={cn(
                    "mt-3 text-sm leading-7",
                    theme === "dark"
                      ? "text-primary-foreground/72"
                      : "text-muted-foreground"
                  )}
                >
                  {item.detail}
                </p>
              ) : null}
            </article>
          </Reveal>
        )

        return item.href ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="block transition-transform duration-200 hover:-translate-y-1"
          >
            {content}
          </a>
        ) : (
          <div key={item.label}>{content}</div>
        )
      })}
    </div>
  )
}

export function PromoCard({
  eyebrow,
  title,
  description,
  href,
  cta,
  imageKey,
  theme,
}: {
  eyebrow: string
  title: string
  description: string
  href: string
  cta: string
  imageKey: ImageAssetKey
  theme: SectionTheme
}) {
  return (
    <Reveal>
      <article
        className={cn(
          "overflow-hidden rounded-[2rem] border",
          theme === "dark"
            ? "border-white/10 bg-primary text-primary-foreground"
            : theme === "accent"
              ? "border-black/6 bg-secondary text-secondary-foreground"
              : "border-black/6 bg-white"
        )}
      >
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <Eyebrow inverse={theme === "dark"}>{eyebrow}</Eyebrow>
            <h3 className="mt-5 max-w-[12ch] text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1] tracking-[-0.035em]">
              {title}
            </h3>
            <p
              className={cn(
                "mt-4 max-w-[36ch] text-sm leading-7",
                theme === "dark"
                  ? "text-primary-foreground/72"
                  : "text-current/74"
              )}
            >
              {description}
            </p>
            <PillButton asChild tone={theme === "dark" ? "accent" : "dark"} className="mt-7">
              <Link href={href}>{cta}</Link>
            </PillButton>
          </div>
          <MediaCard
            imageKey={imageKey}
            className="min-h-[320px] border-0"
            badge={theme === "dark" ? "Live workflow" : "Freshmind standard"}
          />
        </div>
      </article>
    </Reveal>
  )
}

export function EditorialSplit({
  eyebrow,
  title,
  description,
  imageKey,
  points,
  reverse = false,
  theme = "light",
  cta,
}: {
  eyebrow: string
  title: string
  description: string
  imageKey: ImageAssetKey
  points?: string[]
  reverse?: boolean
  theme?: SectionTheme
  cta?: ReactNode
}) {
  return (
    <div
      className={cn(
        "grid gap-8 lg:items-center",
        reverse ? "lg:grid-cols-[1fr_0.92fr]" : "lg:grid-cols-[0.92fr_1fr]"
      )}
    >
      <Reveal className={cn(reverse && "lg:order-2")}>
        <MediaCard imageKey={imageKey} className="min-h-[420px]" />
      </Reveal>
      <Reveal className={cn("space-y-5", reverse && "lg:order-1")}>
        <Eyebrow inverse={theme === "dark"}>{eyebrow}</Eyebrow>
        <h2
          className={cn(
            "section-title max-w-[14ch]",
            theme === "dark" && "text-primary-foreground"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "section-copy",
            theme === "dark" && "text-primary-foreground/72"
          )}
        >
          {description}
        </p>
        {points?.length ? (
          <ul className="grid gap-3 pt-2">
            {points.map((point, index) => (
              <li
                key={point}
                className={cn(
                  "flex gap-4 rounded-[1.25rem] border p-4 text-sm leading-7",
                  theme === "dark"
                    ? "border-primary-foreground/12 bg-primary-foreground/6 text-primary-foreground/74"
                    : "border-black/6 bg-white text-muted-foreground"
                )}
              >
                <span
                  className={cn(
                    "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                    theme === "dark"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  {index + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {cta ? <div className="pt-2">{cta}</div> : null}
      </Reveal>
    </div>
  )
}

export function FormShell({
  title,
  description,
  children,
  aside,
}: {
  title: string
  description: string
  children: ReactNode
  aside?: ReactNode
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.04fr_0.96fr]">
      <div className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:p-8">
        <h2 className="text-[clamp(1.8rem,2.6vw,2.6rem)] font-semibold leading-[1] tracking-[-0.03em] text-foreground">
          {title}
        </h2>
        <p className="mt-4 max-w-[46ch] text-sm leading-7 text-muted-foreground">
          {description}
        </p>
        <div className="mt-8">{children}</div>
      </div>
      {aside ? <div className="space-y-5">{aside}</div> : null}
    </div>
  )
}

export function InlineLinkCard({
  href,
  eyebrow,
  title,
  description,
}: {
  href: string
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-5 rounded-[1.5rem] border border-black/6 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
    >
      <div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-foreground">
          {title}
        </h3>
        <p className="mt-2 max-w-[34ch] text-sm leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
