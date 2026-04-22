import Link from "next/link"
import { redirect } from "next/navigation"

import { PageIntro } from "@/components/site/page-intro"
import { Button } from "@/components/ui/button"
import { adminLoginAction } from "@/lib/freshmind/actions"
import { getAdminSession, localAdminDefaults } from "@/lib/freshmind/auth"
import { buildMetadata } from "@/lib/site"
import { hasSupabaseEnv } from "@/lib/supabase/server"

type Props = {
  searchParams: Promise<{ error?: string }>
}

export const metadata = buildMetadata({
  title: "Admin Login",
  description:
    "Admin sign-in for managing Freshmind openings, interview slots, and registrations.",
  path: "/admin/login",
})

export default async function AdminLoginPage({ searchParams }: Props) {
  const session = await getAdminSession()
  if (session) {
    redirect("/admin")
  }

  const { error } = await searchParams
  const localDefaults = localAdminDefaults()
  const usingSupabase = hasSupabaseEnv()

  return (
    <main>
      <PageIntro
        eyebrow="Admin"
        title="Manage the recruitment engine behind the public site."
        description="This admin is used to publish opportunities, release interview slots, review registrations, and track candidate outcomes."
        align="center"
      />

      <section className="container py-14 sm:py-16">
        <div className="mx-auto max-w-xl surface-card p-8">
          <h2 className="text-2xl font-semibold text-primary">Admin sign in</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Use your authorized Freshmind staff credentials to access openings,
            schedules, and registration records.
          </p>
          {error ? (
            <div className="mt-4 rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          ) : null}
          {!usingSupabase ? (
            <div className="mt-4 rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3 text-sm text-primary">
              Demo mode is active. Use <strong>{localDefaults.email}</strong> and{" "}
              <strong>{localDefaults.password}</strong> until Supabase admin auth is
              configured.
            </div>
          ) : null}

          <form action={adminLoginAction} className="mt-6 space-y-5">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-primary">Email</span>
              <input
                name="email"
                type="email"
                required
                defaultValue={!usingSupabase ? localDefaults.email : ""}
                className="h-11 w-full rounded-2xl border border-input bg-background px-4"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-primary">Password</span>
              <input
                name="password"
                type="password"
                required
                defaultValue={!usingSupabase ? localDefaults.password : ""}
                className="h-11 w-full rounded-2xl border border-input bg-background px-4"
              />
            </label>
            <Button type="submit" className="w-full rounded-full bg-primary text-primary-foreground">
              Sign in to admin
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <Link href="/" className="font-medium text-primary hover:underline">
              Return to public site
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
