import { getAdminSession } from "@/lib/freshmind/auth"

export async function requireAdminApiSession() {
  return getAdminSession()
}

