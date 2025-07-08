import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  variant?: "default" | "dark"
}

export function ServiceCard({ icon: Icon, title, description, href = "#", variant = "default" }: ServiceCardProps) {
  const cardBg = variant === "dark" ? "bg-gray-800 border-gray-700" : "bg-white"
  const textColor = variant === "dark" ? "text-white" : "text-gray-900"
  const descriptionColor = variant === "dark" ? "text-gray-400" : "text-gray-600"

  return (
    <Card className={`${cardBg} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <CardContent className="p-8">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-red-600" />
        </div>
        <h3 className={`text-xl font-bold mb-4 ${textColor}`}>{title}</h3>
        <p className={`${descriptionColor} mb-6 leading-relaxed`}>{description}</p>
        <Link
          href={href}
          className="text-red-600 font-medium hover:text-red-700 transition-colors inline-flex items-center group"
        >
          Learn More
          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </CardContent>
    </Card>
  )
}
