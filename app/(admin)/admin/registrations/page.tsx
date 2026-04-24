import { AdminRegistrationsScreen } from "@/components/freshmind/admin/admin-registrations-screen"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

export const dynamic = "force-dynamic"

export const metadata = buildMetadata({
  title: "Admin Registrations",
  description: "Review Freshmind candidate registrations and shortlist statuses.",
  path: "/admin/registrations",
})

export default async function AdminRegistrationsPage() {
  const repository = getRepository()
  const registrations = await repository.listRegistrations()

  return <AdminRegistrationsScreen registrations={registrations} />
}
