"use client"

import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { RegistrationView } from "@/lib/freshmind/types"

type Props = {
  registrations: RegistrationView[]
}

export function AdminRegistrationsScreen({ registrations }: Props) {
  const router = useRouter()

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <Badge variant="outline" className="rounded-full px-3 py-1">
          Registrations
        </Badge>
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-foreground">
          Review bookings and candidate documents.
        </h1>
        <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
          Every public registration lands here with its Cloudinary metadata, slot details,
          and current shortlist status.
        </p>
      </section>

      <Card className="border-black/6">
        <CardHeader>
          <CardTitle>Candidate queue</CardTitle>
          <CardDescription>
            Update statuses as candidates move through screening and placement.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Reference</TableHead>
                <TableHead>Interview slot</TableHead>
                <TableHead>Document</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations.map((registration) => (
                <TableRow key={registration.id}>
                  <TableCell>
                    <div className="font-medium">{registration.fullName}</div>
                    <div className="text-xs text-muted-foreground">
                      {registration.phone}
                      {registration.email ? ` • ${registration.email}` : ""}
                    </div>
                  </TableCell>
                  <TableCell>{registration.reference}</TableCell>
                  <TableCell>
                    <div>{registration.openingTitle}</div>
                    <div className="text-xs text-muted-foreground">
                      {registration.venueName}, {registration.venueCity} • {registration.slotLabel}
                    </div>
                  </TableCell>
                  <TableCell>
                    {registration.document?.secureUrl ? (
                      <a
                        href={registration.document.secureUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                      >
                        {registration.document.originalFilename}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">No upload</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Select
                      defaultValue={registration.status}
                      onValueChange={async (status) => {
                        const response = await fetch(
                          `/api/admin/registrations/${registration.id}`,
                          {
                            method: "PATCH",
                            headers: {
                              "content-type": "application/json",
                            },
                            body: JSON.stringify({ status }),
                          }
                        )

                        const data = await response.json()
                        if (!response.ok) {
                          toast.error(data.error || "Unable to update registration.")
                          return
                        }

                        toast.success("Registration status updated.")
                        router.refresh()
                      }}
                    >
                      <SelectTrigger className="w-[170px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {["new", "confirmed", "shortlisted", "no-show", "placed"].map(
                          (status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
              {registrations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-muted-foreground">
                    No registrations yet.
                  </TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

