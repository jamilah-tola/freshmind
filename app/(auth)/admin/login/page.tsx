import { redirect } from "next/navigation"
import { ShieldCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { adminLoginAction } from "@/lib/freshmind/actions"
import { getAdminSession } from "@/lib/freshmind/auth"
import { buildMetadata } from "@/lib/site"

type Props = {
  searchParams: Promise<{ error?: string }>
}

export const metadata = buildMetadata({
  title: "Admin Login",
  description:
    "Admin sign-in for managing Freshmind openings, interview slots, registrations, and contact submissions.",
  path: "/admin/login",
})

export default async function AdminLoginPage({ searchParams }: Props) {
  const session = await getAdminSession()
  if (session) {
    redirect("/admin")
  }

  const { error } = await searchParams

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-16 sm:px-6">
      <div className="grid w-full gap-8 lg:grid-cols-[1fr_420px]">
        <div className="rounded-[2rem] border border-black/6 bg-white/70 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-primary">
            Internal access
          </Badge>
          <h1 className="mt-6 max-w-[12ch] text-[clamp(2.5rem,4vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-foreground">
            Run the recruiting engine behind Freshmind.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            This dashboard is for publishing openings, releasing interview slots,
            reviewing candidate registrations, and triaging inbound contact submissions.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              "Postgres-backed opportunity data",
              "Cloudinary document metadata on registrations",
              "Auth.js credentials sessions for staff access",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/6 bg-background/80 px-4 py-4 text-sm text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <Card className="border-black/8 bg-white/90 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>Freshmind Admin</CardTitle>
                <CardDescription>Use your seeded internal credentials.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {error ? (
              <div className="mb-5 rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            ) : null}
            <form action={adminLoginAction} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full rounded-full">
                Sign in to admin
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

