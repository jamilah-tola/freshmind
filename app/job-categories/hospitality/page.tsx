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

      
      {/* Contact Banner */}
      <ContactBanner
        message="Ready to start your hospitality career abroad? Apply now for immediate opportunities"
        phoneNumber="+256 783 183 252"
      />

    </div>
  )
}
