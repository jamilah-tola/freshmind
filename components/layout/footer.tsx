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

import { globalEditorialCopy } from "@/lib/freshmind/editorial-copy"
import { siteConfig } from "@/lib/site"

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Freshmind" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/contact", label: "Contact Us" },
]

const helpLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "/why-freshmind", label: "Why Freshmind" },
  { href: "/safety", label: "Safety & Anti-Scam" },
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
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-black/8 bg-white text-foreground sm:mt-20">
      <div className="container py-10 sm:py-12 lg:py-14">
        <div className="site-grid border-b border-black/8 pb-10">
          <div className="site-span-12 space-y-5 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 text-foreground">
              <Image
                src={siteConfig.logoPath}
                alt="Freshmind logo"
                width={95}
                height={91}
                className="h-10 w-auto"
              />
              <div>
                <div className="font-display text-xl font-semibold tracking-[-0.03em]">
                  Freshmind
                </div>
                <div className="text-[0.68rem] uppercase tracking-[0.2em] text-foreground/54">
                  Ethical Recruitment
                </div>
              </div>
            </Link>

            <div className="space-y-3">
              <h2 className="max-w-[12ch] font-display text-[clamp(1.9rem,3.6vw,3.1rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-foreground">
                Promoting Ethical Recruitment, One Verified Step At A Time.
              </h2>
              <p className="max-w-[48ch] text-sm leading-7 text-muted-foreground">
                {globalEditorialCopy.footerLead}
              </p>
            </div>
          </div>

          <div className="site-span-12 space-y-4 lg:col-span-7 lg:pl-8">
            <div className="text-sm font-semibold tracking-[-0.01em] text-foreground">
              Get In Touch
            </div>
            <form
              action="/contact"
              className="flex flex-col gap-3 border border-black/10 bg-white p-2 sm:flex-row sm:items-center sm:pl-5"
            >
              <label htmlFor="footer-email" className="sr-only">
                Enter your email
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="h-11 flex-1 bg-transparent px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none sm:px-0"
              />
              <input type="hidden" name="source" value="footer" />
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contact Us
              </button>
            </form>
            <p className="text-sm leading-7 text-muted-foreground">
              Use your email to continue to the contact page, or call{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-foreground hover:text-primary">
                {siteConfig.phone}
              </a>{" "}
              for direct help.
            </p>
          </div>
        </div>

        <div className="site-grid border-b border-black/8 py-10">
          <div className="site-span-12 space-y-4 lg:col-span-4">
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact Information
            </h3>
            <div className="space-y-4 text-sm text-foreground/82">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="space-y-1">
                  <a href={`tel:${siteConfig.phone}`} className="block hover:text-primary">
                    {siteConfig.phone}
                  </a>
                  <a href={`tel:${siteConfig.altPhone}`} className="block hover:text-primary">
                    {siteConfig.altPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <div>{siteConfig.address.street}</div>
                  <div className="text-muted-foreground">
                    {siteConfig.address.postal}, {siteConfig.address.city}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-span-12 space-y-4 md:col-span-4 lg:col-span-2">
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-foreground/82">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-span-12 space-y-4 md:col-span-4 lg:col-span-2">
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Help
            </h3>
            <ul className="space-y-3 text-sm text-foreground/82">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-span-12 space-y-4 lg:col-span-4">
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Follow Us
            </h3>
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
            <p className="max-w-[28ch] text-sm leading-7 text-muted-foreground">
              Official channels stay public so candidates can verify who they are
              speaking to before they proceed.
            </p>
          </div>
        </div>

        <div className="site-grid items-center py-5 text-xs text-muted-foreground">
          <p className="site-span-12 lg:col-span-6">
            © {currentYear} Freshmind International Ltd. All rights reserved.
          </p>
          <div className="site-span-12 flex flex-wrap items-center gap-5 lg:col-span-6 lg:justify-end">
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
