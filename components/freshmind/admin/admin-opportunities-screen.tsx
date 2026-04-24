"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { PlusCircle } from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Textarea } from "@/components/ui/textarea"
import type {
  OpportunityCardData,
  OpportunityStatus,
  Venue,
} from "@/lib/freshmind/types"

type Props = {
  opportunities: OpportunityCardData[]
  venues: Venue[]
}

const statuses: OpportunityStatus[] = ["draft", "active", "upcoming", "closed"]

function toList(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean)
}

export function AdminOpportunitiesScreen({ opportunities, venues }: Props) {
  const router = useRouter()
  const [isCreating, setIsCreating] = useState(false)
  const [slotDialogOpportunityId, setSlotDialogOpportunityId] = useState<string | null>(
    null
  )

  const selectedOpportunity = useMemo(
    () =>
      opportunities.find((opportunity) => opportunity.id === slotDialogOpportunityId) ||
      null,
    [opportunities, slotDialogOpportunityId]
  )

  async function refreshWithToast(message: string) {
    toast.success(message)
    router.refresh()
  }

  return (
    <div className="space-y-8">
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <Badge variant="outline" className="rounded-full px-3 py-1">
            Opportunities
          </Badge>
          <h1 className="text-3xl font-semibold tracking-[-0.03em] text-foreground">
            Manage openings and publish interview slots.
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
            Create new opportunities, update visibility states, and attach location-based
            interview slots from the admin app shell.
          </p>
        </div>
      </section>

      <Card className="border-black/6">
        <CardHeader>
          <CardTitle>Create opportunity</CardTitle>
          <CardDescription>
            New opportunities are created in draft mode and can be published from the table below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="grid gap-4"
            onSubmit={async (event) => {
              event.preventDefault()
              const form = event.currentTarget
              setIsCreating(true)

              const formData = new FormData(form)

              try {
                const response = await fetch("/api/admin/opportunities", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({
                    title: String(formData.get("title") || ""),
                    category: String(formData.get("category") || ""),
                    summary: String(formData.get("summary") || ""),
                    destinationCountry: String(formData.get("destinationCountry") || ""),
                    destinationCity: String(formData.get("destinationCity") || ""),
                    employer: String(formData.get("employer") || ""),
                    salaryRange: String(formData.get("salaryRange") || ""),
                    openingsCount: Number(formData.get("openingsCount") || 0),
                    closingDate: String(formData.get("closingDate") || ""),
                    benefits: toList(String(formData.get("benefits") || "")),
                    requirements: toList(String(formData.get("requirements") || "")),
                    documents: toList(String(formData.get("documents") || "")),
                  }),
                })

                const data = (await response.json().catch(() => null)) as
                  | { error?: string }
                  | null

                if (!response.ok) {
                  toast.error(data?.error || "Unable to create opportunity.")
                  return
                }

                form.reset()
                await refreshWithToast("Opportunity created in draft mode.")
              } catch {
                toast.error("Unable to create opportunity.")
              } finally {
                setIsCreating(false)
              }
            }}
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="space-y-2 xl:col-span-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  name="category"
                  required
                  className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  <option value="">Select category</option>
                  {[
                    "security",
                    "transport",
                    "hospitality",
                    "construction",
                    "healthcare",
                    "retail",
                  ].map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="openingsCount">Openings count</Label>
                <Input
                  id="openingsCount"
                  name="openingsCount"
                  type="number"
                  min="1"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destinationCountry">Destination country</Label>
                <Input id="destinationCountry" name="destinationCountry" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destinationCity">Destination city</Label>
                <Input id="destinationCity" name="destinationCity" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employer">Employer</Label>
                <Input id="employer" name="employer" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salaryRange">Salary range</Label>
                <Input id="salaryRange" name="salaryRange" required />
              </div>
              <div className="space-y-2 md:col-span-2 xl:col-span-4">
                <Label htmlFor="summary">Summary</Label>
                <Textarea id="summary" name="summary" rows={4} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="closingDate">Closing date</Label>
                <Input id="closingDate" name="closingDate" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="benefits">Benefits</Label>
                <Textarea id="benefits" name="benefits" rows={4} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea id="requirements" name="requirements" rows={4} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="documents">Documents</Label>
                <Textarea id="documents" name="documents" rows={4} />
              </div>
            </div>
            <Button type="submit" className="mt-2 w-full rounded-full md:w-auto" disabled={isCreating}>
              {isCreating ? "Saving..." : "Create opportunity"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="border-black/6">
        <CardHeader>
          <CardTitle>Current opportunities</CardTitle>
          <CardDescription>
            Update statuses and publish new slots into the public registration flow.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Opportunity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Seats left</TableHead>
                <TableHead>Slots</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {opportunities.map((opportunity) => (
                <TableRow key={opportunity.id}>
                  <TableCell>
                    <div className="font-medium">{opportunity.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {opportunity.employer}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      defaultValue={opportunity.status}
                      onValueChange={async (status) => {
                        const response = await fetch(
                          `/api/admin/opportunities/${opportunity.id}`,
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
                          toast.error(data.error || "Unable to update opportunity.")
                          return
                        }

                        await refreshWithToast("Opportunity status updated.")
                      }}
                    >
                      <SelectTrigger className="w-[150px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {statuses.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    {opportunity.destinationCity}, {opportunity.destinationCountry}
                  </TableCell>
                  <TableCell>{opportunity.seatsLeft}</TableCell>
                  <TableCell>{opportunity.slotCount}</TableCell>
                  <TableCell className="text-right">
                    <Dialog
                      open={slotDialogOpportunityId === opportunity.id}
                      onOpenChange={(open) =>
                        setSlotDialogOpportunityId(open ? opportunity.id : null)
                      }
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-full"
                          onClick={() => setSlotDialogOpportunityId(opportunity.id)}
                        >
                          <PlusCircle className="h-4 w-4" />
                          Publish slot
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Publish interview slot</DialogTitle>
                          <DialogDescription>
                            Add a new interview slot for {selectedOpportunity?.title}.
                          </DialogDescription>
                        </DialogHeader>
                        <form
                          className="space-y-4"
                          onSubmit={async (event) => {
                            event.preventDefault()

                            const formData = new FormData(event.currentTarget)
                            const response = await fetch(
                              `/api/admin/opportunities/${opportunity.id}/slots`,
                              {
                                method: "POST",
                                headers: {
                                  "content-type": "application/json",
                                },
                                body: JSON.stringify({
                                  venueId: String(formData.get("venueId") || ""),
                                  date: String(formData.get("date") || ""),
                                  startTime: String(formData.get("startTime") || ""),
                                  endTime: String(formData.get("endTime") || ""),
                                  capacity: Number(formData.get("capacity") || 0),
                                  note: String(formData.get("note") || ""),
                                }),
                              }
                            )

                            const data = await response.json()
                            if (!response.ok) {
                              toast.error(data.error || "Unable to publish slot.")
                              return
                            }

                            setSlotDialogOpportunityId(null)
                            await refreshWithToast("Interview slot published.")
                          }}
                        >
                          <div className="space-y-2">
                            <Label htmlFor={`venue-${opportunity.id}`}>Venue</Label>
                            <select
                              id={`venue-${opportunity.id}`}
                              name="venueId"
                              required
                              className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm"
                            >
                              <option value="">Select venue</option>
                              {venues.map((venue) => (
                                <option key={venue.id} value={venue.id}>
                                  {venue.name} • {venue.city}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor={`date-${opportunity.id}`}>Date</Label>
                              <Input id={`date-${opportunity.id}`} name="date" type="date" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`capacity-${opportunity.id}`}>Capacity</Label>
                              <Input
                                id={`capacity-${opportunity.id}`}
                                name="capacity"
                                type="number"
                                min="1"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`start-${opportunity.id}`}>Start time</Label>
                              <Input
                                id={`start-${opportunity.id}`}
                                name="startTime"
                                type="time"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`end-${opportunity.id}`}>End time</Label>
                              <Input
                                id={`end-${opportunity.id}`}
                                name="endTime"
                                type="time"
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`note-${opportunity.id}`}>Slot note</Label>
                            <Textarea id={`note-${opportunity.id}`} name="note" rows={3} required />
                          </div>
                          <Button type="submit" className="w-full rounded-full">
                            Publish slot
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
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
