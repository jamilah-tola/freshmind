// components/ui/contact-banner.tsx
import { Phone } from "lucide-react"
import Link from "next/link"

interface ContactBannerProps {
  message: string
  phoneNumber: string
}

export function ContactBanner({ message, phoneNumber }: ContactBannerProps) {
  return (
    <section className="border-y border-black/8 bg-secondary py-4">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-4">
          <p className="text-center text-base font-medium text-secondary-foreground md:text-left">
            {message}
          </p>
          <Link
            href={`tel:${phoneNumber}`}
            className="flex h-11 items-center gap-2 rounded-md border border-black/8 bg-white px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>{phoneNumber}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
