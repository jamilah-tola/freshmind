import type { ReactNode } from "react"

import { narrativeMedia } from "@/lib/freshmind/presentation"
import { PageHero } from "@/components/site/page-hero"

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
  align?: "left" | "center"
}

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
  align = "left",
}: PageIntroProps) {
  return (
    <PageHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      imageKey={narrativeMedia.archive}
      actions={
        actions ? (
          <div className={align === "center" ? "mx-auto flex flex-wrap justify-center gap-3" : undefined}>
            {actions}
          </div>
        ) : undefined
      }
      compact
    />
  )
}
