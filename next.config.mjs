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
        destination: "/job-categories",
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
    ]
  },
}

export default nextConfig
