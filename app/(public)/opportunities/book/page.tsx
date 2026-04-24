import { PageHero } from "@/components/site/page-hero"
import { PublicRegistrationForm } from "@/components/freshmind/public/public-registration-form"
import { isCloudinaryConfigured } from "@/lib/freshmind/cloudinary"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

export const dynamic = "force-dynamic"

type Props = {
  searchParams: Promise<{ error?: string; opening?: string }>
}

export const metadata = buildMetadata({
  title: "Book your interview",
  description:
    "Use Freshmind's shared booking page to choose an opportunity, select an interview slot, and submit your registration.",
  path: "/opportunities/book",
})

export default async function SharedBookingPage({ searchParams }: Props) {
  const { error, opening: requestedOpening } = await searchParams
  const repository = getRepository()
  const openings = await repository.listPublicOpenings()
  const selectedSlug = requestedOpening || openings[0]?.slug
  const selectedOpening = selectedSlug
    ? await repository.getOpportunityBySlug(selectedSlug)
    : null
  const cloudinaryEnabled = isCloudinaryConfigured()
  const hasBookableSlots = selectedOpening?.slots.some(
    (slot) => slot.status === "open" && slot.seatsLeft > 0
  )

  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Interview booking"
        title="Book your interview today"
        description="Use one shared booking page for every Freshmind opening. Select the role, choose your interview slot, and complete your registration."
        imageKey="interviewSuite"
        compact
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="surface-card p-7 sm:p-8">
              {openings.length > 0 ? (
                <div className="mb-8 space-y-3">
                  <p className="metric-label">Selected opportunity</p>
                  <form action="/opportunities/book" className="space-y-3">
                    <select
                      name="opening"
                      defaultValue={selectedOpening?.slug ?? selectedSlug ?? ""}
                      className="public-select"
                    >
                      {openings.map((opening) => (
                        <option key={opening.id} value={opening.slug}>
                          {opening.title}
                        </option>
                      ))}
                    </select>
                    <button type="submit" className="sr-only">
                      Update opportunity
                    </button>
                  </form>
                  {selectedOpening ? (
                    <p className="text-sm leading-7 text-muted-foreground">
                      {selectedOpening.destinationCity}, {selectedOpening.destinationCountry}
                    </p>
                  ) : null}
                </div>
              ) : null}

              {error ? (
                <div className="mb-5 rounded-[1.25rem] border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                  {error}
                </div>
              ) : null}

              {selectedOpening && hasBookableSlots ? (
                <PublicRegistrationForm
                  cloudinaryEnabled={cloudinaryEnabled}
                  opening={selectedOpening}
                />
              ) : selectedOpening ? (
                <div className="rounded-[1.25rem] border border-black/6 bg-background px-5 py-5 text-sm leading-7 text-muted-foreground">
                  Booking is not open for this opportunity right now. Freshmind will publish
                  the next interview schedule here once registration begins.
                </div>
              ) : (
                <div className="rounded-[1.25rem] border border-black/6 bg-background px-5 py-5 text-sm leading-7 text-muted-foreground">
                  There are no published opportunities ready for booking right now.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
