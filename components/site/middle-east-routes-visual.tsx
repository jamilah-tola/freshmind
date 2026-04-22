import { cn } from "@/lib/utils"

type CityNode = {
  code: string
  name: string
  top: string
  left: string
  size: "sm" | "md" | "lg"
  fillClass: string
  delay: string
}

const routePaths = [
  "M40 108 C160 40 290 178 408 116 S650 48 866 110",
  "M12 184 C168 136 264 260 408 202 S640 118 844 178",
  "M48 282 C180 206 300 350 468 294 S678 194 860 244",
  "M96 348 C248 294 366 420 516 360 S694 294 834 322",
]

const cities: CityNode[] = [
  {
    code: "AMM",
    name: "Amman",
    top: "18%",
    left: "18%",
    size: "sm",
    fillClass: "bg-[#E8EDF3] text-[#334155]",
    delay: "0s",
  },
  {
    code: "RUH",
    name: "Riyadh",
    top: "14%",
    left: "63%",
    size: "lg",
    fillClass: "bg-[#64748B] text-[#F8FAFC]",
    delay: "0.6s",
  },
  {
    code: "DXB",
    name: "Dubai",
    top: "34%",
    left: "40%",
    size: "md",
    fillClass: "bg-[#F5582B] text-[#FFFFFF]",
    delay: "1.2s",
  },
  {
    code: "DOH",
    name: "Doha",
    top: "48%",
    left: "24%",
    size: "sm",
    fillClass: "bg-[#E5E7EB] text-[#374151]",
    delay: "1.8s",
  },
  {
    code: "AUH",
    name: "Abu Dhabi",
    top: "44%",
    left: "80%",
    size: "md",
    fillClass: "bg-[#E2E8F0] text-[#334155]",
    delay: "2.4s",
  },
  {
    code: "JED",
    name: "Jeddah",
    top: "68%",
    left: "57%",
    size: "md",
    fillClass: "bg-[#94A3B8] text-[#F8FAFC]",
    delay: "3s",
  },
]

const sizeClasses: Record<CityNode["size"], string> = {
  sm: "h-14 w-14 text-[0.68rem]",
  md: "h-16 w-16 text-[0.72rem]",
  lg: "h-20 w-20 text-[0.78rem]",
}

export function MiddleEastRoutesVisual() {
  return (
    <div className="relative min-h-[380px] overflow-hidden border border-black/8 bg-white px-5 py-5 sm:min-h-[430px] sm:px-6 sm:py-6">
      <div className="absolute inset-x-0 top-8 bottom-0">
        <svg
          viewBox="0 0 900 520"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          {routePaths.map((path, index) => (
            <path
              key={path}
              d={path}
              className="route-wave fill-none"
              style={{
                animationDelay: `${index * 0.7}s`,
                stroke:
                  index === 1
                    ? "rgba(245, 88, 43, 0.38)"
                    : "rgba(100, 116, 139, 0.34)",
                strokeWidth: index === 1 ? 2.8 : 2,
                strokeLinecap: "round",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="absolute bottom-8 left-6 z-10 hidden h-14 w-14 grid-cols-6 gap-1 opacity-28 sm:grid">
        {Array.from({ length: 36 }).map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-[#CBD5E1]" />
        ))}
      </div>

      {cities.map((city) => (
        <div
          key={city.code}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ top: city.top, left: city.left }}
        >
          <button
            type="button"
            className="route-node group relative flex flex-col items-center"
            style={{ animationDelay: city.delay }}
          >
            <span className="absolute inset-0 rounded-full bg-primary/10 blur-lg transition-transform duration-300 group-hover:scale-[1.18]" />

            <span
              className={cn(
                "relative flex items-center justify-center rounded-full border border-white/80 shadow-[0_16px_32px_rgba(17,17,17,0.12)] ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-[1.07]",
                sizeClasses[city.size],
                city.fillClass
              )}
            >
              {city.code}
            </span>

            <span className="mt-2 whitespace-nowrap border border-black/8 bg-white/88 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-foreground/72 shadow-sm">
              {city.name}
            </span>
          </button>
        </div>
      ))}
    </div>
  )
}
