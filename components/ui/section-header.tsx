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
        } mb-4 space-x-2`}
      >
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-md ${
            isDark ? "bg-primary-foreground" : "bg-primary"
          }`}
        >
          <Icon
            className={`w-4 h-4 ${
              isDark ? "text-primary" : "text-primary-foreground"
            }`}
          />
        </div>
        <span className="text-sm font-medium tracking-wide text-muted-foreground">
          {subtitle}
        </span>
      </div>

      <h2
        className={`mb-4 text-3xl font-bold md:text-4xl ${
          isDark ? "text-primary-foreground" : "text-foreground"
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
