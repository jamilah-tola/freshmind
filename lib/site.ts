import type { Metadata } from "next"

export const siteConfig = {
  name: "Freshmind International",
  shortName: "Freshmind",
  description:
    "Licensed ethical recruitment for Ugandan job seekers pursuing verified overseas opportunities through documented process, worker protection, and official support.",
  brandColor: "#F5582B",
  logoPath: "/brand/freshmind-logo.png",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://freshmind.ug",
  email: "careers@freshmind.ug",
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
  { href: "/about", label: "About Freshmind" },
  { href: "/contact", label: "Contact Us" },
]

export const footerNavigation = {
  jobSeekers: [
    { href: "/opportunities", label: "Browse openings" },
    { href: "/how-it-works", label: "Interview process" },
    { href: "/faq", label: "Questions before you apply" },
    { href: "/contact", label: "Talk to our team" },
  ],
  trust: [
    { href: "/why-freshmind", label: "Why Freshmind" },
    { href: "/success-stories", label: "Success stories" },
    { href: "/safety", label: "Safety & anti-scam" },
    { href: "/privacy", label: "Privacy policy" },
    { href: "/terms", label: "Terms of service" },
  ],
  legacy: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/application-process", label: "Application process" },
    { href: "/job-categories", label: "Job categories" },
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
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/opengraph-image",
}: MetadataInput): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    title,
    description,
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
