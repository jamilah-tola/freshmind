import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface VisaCardProps {
  icon: LucideIcon
  title: string
  description: string
  image: string
  href: string
}

export function VisaCard({ icon: Icon, title, description, image, href }: VisaCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:-translate-y-1 group">
      <CardContent className="p-6">
        <div className="relative overflow-hidden rounded-lg mb-6">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <Icon className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
        <Link
          href={href}
          className="text-red-600 font-medium hover:text-red-400 transition-colors inline-flex items-center group"
        >
          Read More
          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </CardContent>
    </Card>
  )
}
