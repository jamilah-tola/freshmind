import type { Metadata } from "next"

export const siteConfig = {
  name: "Freshmind International",
  shortName: "Freshmind",
  description:
    "Licensed recruitment agency in Uganda connecting job seekers to verified jobs abroad in the UAE, Qatar, Saudi Arabia, Jordan, and Poland through ethical, documented hiring.",
  brandColor: "#82BA33",
  logoPath: "/brand/freshmind-logo.png",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://fresmindinternational.com",
  email: "info@freshmindinternational.com",
  phone: "+256 783 183 252",
  altPhone: "+256 704 231 665",
  whatsapp: "256783183252",
  licenseNumber: "E24050019",
  address: {
    street: "Mengo, Behind Sir Apollo Kaggwa Primary School",
    city: "Kampala",
    country: "Uganda",
    postal: "P.O. Box 5633",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  verificationLinks: {
    eemis: "https://eemis.mglsd.go.ug/",
    esmis: "https://esmis.mglsd.go.ug/",
    ilo: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and",
    wec: "https://wecglobal.org/world-employment-confederation-global/code-of-conduct-2/",
  },
} as const

export const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/contact", label: "Contact" },
]

export const footerNavigation = {
  jobSeekers: [
    { href: "/opportunities", label: "Browse openings" },
    { href: "/opportunities/book", label: "Book interview" },
    { href: "/about", label: "About Freshmind" },
    { href: "/why-freshmind", label: "Why Freshmind" },
    { href: "/contact", label: "Talk to our team" },
  ],
  employers: [
    { href: "/about", label: "About Freshmind" },
    { href: "/opportunities", label: "Current openings" },
    { href: "/contact", label: "Employer inquiry" },
  ],
  trust: [
    { href: "/why-freshmind", label: "Why Freshmind" },
    { href: "/privacy", label: "Privacy policy" },
    { href: "/terms", label: "Terms of service" },
    { href: "/contact", label: "Verify a communication" },
  ],
  legacy: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/opportunities/book", label: "Application process" },
    { href: "/opportunities", label: "Current openings" },
  ],
}

export function absoluteUrl(path = "/") {
  return path.startsWith("http") ? path : `${siteConfig.url}${path}`
}

type MetadataInput = {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/opengraph-image",
  keywords,
}: MetadataInput): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function isConfiguredSocialUrl(url: string) {
  if (!url) {
    return false
  }

  try {
    const parsed = new URL(url)
    const pathname = parsed.pathname.replace(/\/+$/, "")

    return pathname.length > 0
  } catch {
    return false
  }
}

export const configuredSocialLinks = Object.values(siteConfig.social).filter(
  isConfiguredSocialUrl
)
