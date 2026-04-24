import type React from "react"

import { AdminSidebar } from "@/components/freshmind/admin/admin-sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { adminLogoutAction } from "@/lib/freshmind/actions"
import { getEnvironmentLabel, requireAdminSession } from "@/lib/freshmind/auth"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await requireAdminSession()
  const environment = getEnvironmentLabel()

  return (
    <SidebarProvider defaultOpen>
      <AdminSidebar />
      <SidebarInset className="min-h-screen bg-[linear-gradient(180deg,#f7fafc_0%,#f2f6f1_38%,#ffffff_100%)]">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6">
              <div className="flex items-center gap-3">
                <SidebarTrigger />
                <div>
                  <div className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                    Freshmind Admin
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Signed in as {session.email}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="rounded-full px-3 py-1">
                  {environment}
                </Badge>
                <form action={adminLogoutAction}>
                  <Button type="submit" variant="outline" className="rounded-full">
                    Sign out
                  </Button>
                </form>
              </div>
            </div>
          </header>
          <main className="flex-1 px-4 py-6 md:px-6 md:py-8">{children}</main>
          <footer className="border-t border-border/70 px-4 py-4 text-sm text-muted-foreground md:px-6">
            Internal dashboard for Freshmind operations.
          </footer>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

