import type { Metadata, Viewport } from "next"
import type React from "react"
import { Inter_Tight, Manrope } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { absoluteUrl, siteConfig } from "@/lib/site"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Freshmind International | Verified Overseas Jobs and Interview Registration",
    template: "%s | Freshmind International",
  },
  description: siteConfig.description,
  keywords:
    "Uganda jobs abroad, interview registration, ethical recruitment Uganda, MGLSD licensed recruitment agency, overseas jobs Uganda, Freshmind International",
  applicationName: siteConfig.name,
  category: "employment",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Freshmind International",
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
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postal,
      addressCountry: siteConfig.address.country,
    },
    areaServed: "Uganda",
    sameAs: Object.values(siteConfig.social),
  }

  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${interTight.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
