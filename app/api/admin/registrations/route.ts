import { NextResponse } from "next/server"

import { jsonError } from "@/lib/freshmind/api"
import { requireAdminApiSession } from "@/lib/freshmind/admin-api"
import { getRepository } from "@/lib/freshmind/repository"

export async function GET() {
  const session = await requireAdminApiSession()
  if (!session) {
    return jsonError("Unauthorized", 401)
  }

  const repository = getRepository()
  const registrations = await repository.listRegistrations()
  return NextResponse.json({ registrations })
}
