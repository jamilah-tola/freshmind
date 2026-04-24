import type { MetadataRoute } from "next"

import { absoluteUrl } from "@/lib/site"

export const dynamic = "force-dynamic"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "/",
    "/about",
    "/opportunities",
    "/opportunities/book",
    "/why-freshmind",
    "/contact",
    "/privacy",
    "/terms",
    "/services",
  ]

  return staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
  }))
}
