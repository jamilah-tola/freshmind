/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/employers",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/salary-benefits",
        destination: "/opportunities",
        permanent: true,
      },
      {
        source: "/safety",
        destination: "/why-freshmind",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/how-it-works",
        destination: "/opportunities/book",
        permanent: true,
      },
      {
        source: "/application-process",
        destination: "/opportunities/book",
        permanent: true,
      },
      {
        source: "/success-stories",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/job-categories",
        destination: "/opportunities",
        permanent: true,
      },
      {
        source: "/job-categories/:slug",
        destination: "/opportunities",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
