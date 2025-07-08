import { Phone } from "lucide-react"
import Link from "next/link"

interface ContactBannerProps {
  message: string
  phoneNumber: string
}

export function ContactBanner({ message, phoneNumber }: ContactBannerProps) {
  return (
    <section className="bg-red-600 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-white space-y-2 md:space-y-0">
          <p className="text-lg text-center md:text-left font-medium">{message}</p>
          <Link
            href={`tel:${phoneNumber}`}
            className="flex items-center space-x-2 hover:text-red-200 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg font-bold">{phoneNumber}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
