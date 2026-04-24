import { AdminOpportunitiesScreen } from "@/components/freshmind/admin/admin-opportunities-screen"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

export const dynamic = "force-dynamic"

export const metadata = buildMetadata({
  title: "Admin Opportunities",
  description: "Create and manage Freshmind opportunities and interview slots.",
  path: "/admin/opportunities",
})

export default async function AdminOpportunitiesPage() {
  const repository = getRepository()
  const [opportunities, venues] = await Promise.all([
    repository.listOpenings(),
    repository.listVenues(),
  ])

  return <AdminOpportunitiesScreen opportunities={opportunities} venues={venues} />
}
