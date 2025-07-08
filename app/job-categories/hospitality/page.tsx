// pages/hospitality-jobs.tsx
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactBanner } from "@/components/ui/contact-banner"
import { Utensils, Building, Sparkles, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HospitalityJobsPage() {
  const hospitalityRoles = [
    {
      title: "Hotel Worker",
      description:
        "Front desk, housekeeping, and guest services in luxury hotels and resorts.",
      salary: "UGX 1.2M – 1.8M",
      requirements: [
        "Customer service skills",
        "Basic English",
        "Professional appearance",
      ],
      icon: Building,
    },
    {
      title: "Waiter / Waitress",
      description:
        "Restaurant and hotel dining service with international cuisine experience.",
      salary: "UGX 1.3M – 2.0M",
      requirements: [
        "Food service experience",
        "Communication skills",
        "Physical stamina",
      ],
      icon: Utensils,
    },
    {
      title: "Housemaid / Cleaner",
      description:
        "Residential and commercial cleaning to the highest professional standards.",
      salary: "UGX 1.2M – 1.7M",
      requirements: ["Attention to detail", "Reliability", "Physical fitness"],
      icon: Sparkles,
    },
  ]

  const employerPartners = [
    {
      name: "Ejadah FM",
      description: "Facility management across UAE and Saudi Arabia.",
      positions: "400+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Power International FM",
      description: "Comprehensive facility & hospitality services.",
      positions: "250+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Duserv",
      description: "Premium hospitality and cleaning services provider.",
      positions: "200+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Musaned",
      description:
        "Saudi Arabia’s official domestic worker recruitment platform.",
      positions: "300+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
  ]

  const benefits = [
    "Free accommodation & meals",
    "Health insurance & medical coverage",
    "Annual leave & end-of-service benefits",
    "Professional training & development",
    "Safe & secure working environment",
    "Opportunities for career advancement",
  ]

  const destinations = [
    {
      country: "United Arab Emirates",
      cities: ["Dubai", "Abu Dhabi", "Sharjah"],
      flag: "🇦🇪",
      demand: "Very High",
    },
    {
      country: "Saudi Arabia",
      cities: ["Riyadh", "Jeddah", "Dammam"],
      flag: "🇸🇦",
      demand: "High",
    },
    {
      country: "Qatar",
      cities: ["Doha", "Al Rayyan"],
      flag: "🇶🇦",
      demand: "High",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative fm-gradient text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 flex items-center space-x-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <Utensils className="h-6 w-6 text-secondary-foreground" />
                </div>
                <span className="text-lg font-medium text-secondary-foreground">
                  HOSPITALITY & CLEANING
                </span>
              </div>
              <h1 className="mb-6 text-4xl lg:text-5xl font-bold leading-tight">
                Hospitality Jobs in the Middle East
              </h1>
              <p className="mb-8 leading-relaxed text-secondary-foreground/80">
                Service roles in luxury hotels, restaurants, and residences. Competitive
                salaries, provided accommodation, and growth opportunities.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/application-process"
                  className="btn-primary px-8 py-4 text-lg"
                >
                  Apply for Hospitality Jobs
                </Link>
                <Link
                  href="/application-process"
                  className="btn-secondary px-8 py-4 text-lg"
                >
                  View Requirements
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Professional hospitality worker"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Roles */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Utensils}
            subtitle="AVAILABLE POSITIONS"
            title="Hospitality Job Opportunities"
            description="Explore service roles with competitive compensation."
            centered
          />

          <div className="grid gap-8 md:grid-cols-3">
            {hospitalityRoles.map((role, idx) => (
              <Card
                key={idx}
                className="shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-1"
              >
                <CardContent className="flex flex-col p-8">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <role.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {role.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>

                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      Salary
                    </span>
                    <span className="text-sm font-semibold text-secondary">
                      {role.salary}
                    </span>
                  </div>

                  <ul className="mb-6 flex-1 space-y-2">
                    {role.requirements.map((req, j) => (
                      <li
                        key={j}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <CheckCircle className="mr-2 h-4 w-4 text-secondary flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>

                  <Link href="/application-process" className="mt-auto w-full">
                    <Button className="w-full btn-primary">Apply Now</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Partners */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeader
            icon={Building}
            subtitle="EMPLOYER PARTNERS"
            title="Leading Hospitality Companies"
            description="Work with top hospitality and facility management firms."
            centered
          />

          <div className="grid gap-8 md:grid-cols-2">
            {employerPartners.map((emp, i) => (
              <Card
                key={i}
                className="shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-1"
              >
                <CardContent className="flex flex-col items-center p-8">
                  <div className="mb-6 w-full max-w-xs">
                    <div className="relative aspect-w-4 aspect-h-3 rounded-lg bg-background shadow-inner">
                      <Image
                        src={emp.logo}
                        alt={emp.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground text-center">
                    {emp.name}
                  </h3>
                  <p className="mb-6 text-center text-muted-foreground text-sm leading-relaxed">
                    {emp.description}
                  </p>
                  <div className="mt-auto flex w-full items-center justify-between">
                    <span className="font-semibold text-secondary">
                      {emp.positions}
                    </span>
                    <Link href="/application-process">
                      <Button size="sm" className="btn-primary">
                        Apply
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner
        message="Ready to start your hospitality career abroad? Apply now for immediate opportunities"
        phoneNumber="+256 783 183 252"
      />

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="mb-6 text-4xl font-bold text-secondary-foreground">
            Begin Your Hospitality Career Today
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-secondary-foreground/90">
            Join luxury hotels and resorts across the Middle East. Competitive
            salaries, accommodation, and growth await!
          </p>
          <Link
            href="/application-process"
            className="btn-primary px-8 py-3 text-lg"
          >
            Apply for Hospitality Jobs
          </Link>
        </div>
      </section>
    </div>
  )
}
