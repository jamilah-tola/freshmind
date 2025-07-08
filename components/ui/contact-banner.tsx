// components/ui/contact-banner.tsx
import { Phone } from "lucide-react"
import Link from "next/link"

interface ContactBannerProps {
  message: string
  phoneNumber: string
}

export function ContactBanner({ message, phoneNumber }: ContactBannerProps) {
  return (
    <section className="bg-secondary py-4">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <p className="text-lg font-medium text-secondary-foreground text-center md:text-left">
            {message}
          </p>
          <Link
            href={`tel:${phoneNumber}`}
            className="flex items-center space-x-2 transition-all hover:text-secondary-foreground/80"
          >
            <Phone className="w-5 h-5 text-secondary-foreground" />
            <span className="text-lg font-bold text-secondary-foreground">
              {phoneNumber}
            </span>
          </Link>
        </div>
      </div>
    </section>
)
}
