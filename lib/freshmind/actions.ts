"use server"

import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

import { signIn, signOut } from "@/auth"

export async function adminLoginAction(formData: FormData) {
  try {
    await signIn("credentials", {
      email: String(formData.get("email") || ""),
      password: String(formData.get("password") || ""),
      redirectTo: "/admin",
    })
  } catch (error) {
    if (error instanceof AuthError) {
      redirect(
        `/admin/login?error=${encodeURIComponent(
          "The admin credentials did not match a seeded account."
        )}`
      )
    }

    throw error
  }
}

export async function adminLogoutAction() {
  await signOut({
    redirectTo: "/admin/login",
  })
}

