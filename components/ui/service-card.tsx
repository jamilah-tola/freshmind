// components/ui/service-card.tsx
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href = "#",
}: ServiceCardProps) {
  return (
    <Card className="h-full rounded-xl border border-black/8 shadow-sm transition-colors duration-150 hover:bg-muted/20">
      <CardContent className="p-6">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
          <Icon className="h-5 w-5 text-primary" />
        </div>

        <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>

        <p className="leading-7 text-muted-foreground">{description}</p>

        {href === "#" ? (
          <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
            Learn more
          </span>
        ) : (
          <Link
            href={href}
            className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:underline"
          >
            Learn more
          </Link>
        )}
      </CardContent>
    </Card>
  )
}
