import { cookies } from "next/headers"

import { createSupabaseServerAuthClient, hasSupabaseEnv } from "@/lib/supabase/server"

const adminCookieName = "fm_admin_session"

function localAdminEmail() {
  return process.env.ADMIN_EMAIL || "admin@freshmind.ug"
}

function localAdminPassword() {
  return process.env.ADMIN_PASSWORD || "freshmind-demo"
}

export async function signInAdmin(email: string, password: string) {
  if (hasSupabaseEnv()) {
    const client = await createSupabaseServerAuthClient()
    if (!client) {
      return { ok: false, error: "Supabase auth client is not configured." }
    }

    const { error } = await client.auth.signInWithPassword({ email, password })
    if (error) {
      return { ok: false, error: error.message }
    }

    return { ok: true }
  }

  if (email === localAdminEmail() && password === localAdminPassword()) {
    const cookieStore = await cookies()
    cookieStore.set(adminCookieName, "local-demo-admin", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8,
    })

    return { ok: true }
  }

  return {
    ok: false,
    error: "The admin credentials did not match the local demo account.",
  }
}

export async function signOutAdmin() {
  if (hasSupabaseEnv()) {
    const client = await createSupabaseServerAuthClient()
    if (client) {
      await client.auth.signOut()
    }
  }

  const cookieStore = await cookies()
  cookieStore.delete(adminCookieName)
}

export async function getAdminSession() {
  if (hasSupabaseEnv()) {
    const client = await createSupabaseServerAuthClient()
    if (!client) {
      return null
    }

    const {
      data: { user },
    } = await client.auth.getUser()

    if (!user) {
      return null
    }

    return {
      mode: "supabase" as const,
      email: user.email || "admin",
    }
  }

  const cookieStore = await cookies()
  const session = cookieStore.get(adminCookieName)?.value
  if (!session) {
    return null
  }

  return {
    mode: "local" as const,
    email: localAdminEmail(),
  }
}

export function localAdminDefaults() {
  return {
    email: localAdminEmail(),
    password: localAdminPassword(),
  }
}
