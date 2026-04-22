import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

import { Eyebrow, SectionShell } from "@/components/site/editorial"
import { PageHero } from "@/components/site/page-hero"
import { PillButton } from "@/components/site/pill-button"
import { buildMetadata } from "@/lib/site"

type Props = {
  searchParams: Promise<{ reference?: string; opening?: string }>
}

export const metadata = buildMetadata({
  title: "Registration Confirmed",
  description:
    "Your Freshmind interview registration has been received. Save your reference and wait for official follow-up.",
  path: "/register/success",
})

export default async function RegistrationSuccessPage({ searchParams }: Props) {
  const { reference, opening } = await searchParams

  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Registration received"
        title="Your Freshmind interview request is now on record."
        description="Keep your registration reference. Use it whenever you contact Freshmind about your slot, venue confirmation, or shortlisting status."
        imageKey="interviewSuite"
        compact
      />

      <SectionShell>
        <div className="mx-auto max-w-2xl surface-card p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/14">
            <CheckCircle2 className="h-8 w-8 text-secondary" />
          </div>
          <Eyebrow className="mt-6">Reference issued</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-foreground">
            Reference: {reference || "Pending reference"}
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Freshmind will contact you through official channels only. If you are
            ever unsure, confirm details through the phone numbers and verification
            links listed on the safety page.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PillButton asChild tone="dark">
              <Link href="/safety">Review the safety guide</Link>
            </PillButton>
            <PillButton asChild tone="light">
              <Link href={opening ? `/opportunities/${opening}` : "/opportunities"}>
                Back to opportunities
              </Link>
            </PillButton>
          </div>
        </div>
      </SectionShell>
    </main>
  )
}
