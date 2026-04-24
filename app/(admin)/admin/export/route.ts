import { NextResponse } from "next/server"

import { getAdminSession } from "@/lib/freshmind/auth"
import { getRepository } from "@/lib/freshmind/repository"

function escapeCsv(value: string | undefined) {
  const safe = value || ""
  return `"${safe.replace(/"/g, '""')}"`
}

export async function GET() {
  const session = await getAdminSession()
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  const repository = getRepository()
  const registrations = await repository.listRegistrations()

  const header = [
    "reference",
    "full_name",
    "phone",
    "district",
    "email",
    "opening",
    "venue",
    "slot",
    "status",
    "created_at",
  ]

  const rows = registrations.map((registration) =>
    [
      registration.reference,
      registration.fullName,
      registration.phone,
      registration.district,
      registration.email || "",
      registration.openingTitle,
      `${registration.venueName} (${registration.venueCity})`,
      registration.slotLabel,
      registration.status,
      registration.createdAt,
    ]
      .map((value) => escapeCsv(value))
      .join(",")
  )

  return new NextResponse([header.join(","), ...rows].join("\n"), {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": 'attachment; filename="freshmind-registrations.csv"',
    },
  })
}
