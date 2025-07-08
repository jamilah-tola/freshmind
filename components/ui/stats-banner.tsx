// components/ui/stats-banner.tsx
import type { LucideIcon } from "lucide-react"

interface StatItem {
  icon: LucideIcon
  label: string
}

interface StatsBannerProps {
  stats: StatItem[]
  variant?: "red" | "dark"
}

export function StatsBanner({ stats, variant = "red" }: StatsBannerProps) {
  const isDark = variant === "dark"

  return (
    <section
      className={`${isDark ? "bg-primary" : "bg-secondary"} py-6`}
    >
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <stat.icon
                className={`w-8 h-8 ${
                  isDark
                    ? "text-primary-foreground"
                    : "text-secondary-foreground"
                }`}
              />
              <span
                className={`text-sm font-medium uppercase tracking-wide ${
                  isDark
                    ? "text-primary-foreground"
                    : "text-secondary-foreground"
                }`}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
