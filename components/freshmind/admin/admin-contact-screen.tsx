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
import type { ContactSubmission } from "@/lib/freshmind/types"

type Props = {
  contactSubmissions: ContactSubmission[]
}

export function AdminContactScreen({ contactSubmissions }: Props) {
  const router = useRouter()

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <Badge variant="outline" className="rounded-full px-3 py-1">
          Contact Inbox
        </Badge>
        <h1 className="text-3xl font-semibold tracking-[-0.03em] text-foreground">
          Triage public questions inside the admin dashboard.
        </h1>
        <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
          Contact submissions move through a simple internal workflow: new, reviewed,
          replied, or archived.
        </p>
      </section>

      <div className="grid gap-5">
        {contactSubmissions.length === 0 ? (
          <Card className="border-dashed border-border">
            <CardContent className="pt-6 text-sm text-muted-foreground">
              No contact submissions yet.
            </CardContent>
          </Card>
        ) : (
          contactSubmissions.map((submission) => (
            <Card key={submission.id} className="border-black/6">
              <CardHeader className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <CardTitle>{submission.fullName}</CardTitle>
                  <CardDescription>
                    {submission.inquiryType}
                    {submission.subject ? ` • ${submission.subject}` : ""}
                    {submission.email ? ` • ${submission.email}` : ""}
                  </CardDescription>
                </div>
                <Select
                  defaultValue={submission.status}
                  onValueChange={async (status) => {
                    const response = await fetch(
                      `/api/admin/contact-submissions/${submission.id}`,
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
                      toast.error(data.error || "Unable to update contact submission.")
                      return
                    }

                    toast.success("Contact submission status updated.")
                    router.refresh()
                  }}
                >
                  <SelectTrigger className="w-[170px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {["new", "reviewed", "replied", "archived"].map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>{submission.message}</p>
                <div className="text-xs">
                  {submission.phone}
                  {submission.registrationReference
                    ? ` • Ref ${submission.registrationReference}`
                    : ""}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

