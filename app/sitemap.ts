import type { MetadataRoute } from "next"

import { getRepository } from "@/lib/freshmind/repository"
import { absoluteUrl } from "@/lib/site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const repository = getRepository()
  const openings = await repository.listPublicOpenings()
  const staticRoutes = [
    "/",
    "/opportunities",
    "/how-it-works",
    "/why-freshmind",
    "/success-stories",
    "/safety",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/services",
    "/job-categories",
  ]

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: new Date(),
    })),
    ...openings.map((opening) => ({
      url: absoluteUrl(`/opportunities/${opening.slug}`),
      lastModified: new Date(opening.postedDate),
    })),
  ]
}
