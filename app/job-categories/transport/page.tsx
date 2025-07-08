// app/job-categories/transport/page.tsx
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactBanner } from "@/components/ui/contact-banner"
import { Car, Truck, Plane, CheckCircle, Building, MapPin } from "lucide-react"

export default function TransportJobsPage() {
  const transportRoles = [
    {
      title: "Taxi Driver",
      description:
        "Professional taxi driving in major cities with modern fleet vehicles",
      salary: "UGX 1.8M – 2.5M",
      requirements: [
        "Valid driving license",
        "3+ years experience",
        "Good navigation skills",
      ],
      icon: Car,
    },
    {
      title: "Bus Driver",
      description:
        "Public transport and tour bus driving with established transport companies",
      salary: "UGX 2.0M – 2.9M",
      requirements: [
        "Heavy vehicle license",
        "5+ years experience",
        "Clean driving record",
      ],
      icon: Truck,
    },
    {
      title: "Baggage Handler",
      description:
        "Airport baggage handling and logistics support at international airports",
      salary: "UGX 1.5M – 2.2M",
      requirements: [
        "Physical fitness",
        "Airport security clearance",
        "Team work skills",
      ],
      icon: Plane,
    },
  ]

  const employerPartners = [
    {
      name: "Emirates Taxi",
      description:
        "Leading taxi service provider in Dubai and Abu Dhabi with modern fleet",
      positions: "300+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Mowasalat Qatar",
      description:
        "Qatar's national transport company operating buses and taxis",
      positions: "200+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Elitzam Group",
      description: "International logistics and transport solutions provider",
      positions: "150+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
  ]

  const benefits = [
    "Company vehicle provided for work",
    "Fuel and maintenance covered by employer",
    "Health insurance and medical coverage",
    "Free accommodation or housing allowance",
    "Performance bonuses and incentives",
    "Professional driving training provided",
  ]

  const destinations = [
    {
      country: "United Arab Emirates",
      cities: ["Dubai", "Abu Dhabi", "Sharjah"],
      flag: "🇦🇪",
      demand: "Very High",
    },
    {
      country: "Qatar",
      cities: ["Doha", "Al Rayyan"],
      flag: "🇶🇦",
      demand: "High",
    },
    {
      country: "Jordan",
      cities: ["Amman", "Aqaba"],
      flag: "🇯🇴",
      demand: "Moderate",
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
                  <Car className="h-6 w-6 text-secondary-foreground" />
                </div>
                <span className="text-lg font-medium text-secondary-foreground">
                  TRANSPORT & LOGISTICS
                </span>
              </div>
              <h1 className="mb-6 text-4xl lg:text-5xl font-bold leading-tight">
                Transport Jobs in the Middle East
              </h1>
              <p className="mb-8 leading-relaxed text-secondary-foreground/80">
                Professional driving and logistics positions with leading transport
                companies. Excellent salaries, company vehicles, and career advancement
                opportunities.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/application-process"
                  className="btn-primary px-8 py-4 text-lg"
                >
                  Apply for Transport Jobs
                </Link>
                <Link
                  href="/application-process"
                  className="btn-secondary px-8 py-4 text-lg"
                >
                  Download Requirements
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Professional transport driver"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transport Roles */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Car}
            subtitle="AVAILABLE POSITIONS"
            title="Transport Job Opportunities"
            description="Explore different transport and logistics roles with competitive compensation."
            centered
          />

          <div className="grid gap-8 md:grid-cols-3">
            {transportRoles.map((role, idx) => (
              <Card
                key={idx}
                className="shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="flex flex-col p-8">
                  {/* Icon */}
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <role.icon className="h-8 w-8 text-secondary" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {role.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>

                  {/* Salary */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      Salary
                    </span>
                    <span className="text-sm font-semibold text-secondary">
                      {role.salary}
                    </span>
                  </div>

                  {/* Requirements */}
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

                  {/* CTA */}
                  <Link href="/application-process">
                    <Button className="mt-auto w-full btn-primary">
                      Apply Now
                    </Button>
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
            title="Leading Transport Companies"
            description="Work with established transport and logistics companies across the Middle East."
            centered
          />

          <div className="grid gap-8 md:grid-cols-3">
            {employerPartners.map((emp, idx) => (
              <Card
                key={idx}
                className="card hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardContent className="flex flex-col items-center p-8">
                  {/* Logo */}
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

                  {/* Name & Description */}
                  <h3 className="mb-2 text-xl font-bold text-foreground text-center">
                    {emp.name}
                  </h3>
                  <p className="mb-6 text-center text-muted-foreground text-sm leading-relaxed">
                    {emp.description}
                  </p>

                  {/* Positions & Action */}
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


      {/* Destinations */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={MapPin}
            subtitle="WORK DESTINATIONS"
            title="Transport Jobs by Country"
            description="Explore transport opportunities across different Middle Eastern countries."
            centered
          />
          <div className="grid gap-8 md:grid-cols-3">
            {destinations.map((d, idx) => (
              <Card
                key={idx}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="mb-4 text-6xl">{d.flag}</div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {d.country}
                  </h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Major Cities:
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {d.cities.map((c, j) => (
                      <span
                        key={j}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground">Demand:</span>
                    <span className="font-semibold text-secondary">
                      {d.demand}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner
        message="Ready to drive your career forward? Apply now for transport opportunities abroad"
        phoneNumber="+256 783 183 252"
      />
    </div>
  )
}
