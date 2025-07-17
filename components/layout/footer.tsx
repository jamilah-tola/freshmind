// components/layout/Footer.tsx
import Link from "next/link"
import {
  Users,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"
import Image from "next/image"
import { images } from "@/constants/images"

export function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  const jobCategories = [
    { href: "/job-categories/security", label: "Security Jobs" },
    { href: "/job-categories/hospitality", label: "Hospitality Jobs" },
    { href: "/job-categories/transport", label: "Transport Jobs" },
    { href: "/job-categories/construction", label: "Construction Jobs" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-3 gap-5">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image src={images.logoWhite} alt="Freshmind" width={50} height={50} />
              <span className="text-2xl font-semibold">FRESHMIND</span>
            </Link>
            <p className="mb-6 leading-relaxed">
              Licensed labor recruitment agency connecting skilled Ugandan workers
              with reputable employers across the Middle East and Europe. Ethical
              recruitment, fair wages, secure employment.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="text-primary-foreground hover:text-secondary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground hover:text-secondary transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Categories */}
       

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div className="text-primary-foreground">
                  <div>+256 783 183 252</div>
                  <div>+256 704 231 665</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground">
                  freshmindinternational@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground">
                  Mengo, Behind Sir Apollo Kaggwa Primary School
                  <br />
                  P.O. Box 5633, Kampala, Uganda
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary mt-12 pt-8 text-center">
          <p className="text-primary-foreground">
            © 2024 FreshMind International Ltd. All rights reserved. | Licensed by
            MGLSD (License No. E24050019) |
            <Link href="/privacy" className="hover:text-secondary ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-secondary ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
