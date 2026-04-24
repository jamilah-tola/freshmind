import { AdminContactScreen } from "@/components/freshmind/admin/admin-contact-screen"
import { getRepository } from "@/lib/freshmind/repository"
import { buildMetadata } from "@/lib/site"

export const dynamic = "force-dynamic"

export const metadata = buildMetadata({
  title: "Admin Contact Inbox",
  description: "Review and update Freshmind public contact submissions.",
  path: "/admin/contact-submissions",
})

export default async function AdminContactSubmissionsPage() {
  const repository = getRepository()
  const contactSubmissions = await repository.listContactSubmissions()

  return <AdminContactScreen contactSubmissions={contactSubmissions} />
}
