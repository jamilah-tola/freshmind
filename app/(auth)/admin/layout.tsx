import type React from "react"

export default function AdminAuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(130,186,51,0.18),_transparent_45%),linear-gradient(180deg,#f7fbef_0%,#ffffff_40%,#f8fafc_100%)]">
      {children}
    </div>
  )
}

