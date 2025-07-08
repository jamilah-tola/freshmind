import type { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  icon: LucideIcon
  subtitle: string
  title: string
  description?: string
  centered?: boolean
  theme?: "light" | "dark"
}

export function SectionHeader({
  icon: Icon,
  subtitle,
  title,
  description,
  centered = false,
  theme = "light",
}: SectionHeaderProps) {
  const textColor = theme === "dark" ? "text-white" : "text-gray-900"
  const subtitleColor = theme === "dark" ? "text-red-400" : "text-red-600"
  const descriptionColor = theme === "dark" ? "text-gray-300" : "text-gray-600"

  return (
    <div className={`${centered ? "text-center" : ""} mb-12`}>
      <div className={`flex items-center ${centered ? "justify-center" : ""} space-x-2 mb-4`}>
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
          <Icon className="w-4 h-4 text-white" />
        </div>
        <span className={`${subtitleColor} font-medium text-sm uppercase tracking-wide`}>{subtitle}</span>
      </div>
      <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>{title}</h2>
      {description && (
        <p className={`${descriptionColor} text-lg max-w-3xl ${centered ? "mx-auto" : ""}`}>{description}</p>
      )}
    </div>
  )
}
