import { cn } from "@/lib/utils"

type CityNode = {
  code: string
  name: string
  top: number
  left: number
  size: "sm" | "md" | "lg"
  fillClass: string
  imageSrc?: string
  delay: string
}

type NetworkLink = {
  from: CityNode["code"]
  to: CityNode["code"]
  tone: "primary" | "accent"
}

const cities: CityNode[] = [
  {
    code: "KWI",
    name: "Kuwait",
    top: 18,
    left: 18,
    size: "sm",
    fillClass: "bg-[#EAF4DB] text-[#365314]",
    imageSrc: "/hero-cities/kuwait.jpg",
    delay: "0s",
  },
  {
    code: "RUH",
    name: "Riyadh",
    top: 14,
    left: 63,
    size: "lg",
    fillClass: "bg-[#82BA33] text-[#F7FCEB]",
    imageSrc: "/hero-cities/riyadh.jpg",
    delay: "0.6s",
  },
  {
    code: "DXB",
    name: "Dubai",
    top: 34,
    left: 40,
    size: "md",
    fillClass: "bg-[#F5582B] text-[#FFFFFF]",
    imageSrc: "/hero-cities/dubai.jpg",
    delay: "1.2s",
  },
  {
    code: "DOH",
    name: "Doha",
    top: 48,
    left: 24,
    size: "sm",
    fillClass: "bg-[#EDF5E3] text-[#3F6212]",
    imageSrc: "/hero-cities/doha.jpg",
    delay: "1.8s",
  },
  {
    code: "AUH",
    name: "Abu Dhabi",
    top: 44,
    left: 80,
    size: "md",
    fillClass: "bg-[#DDECC1] text-[#365314]",
    imageSrc: "/hero-cities/abu-dhabi.jpg",
    delay: "2.4s",
  },
  {
    code: "JED",
    name: "Jeddah",
    top: 68,
    left: 57,
    size: "md",
    fillClass: "bg-[#5E8F1D] text-[#F7FCEB]",
    imageSrc: "/hero-cities/jeddah.jpg",
    delay: "3s",
  },
]

const networkLinks: NetworkLink[] = [
  { from: "KWI", to: "DXB", tone: "primary" },
  { from: "KWI", to: "DOH", tone: "accent" },
  { from: "DOH", to: "DXB", tone: "primary" },
  { from: "DXB", to: "RUH", tone: "primary" },
  { from: "DXB", to: "AUH", tone: "accent" },
  { from: "DXB", to: "JED", tone: "primary" },
  { from: "JED", to: "AUH", tone: "primary" },
  { from: "DOH", to: "JED", tone: "accent" },
  { from: "RUH", to: "AUH", tone: "primary" },
]

const sizeClasses: Record<CityNode["size"], string> = {
  sm: "h-14 w-14 text-[0.68rem]",
  md: "h-16 w-16 text-[0.72rem]",
  lg: "h-20 w-20 text-[0.78rem]",
}

const cityByCode = Object.fromEntries(cities.map((city) => [city.code, city])) as Record<
  CityNode["code"],
  CityNode
>

function getNetworkPath(from: CityNode, to: CityNode) {
  const controlX = (from.left + to.left) / 2
  const verticalBias = from.top > to.top ? -5 : 5
  const controlY = (from.top + to.top) / 2 + verticalBias
  return `M ${from.left} ${from.top} Q ${controlX} ${controlY} ${to.left} ${to.top}`
}

export function MiddleEastRoutesVisual() {
  return (
    <div className="relative min-h-[380px] overflow-hidden bg-white px-5 py-5 sm:min-h-[430px] sm:px-6 sm:py-6">
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          {networkLinks.map((link, index) => {
            const from = cityByCode[link.from]
            const to = cityByCode[link.to]
            return (
              <path
                key={`${link.from}-${link.to}`}
                d={getNetworkPath(from, to)}
                className="route-link fill-none"
                style={{
                  animationDelay: `${index * 0.45}s`,
                  stroke:
                    link.tone === "accent"
                      ? "rgba(245, 88, 43, 0.36)"
                      : "rgba(130, 186, 51, 0.42)",
                  strokeWidth: link.tone === "accent" ? 0.48 : 0.42,
                  strokeLinecap: "round",
                }}
              />
            )
          })}
          {cities.map((city) => (
            <circle
              key={`${city.code}-hub`}
              cx={city.left}
              cy={city.top}
              r={0.45}
              fill="rgba(130, 186, 51, 0.62)"
            />
          ))}
        </svg>
      </div>

      <div className="absolute bottom-8 left-6 z-10 hidden h-14 w-14 grid-cols-6 gap-1 opacity-28 sm:grid">
        {Array.from({ length: 36 }).map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-[#CFE2A9]" />
        ))}
      </div>

      {cities.map((city) => (
        <div
          key={city.code}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ top: `${city.top}%`, left: `${city.left}%` }}
        >
          <button
            type="button"
            className="route-node group relative flex flex-col items-center"
            style={{ animationDelay: city.delay }}
          >
            <span className="absolute inset-1 rounded-full bg-primary/12 blur-md transition-transform duration-300 group-hover:scale-[1.14]" />

            <span
              className={cn(
                "route-node-media relative flex items-center justify-center rounded-full border border-white/80 shadow-[0_16px_32px_rgba(17,17,17,0.12)] ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.06]",
                sizeClasses[city.size],
                city.imageSrc
                  ? "overflow-hidden bg-cover bg-center text-white"
                  : city.fillClass
              )}
              style={
                city.imageSrc ? { backgroundImage: `url(${city.imageSrc})` } : undefined
              }
            >
              {city.imageSrc ? (
                <span className="absolute inset-0 rounded-full bg-black/28 transition-colors duration-300 group-hover:bg-black/[0.78]" />
              ) : null}
              <span className="relative z-10 text-shadow-soft">{city.code}</span>
            </span>

            <span className="mt-2 whitespace-nowrap border border-black/8 bg-white/90 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-foreground/72 shadow-sm">
              {city.name}
            </span>
          </button>
        </div>
      ))}
    </div>
  )
}
