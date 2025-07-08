import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FreshMind International - Licensed Labor Recruitment Agency Uganda",
  description:
    "Licensed labor recruitment agency connecting skilled Ugandan workers with reputable employers across Middle East and Europe. Ethical recruitment, fair wages, secure employment. MGLSD Licensed.",
  keywords:
    "Uganda jobs abroad, international employment, labor recruitment, Middle East jobs, Europe jobs, MGLSD licensed, ethical recruitment",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
