import "server-only"

import { redirect } from "next/navigation"

import { auth } from "@/auth"

export async function getAdminSession() {
  const session = await auth()
  if (!session?.user?.email) {
    return null
  }

  return {
    id: session.user.id,
    email: session.user.email,
    role: session.user.role,
  }
}

export async function requireAdminSession() {
  const session = await getAdminSession()
  if (!session) {
    redirect("/admin/login")
  }

  return session
}

export function getEnvironmentLabel() {
  return process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production"
    ? "Production"
    : "Local"
}

