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
    <Card className="group border border-border shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="relative overflow-hidden rounded-lg mb-6">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="mb-4 flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10">
            <Icon className="h-4 w-4 text-secondary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>

        <p className="mb-6 leading-relaxed text-muted-foreground">
          {description}
        </p>

        <Link
          href={'/application-process'}
          className="inline-flex items-center font-medium text-secondary transition-all hover:text-secondary-foreground"
        >
          Read More
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </CardContent>
    </Card>
  )
}
