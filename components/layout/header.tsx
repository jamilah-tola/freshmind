"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"

import { PillButton } from "@/components/site/pill-button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { globalEditorialCopy } from "@/lib/freshmind/editorial-copy"
import { primaryNavigation, siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const elevated = !isHome || scrolled

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        elevated
          ? "border-b border-black/8 bg-white/95 backdrop-blur-xl"
          : "border-b border-black/8 bg-white"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between gap-4 transition-all duration-300",
          elevated ? "h-[72px]" : "h-[84px]"
        )}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={siteConfig.logoPath}
            alt="Freshmind logo"
            width={95}
            height={91}
            priority
            className="h-12 w-auto"
          />
          <div>
            <div className="font-display text-[1.35rem] font-semibold tracking-[-0.03em] text-foreground">
              Freshmind
            </div>
            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-foreground/54">
              Ethical Recruitment
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNavigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-[0.92rem] font-medium transition-colors",
                  active
                    ? "bg-secondary/70 text-secondary-foreground"
                    : "text-foreground/72 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <PillButton asChild tone="dark">
            <Link href="/opportunities">Register for Interview</Link>
          </PillButton>
        </div>

        <Sheet>
          <SheetTrigger className="inline-flex h-11 items-center gap-2 rounded-full border border-black/8 bg-white/80 px-4 text-sm font-medium text-foreground shadow-sm lg:hidden">
            <Menu className="h-4 w-4" />
            Menu
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[90vw] max-w-[360px] border-l border-black/6 bg-background p-0"
          >
            <SheetHeader className="border-b border-black/6 px-6 py-6">
              <SheetTitle className="font-display text-2xl tracking-[-0.03em] text-foreground">
                Freshmind
              </SheetTitle>
              <SheetDescription className="text-sm leading-7 text-muted-foreground">
                {globalEditorialCopy.menuDescription}
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-2 px-6 py-6">
              {primaryNavigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname.startsWith(item.href)

                return (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-[1.25rem] px-4 py-3 text-base font-medium transition-colors",
                        active
                          ? "bg-secondary text-secondary-foreground"
                          : "hover:bg-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                )
              })}
            </div>
            <div className="space-y-3 border-t border-black/6 px-6 py-6">
              <PillButton asChild tone="dark" className="w-full">
                <Link href="/opportunities">Register for Interview</Link>
              </PillButton>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
