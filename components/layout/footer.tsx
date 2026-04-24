import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

import { configuredSocialLinks, siteConfig } from "@/lib/site"

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Freshmind" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/why-freshmind", label: "Why Freshmind" },
  { href: "/contact", label: "Contact Us" },
]

const helpLinks = [
  { href: "/opportunities/book", label: "Book Interview" },
  { href: "/about", label: "About" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
]

const socialLinks = [
  {
    href: siteConfig.social.facebook,
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
    icon: Linkedin,
  },
].filter((item) => configuredSocialLinks.includes(item.href))

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden border-t border-white/14 text-white"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--primary-hover)) 0%, #0E5944 58%, #0E5944 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />

      <div className="container relative py-12 sm:py-14 lg:py-16">
        <div className="site-grid border-b border-white/14 pb-10">
          <div className="site-span-12 space-y-5 lg:col-span-4">
            <h3 className="text-xs font-semibold tracking-[0.04em] text-white/62">
              About Freshmind
            </h3>
            <Link href="/" className="inline-flex items-center gap-3 text-white">
              <Image
                src="/brand/freshmind-logo-light.png"
                alt="Freshmind logo"
                width={198}
                height={180}
                className="h-12 w-auto"
              />
              <div>
                <div className="font-display text-[1.2rem] font-semibold tracking-[-0.01em] text-white sm:text-[1.35rem]">
                  Freshmind
                </div>
                <div className="text-[0.7rem] text-white/62">
                  International Limited
                </div>
              </div>
            </Link>
            <p className="max-w-[35ch] text-sm leading-7 text-white/76">
              {siteConfig.description}
            </p>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/62">
              MGLSD Licensed • License No. {siteConfig.licenseNumber}
            </p>
          </div>

          <div className="site-span-12 space-y-4 lg:col-span-4">
            <h3 className="max-w-[24ch] text-base font-semibold leading-7 text-white sm:text-lg">
              Need help choosing the right opportunity or need more information?
            </h3>
            <div className="space-y-4 text-sm text-white/76">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/64" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/64" />
                <div className="space-y-1">
                  <a href={`tel:${siteConfig.phone}`} className="block hover:text-white">
                    {siteConfig.phone}
                  </a>
                  <a href={`tel:${siteConfig.altPhone}`} className="block hover:text-white">
                    {siteConfig.altPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/64" />
                <div>
                  <div>{siteConfig.address.street}</div>
                  <div className="text-white/62">
                    {siteConfig.address.postal}, {siteConfig.address.city}
                  </div>
                </div>
              </div>
            </div>
            {socialLinks.length > 0 ? (
              <div className="space-y-3 pt-2">
                <p className="text-xs font-semibold tracking-[0.04em] text-white/62">
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-white/14 bg-white/10 text-white transition-colors duration-150 hover:bg-white/18 hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            ) : null}
          </div>

          <div className="site-span-12 space-y-4 md:col-span-4 lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.04em] text-white/62">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-white/76">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-span-12 space-y-4 md:col-span-4 lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.04em] text-white/62">
              Help
            </h3>
            <ul className="space-y-3 text-sm text-white/76">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="site-grid items-center py-5 text-xs text-white/62">
          <p className="site-span-12 lg:col-span-6">
            © {currentYear} Freshmind International Ltd. All rights reserved.
          </p>
          <div className="site-span-12 flex flex-wrap items-center gap-5 lg:col-span-6 lg:justify-end">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
