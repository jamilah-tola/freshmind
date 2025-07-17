// components/layout/Header.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Users, Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { images } from "@/constants/images"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isJobsOpen, setIsJobsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    // Job categories will be handled below
    { href: "/application-process", label: "APPLY" },
    { href: "/contact", label: "CONTACT" },
  ]

  const jobCategories = [
    { href: "/job-categories/security", label: "Security Services", image: images.security },
    { href: "/job-categories/transport", label: "Transport & Logistics", image: images.taxi },
    { href: "/job-categories/hospitality", label: "Hospitality & Cleaning", image: images.cleaners },
    { href: "/job-categories/construction", label: "Construction & Skilled Work", image: images.construction },
    { href: "/job-categories/retail", label: "Retail & Customer Service" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className="bg-background sticky top-0 z-50 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={images.logo} alt="Freshmind" width={68} height={68} />
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-1 py-1 font-medium transition-colors ${
                isActive(item.href)
                  ? "text-primary before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}

        </nav>

        {/* Apply + Mobile toggle */}
        <div className="flex items-center space-x-4">
          <Button className="hidden sm:inline-block btn-primary">Apply Now</Button>
          <button
            className="lg:hidden text-foreground hover:text-primary transition-all"
            onClick={() => setIsMenuOpen((o) => !o)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded px-3 py-2 font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-primary/5 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <Button className="btn-primary w-full mt-4">Apply Now</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
