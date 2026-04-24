import type React from "react"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { PreFooterCta } from "@/components/layout/pre-footer-cta"
import { absoluteUrl, configuredSocialLinks, siteConfig } from "@/lib/site"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logoPath),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: absoluteUrl("/opengraph-image"),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postal,
      addressCountry: siteConfig.address.country,
    },
    areaServed: ["Uganda", "United Arab Emirates", "Qatar", "Saudi Arabia", "Jordan", "Poland"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        availableLanguage: ["English"],
        areaServed: "UG",
      },
    ],
    sameAs: configuredSocialLinks.length > 0 ? configuredSocialLinks : undefined,
  }
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }

  return (
    <>
      <a href="#site-main" className="skip-link">
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
        }}
      />
      <Header />
      <div id="site-main">{children}</div>
      <PreFooterCta />
      <Footer />
    </>
  )
}
