// components/ui/visa-card.tsx
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface VisaCardProps {
  icon: LucideIcon
  title: string
  description: string
  image: any
  href: string
}

export function VisaCard({
  icon: Icon,
  title,
  description,
  image,
  href,
}: VisaCardProps) {
  return (
    <Card className="group rounded-xl border border-border shadow-sm transition-colors duration-150 hover:bg-muted/20">
      <CardContent className="p-6">
        <div className="relative mb-6 overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="mb-4 flex items-center space-x-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>

        <p className="mb-6 leading-7 text-muted-foreground">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:underline"
        >
          Read more
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </CardContent>
    </Card>
  )
}
