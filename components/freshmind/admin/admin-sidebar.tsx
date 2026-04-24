"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  BriefcaseBusiness,
  Inbox,
  LayoutDashboard,
  UsersRound,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const navigation = [
  {
    href: "/admin",
    label: "Overview",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/opportunities",
    label: "Opportunities",
    icon: BriefcaseBusiness,
  },
  {
    href: "/admin/registrations",
    label: "Registrations",
    icon: UsersRound,
  },
  {
    href: "/admin/contact-submissions",
    label: "Contact inbox",
    icon: Inbox,
  },
] as const

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border px-2 py-4">
        <div className="flex items-center gap-3 rounded-xl bg-sidebar-accent/60 px-3 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div className="min-w-0 group-data-[collapsible=icon]:hidden">
            <div className="truncate text-sm font-semibold">Freshmind Admin</div>
            <div className="truncate text-xs text-sidebar-foreground/70">
              Internal operations dashboard
            </div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2 py-4">
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border px-3 py-4 text-xs text-sidebar-foreground/70 group-data-[collapsible=icon]:hidden">
        Protected with Auth.js credentials sessions
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

