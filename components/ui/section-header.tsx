// components/ui/section-header.tsx
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
  const isDark = theme === "dark"

  return (
    <div className={`${centered ? "text-center" : ""} mb-12`}>
      <div
        className={`flex items-center ${
          centered ? "justify-center" : ""
        } space-x-2 mb-4`}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isDark ? "bg-primary-foreground" : "bg-primary"
          }`}
        >
          <Icon
            className={`w-4 h-4 ${
              isDark ? "text-primary" : "text-primary-foreground"
            }`}
          />
        </div>
        <span className="text-secondary font-medium text-sm uppercase tracking-wide">
          {subtitle}
        </span>
      </div>

      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          isDark ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-muted-foreground text-lg max-w-3xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
