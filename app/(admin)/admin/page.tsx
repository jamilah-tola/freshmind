import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

export const dynamic = "force-dynamic"

export const metadata = buildMetadata({
  title: "Admin Overview",
  description:
    "Freshmind admin overview for opportunities, interview slots, registrations, and contact submissions.",
  path: "/admin",
})

export default async function AdminOverviewPage() {
  const repository = getRepository()
  const [overview, openings, registrations, contacts] = await Promise.all([
    repository.getDashboardOverview(),
    repository.listOpenings(),
    repository.listRegistrations(),
    repository.listContactSubmissions(),
  ])

  const recentRegistrations = registrations.slice(0, 5)
  const recentContacts = contacts.slice(0, 5)

  return (
    <div className="space-y-8">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <Badge variant="outline" className="rounded-full px-3 py-1">
            Overview
          </Badge>
          <h1 className="text-3xl font-semibold tracking-[-0.03em] text-foreground">
            Recruitment operations at a glance.
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
            Track active opportunities, open interview capacity, new registrations,
            and fresh contact requests from the same admin shell.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="rounded-full">
            <Link href="/admin/opportunities">Manage opportunities</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/admin/export">Export registrations CSV</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          {
            label: "Visible opportunities",
            value: overview.activeOpportunities,
            detail: `${overview.totalOpportunities} total opportunities in Postgres`,
          },
          {
            label: "Open interview slots",
            value: overview.openSlots,
            detail: "Slots currently accepting registrations",
          },
          {
            label: "Registrations",
            value: overview.totalRegistrations,
            detail: `${overview.newRegistrations} still marked new`,
          },
          {
            label: "Contact inbox",
            value: overview.newContacts,
            detail: "Submissions waiting for review",
          },
        ].map((item) => (
          <Card key={item.label} className="border-black/6">
            <CardHeader>
              <CardDescription>{item.label}</CardDescription>
              <CardTitle className="text-4xl">{item.value}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {item.detail}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-black/6">
          <CardHeader className="flex flex-row items-end justify-between gap-4">
            <div>
              <CardTitle>Recent registrations</CardTitle>
              <CardDescription>
                Latest candidate bookings and their current review status.
              </CardDescription>
            </div>
            <Button asChild variant="ghost" className="rounded-full">
              <Link href="/admin/registrations">Open queue</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead>Reference</TableHead>
                  <TableHead>Opportunity</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentRegistrations.map((registration) => (
                  <TableRow key={registration.id}>
                    <TableCell className="font-medium">{registration.fullName}</TableCell>
                    <TableCell>{registration.reference}</TableCell>
                    <TableCell>{registration.openingTitle}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="rounded-full capitalize">
                        {registration.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
                {recentRegistrations.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-muted-foreground">
                      No registrations yet.
                    </TableCell>
                  </TableRow>
                ) : null}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border-black/6">
          <CardHeader className="flex flex-row items-end justify-between gap-4">
            <div>
              <CardTitle>Contact inbox</CardTitle>
              <CardDescription>
                Latest public messages submitted through the new Postgres route.
              </CardDescription>
            </div>
            <Button asChild variant="ghost" className="rounded-full">
              <Link href="/admin/contact-submissions">Open inbox</Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentContacts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border px-4 py-6 text-sm text-muted-foreground">
                No contact submissions yet.
              </div>
            ) : (
              recentContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="rounded-2xl border border-black/6 bg-background/80 px-4 py-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium text-foreground">{contact.fullName}</div>
                      <div className="text-sm text-muted-foreground">
                        {contact.inquiryType}
                        {contact.subject ? ` • ${contact.subject}` : ""}
                      </div>
                    </div>
                    <Badge variant="outline" className="rounded-full capitalize">
                      {contact.status}
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {contact.message}
                  </p>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </section>

      <Card className="border-black/6">
        <CardHeader className="flex flex-row items-end justify-between gap-4">
          <div>
            <CardTitle>Opportunity pipeline</CardTitle>
            <CardDescription>
              Current opportunities and their remaining interview capacity.
            </CardDescription>
          </div>
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/admin/opportunities">Manage</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Opportunity</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Slots</TableHead>
                <TableHead>Seats left</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {openings.map((opening) => (
                <TableRow key={opening.id}>
                  <TableCell className="font-medium">{opening.title}</TableCell>
                  <TableCell>
                    {opening.destinationCity}, {opening.destinationCountry}
                  </TableCell>
                  <TableCell>{opening.slotCount}</TableCell>
                  <TableCell>{opening.seatsLeft}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="rounded-full capitalize">
                      {opening.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
