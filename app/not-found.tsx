import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="page-shell">
      <section className="container py-20 sm:py-24">
        <div className="mx-auto max-w-2xl hero-frame p-10 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
            404
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold text-primary sm:text-5xl">
            That page is not part of the Freshmind journey.
          </h1>
          <p className="mt-4 text-sm leading-8 text-muted-foreground">
            The route you tried does not exist or is no longer published. Start
            from the live opportunities page or return home.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full bg-primary text-primary-foreground">
              <Link href="/opportunities">Browse opportunities</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/">Return home</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
