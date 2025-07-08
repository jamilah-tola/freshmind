// pages/security-jobs.tsx
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactBanner } from "@/components/ui/contact-banner"
import { Shield, Eye, UserCheck, CheckCircle, Building, MapPin, Users, Award } from "lucide-react"

export default function SecurityJobsPage() {
  const securityRoles = [
    {
      title: "Security Guard",
      description:
        "Protect properties, monitor access, and ensure safety in commercial and residential settings.",
      salary: "UGX 1.5M – 2.2M",
      requirements: ["Basic security training", "Physical fitness", "Good communication"],
      icon: Shield,
    },
    {
      title: "Surveillance Officer",
      description:
        "Monitor CCTV systems, control access points, and maintain strict security protocols.",
      salary: "UGX 1.8M – 2.5M",
      requirements: ["CCTV operation skills", "Attention to detail", "Report writing"],
      icon: Eye,
    },
    {
      title: "VIP Protection Officer",
      description:
        "Provide personal security for high-profile clients with discretion and professionalism.",
      salary: "UGX 2.0M – 2.8M",
      requirements: ["Advanced security training", "Excellent fitness", "Discretion"],
      icon: UserCheck,
    },
  ]

  const employerPartners = [
    {
      name: "G4S",
      description: "Global security leader with operations across UAE, Qatar, and Saudi Arabia.",
      positions: "500+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "AMNCO Security",
      description: "Top security services provider in the Middle East region.",
      positions: "200+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Certis",
      description: "Integrated security solutions company with an international footprint.",
      positions: "150+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Rangers Security",
      description: "Professional security services for commercial and residential clients.",
      positions: "100+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
  ]

  const benefits = [
    "Free accommodation in company housing",
    "Health insurance and medical coverage",
    "Free transport to and from work",
    "Overtime pay opportunities",
    "Annual leave & end-of-service benefits",
    "Professional security training provided",
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
      country: "Saudi Arabia",
      cities: ["Riyadh", "Jeddah", "Dammam"],
      flag: "🇸🇦",
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
                  <Shield className="h-6 w-6 text-secondary-foreground" />
                </div>
                <span className="text-lg font-medium text-secondary-foreground">
                  SECURITY SERVICES
                </span>
              </div>
              <h1 className="mb-6 text-4xl lg:text-5xl font-bold leading-tight">
                Security Jobs in the Middle East
              </h1>
              <p className="mb-8 leading-relaxed text-secondary-foreground/80">
                High-demand security roles with top international companies. Competitive salaries,
                comprehensive benefits, and professional growth opportunities.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/application-process"
                  className="btn-primary px-8 py-4 text-lg"
                >
                  Apply for Security Jobs
                </Link>
                <Link
                  href="/application-process"
                  className="btn-secondary px-8 py-4 text-lg"
                >
                  Download Job Guide
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Professional security officer"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Roles */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Shield}
            subtitle="AVAILABLE POSITIONS"
            title="Security Job Opportunities"
            description="Explore various security roles with competitive salaries and growth potential."
            centered
          />

          <div className="grid gap-8 md:grid-cols-3">
            {securityRoles.map((role, idx) => (
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
            title="Leading Security Companies"
            description="Partner with top security firms offering excellent career paths."
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

      {/* Destinations */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={MapPin}
            subtitle="WORK DESTINATIONS"
            title="Security Jobs by Country"
            description="Explore in-demand security roles across the Middle East."
            centered
          />
          <div className="grid gap-8 md:grid-cols-3">
            {destinations.map((d, i) => (
              <Card
                key={i}
                className="text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="mb-4 text-6xl">{d.flag}</div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {d.country}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Major Cities:
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2 justify-center">
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
                    <Users className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-semibold text-secondary">
                      Demand: {d.demand}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Requirements */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeader
                icon={Award}
                subtitle="EMPLOYMENT BENEFITS"
                title="What You’ll Receive"
                description="Comprehensive benefits package for all security roles."
              />
              <div className="space-y-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                icon={Users}
                subtitle="REQUIREMENTS"
                title="Security Job Requirements"
                description="Essential qualifications for all security positions."
              />
              <Card>
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">
                      Basic Requirements
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Age: 21–40 years</li>
                      <li>Minimum O-Level education</li>
                      <li>Good physical fitness</li>
                      <li>Clean criminal record</li>
                      <li>Basic English communication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">
                      Preferred Qualifications
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Previous security experience</li>
                      <li>Security training certification</li>
                      <li>First aid certification</li>
                      <li>Military or police background</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner
        message="Ready to start your security career abroad? Apply now for immediate consideration"
        phoneNumber="+256 783 183 252"
      />

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="mb-6 text-4xl font-bold text-secondary-foreground">
            Start Your Security Career Today
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-secondary-foreground/90">
            Join thousands of Ugandan security professionals working with top
            international companies. Competitive salaries, benefits, and growth
            opportunities await you.
          </p>
          <Link href="/application-process" className="btn-primary px-8 py-3 text-lg">
            Apply for Security Jobs
          </Link>
        </div>
      </section>
    </div>
  )
}
