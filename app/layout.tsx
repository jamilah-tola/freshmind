import type { Metadata, Viewport } from "next"
import type React from "react"
import { IBM_Plex_Sans, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { absoluteUrl, siteConfig } from "@/lib/site"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-secondary",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Jobs Abroad for Ugandans | Freshmind International",
    template: "%s | Freshmind International",
  },
  description: siteConfig.description,
  keywords: [
    "jobs abroad for Ugandans",
    "licensed recruitment agency Uganda",
    "verified jobs abroad Uganda",
    "overseas jobs Uganda",
    "work abroad Uganda",
    "Dubai jobs for Ugandans",
    "Qatar jobs for Ugandans",
    "Saudi jobs for Ugandans",
    "ethical recruitment Uganda",
    "Freshmind International",
  ],
  applicationName: siteConfig.name,
  category: "employment",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jobs Abroad for Ugandans | Freshmind International",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [absoluteUrl("/opengraph-image")],
  },
}

export const viewport: Viewport = {
  themeColor: siteConfig.brandColor,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${ibmPlexSans.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
