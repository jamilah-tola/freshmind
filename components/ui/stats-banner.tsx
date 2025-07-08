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
  const bgColor = variant === "red" ? "bg-red-600" : "bg-gray-900"

  return (
    <section className={`${bgColor} py-6`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <stat.icon className="w-8 h-8" />
              <span className="text-sm font-medium uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
