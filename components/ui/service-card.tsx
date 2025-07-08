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
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-8">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
          <Icon className="h-8 w-8 text-secondary" />
        </div>

        <h3 className="mb-4 text-xl font-bold text-foreground">{title}</h3>

        <p className="mb-6 leading-relaxed text-muted-foreground">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center font-medium text-secondary transition-all hover:text-secondary-foreground"
        >
          Learn More
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </CardContent>
    </Card>
  )
}
