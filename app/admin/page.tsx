import Link from "next/link"
import { redirect } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  adminLogoutAction,
  createOpeningAction,
  createSlotAction,
  updateOpeningStatusAction,
  updateRegistrationStatusAction,
} from "@/lib/freshmind/actions"
import { getAdminSession } from "@/lib/freshmind/auth"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

type Props = {
  searchParams: Promise<{ notice?: string; error?: string }>
}

export const metadata = buildMetadata({
  title: "Admin Dashboard",
  description:
    "Freshmind internal dashboard for creating openings, releasing interview slots, and reviewing candidate registrations.",
  path: "/admin",
})

export default async function AdminPage({ searchParams }: Props) {
  const session = await getAdminSession()
  if (!session) {
    redirect("/admin/login")
  }

  const { notice, error } = await searchParams
  const repository = getRepository()
  const [openings, venues, registrations] = await Promise.all([
    repository.listOpenings(),
    repository.listVenues(),
    repository.listRegistrations(),
  ])

  return (
    <main className="page-shell">
      <section className="container py-12 sm:py-14">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <span className="section-eyebrow">Admin dashboard</span>
            <h1 className="font-display text-4xl font-semibold text-primary">
              Manage openings, slots, and registrations.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              Signed in as {session.email}. This dashboard is built to keep the
              public site, interview schedules, and candidate operations aligned.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/admin/export">Export CSV</Link>
            </Button>
            <form action={adminLogoutAction}>
              <Button type="submit" className="rounded-full bg-primary text-primary-foreground">
                Sign out
              </Button>
            </form>
          </div>
        </div>

        {notice ? (
          <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3 text-sm text-primary">
            {notice}
          </div>
        ) : null}
        {error ? (
          <div className="mt-6 rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        ) : null}
      </section>

      <section className="container grid gap-8 pb-16 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-8">
          <article className="surface-card p-7">
            <h2 className="text-2xl font-semibold text-primary">Create opportunity</h2>
            <form action={createOpeningAction} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="title" required placeholder="Opportunity title" className="h-11 rounded-2xl border border-input bg-background px-4" />
                <select name="category" required className="h-11 rounded-2xl border border-input bg-background px-4">
                  <option value="">Select category</option>
                  {["security", "transport", "hospitality", "construction", "healthcare", "retail"].map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
                <input name="destinationCountry" required placeholder="Destination country" className="h-11 rounded-2xl border border-input bg-background px-4" />
                <input name="destinationCity" required placeholder="Destination city" className="h-11 rounded-2xl border border-input bg-background px-4" />
                <input name="employer" required placeholder="Employer or partner" className="h-11 rounded-2xl border border-input bg-background px-4" />
                <input name="salaryRange" required placeholder="Salary range" className="h-11 rounded-2xl border border-input bg-background px-4" />
                <input name="openingsCount" type="number" min="1" required placeholder="Openings count" className="h-11 rounded-2xl border border-input bg-background px-4" />
                <input name="closingDate" type="date" required className="h-11 rounded-2xl border border-input bg-background px-4" />
              </div>
              <textarea name="summary" required rows={4} placeholder="Public summary" className="rounded-2xl border border-input bg-background px-4 py-3" />
              <textarea name="benefits" rows={4} placeholder="Benefits, one per line" className="rounded-2xl border border-input bg-background px-4 py-3" />
              <textarea name="requirements" rows={4} placeholder="Requirements, one per line" className="rounded-2xl border border-input bg-background px-4 py-3" />
              <textarea name="documents" rows={4} placeholder="Documents, one per line" className="rounded-2xl border border-input bg-background px-4 py-3" />
              <Button type="submit" className="rounded-full bg-primary text-primary-foreground">
                Save opportunity as draft
              </Button>
            </form>
          </article>

          <article className="surface-card p-7">
            <h2 className="text-2xl font-semibold text-primary">Publish interview slot</h2>
            <form action={createSlotAction} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <select name="openingId" required className="h-11 rounded-2xl border border-input bg-background px-4">
                  <option value="">Select opportunity</option>
                  {openings.map((opening) => (
                    <option key={opening.id} value={opening.id}>
                      {opening.title}
                    </option>
                  ))}
                </select>
                <select name="venueId" required className="h-11 rounded-2xl border border-input bg-background px-4">
                  <option value="">Select venue</option>
                  {venues.map((venue) => (
                    <option key={venue.id} value={venue.id}>
                      {venue.name} • {venue.city}
                    </option>
                  ))}
                </select>
                <input name="date" type="date" required className="h-11 rounded-2xl border border-input bg-background px-4" />
                <input name="capacity" type="number" min="1" required placeholder="Capacity" className="h-11 rounded-2xl border border-input bg-background px-4" />
                <input name="startTime" type="time" required className="h-11 rounded-2xl border border-input bg-background px-4" />
                <input name="endTime" type="time" required className="h-11 rounded-2xl border border-input bg-background px-4" />
              </div>
              <textarea name="note" rows={3} required placeholder="Slot note" className="rounded-2xl border border-input bg-background px-4 py-3" />
              <Button type="submit" className="rounded-full bg-primary text-primary-foreground">
                Publish slot
              </Button>
            </form>
          </article>
        </div>

        <div className="space-y-8">
          <article className="surface-card p-7">
            <h2 className="text-2xl font-semibold text-primary">Current opportunities</h2>
            <div className="mt-6 space-y-4">
              {openings.map((opening) => (
                <div key={opening.id} className="rounded-[1.2rem] border border-border p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-lg font-semibold text-primary">{opening.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {opening.destinationCity}, {opening.destinationCountry} • {opening.status}
                      </div>
                    </div>
                    <div className="text-sm text-primary">
                      {opening.seatsLeft} seats left • {opening.slotCount} slots
                    </div>
                  </div>
                  <form action={updateOpeningStatusAction} className="mt-4 flex flex-wrap gap-3">
                    <input type="hidden" name="openingId" value={opening.id} />
                    {["draft", "active", "upcoming", "closed"].map((status) => (
                      <button
                        key={status}
                        type="submit"
                        name="status"
                        value={status}
                        className={`rounded-full px-4 py-2 text-sm font-medium ${
                          opening.status === status
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/6 text-primary"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </form>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card p-7">
            <h2 className="text-2xl font-semibold text-primary">Candidate registrations</h2>
            <div className="mt-6 space-y-4">
              {registrations.length === 0 ? (
                <div className="rounded-[1.2rem] border border-dashed border-border p-5 text-sm text-muted-foreground">
                  No registrations yet. They will appear here as soon as candidates
                  submit interview requests.
                </div>
              ) : (
                registrations.map((registration) => (
                  <div key={registration.id} className="rounded-[1.2rem] border border-border p-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="font-semibold text-primary">{registration.fullName}</div>
                        <div className="text-sm text-muted-foreground">
                          {registration.reference} • {registration.openingTitle}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {registration.venueName}, {registration.venueCity} • {registration.slotLabel}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {registration.phone} • {registration.district}
                        </div>
                      </div>
                      <form action={updateRegistrationStatusAction} className="flex items-center gap-3">
                        <input type="hidden" name="registrationId" value={registration.id} />
                        <select
                          name="status"
                          defaultValue={registration.status}
                          className="h-10 rounded-full border border-input bg-background px-4 text-sm"
                        >
                          {["new", "confirmed", "shortlisted", "no-show", "placed"].map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                        <Button type="submit" variant="outline" className="rounded-full">
                          Update
                        </Button>
                      </form>
                    </div>
                  </div>
                ))
              )}
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
