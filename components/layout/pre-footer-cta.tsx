import Link from "next/link"

import { PillButton } from "@/components/site/pill-button"
import { siteConfig } from "@/lib/site"

export function PreFooterCta() {
  return (
    <section className="pt-8 sm:pt-10 lg:pt-12">
      <div className="container">
        <div className="rounded-[1.5rem] bg-transparent px-6 py-6 text-foreground sm:px-8 sm:py-7">
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_auto] lg:items-center">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Contact us
              </p>
              <h2 className="max-w-[20ch] text-2xl font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-[1.9rem]">
                Need help choosing the right opening or preparing your documents?
              </h2>
              <p className="max-w-[58ch] text-sm leading-7 text-muted-foreground">
                Reach Freshmind through official channels for candidate guidance,
                employer inquiries, or next-step clarification before you proceed.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center lg:min-w-[520px]">
              <div className="border-l border-black/8 pl-4 sm:pl-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Reach the team
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground/82">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="font-semibold text-foreground hover:text-primary"
                  >
                    {siteConfig.phone}
                  </a>
                  <br />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-semibold text-foreground hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>
              <div className="sm:justify-self-end">
                <PillButton asChild tone="dark">
                  <Link href="/contact">Contact Us</Link>
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
