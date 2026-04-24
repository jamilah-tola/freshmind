import type React from "react"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { PreFooterCta } from "@/components/layout/pre-footer-cta"
import { siteConfig } from "@/lib/site"

export default function PublicLayout({
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
    <>
      <a href="#site-main" className="skip-link">
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <Header />
      <div id="site-main">{children}</div>
      <PreFooterCta />
      <Footer />
    </>
  )
}

