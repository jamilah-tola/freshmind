import Link from "next/link"
import { Users, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-bold">FRESHMIND</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Licensed labor recruitment agency connecting skilled Ugandan workers with reputable employers across the
              Middle East and Europe. Ethical recruitment, fair wages, secure employment.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6">Job Categories</h4>
            <ul className="space-y-3">
              {jobCategories.map((category) => (
                <li key={category.href}>
                  <Link href={category.href} className="text-gray-400 hover:text-white transition-colors">
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                <div>
                  <div className="text-gray-400">+256 783 183 252</div>
                  <div className="text-gray-400">+256 704 231 665</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-400">freshmindinternational@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Mengo, Behind Sir Apollo Kaggwa Primary School
                  <br />
                  P.O. Box 5633, Kampala, Uganda
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 FreshMind International Ltd. All rights reserved. | Licensed by MGLSD (License No. E24050019) |
            <Link href="/privacy" className="hover:text-white ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-white ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
