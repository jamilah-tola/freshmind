// pages/job-categories.tsx
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactBanner } from "@/components/ui/contact-banner"
import {
  Shield,
  Car,
  Utensils,
  HardHat,
  Heart,
  ShoppingBag,
  Users,
  DollarSign,
  MapPin,
  Clock,
  Building,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function JobCategoriesPage() {
  const jobCategories = [
    {
      icon: Shield,
      title: "Security Services",
      description: "High-demand security positions with leading companies across the Middle East",
      salaryRange: "UGX 1.5M - 2.5M",
      jobs: ["Security Guards", "Surveillance Officers", "VIP Protection", "Access Control"],
      companies: ["G4S", "AMNCO Security", "Certis", "Rangers Security"],
      countries: ["UAE", "Qatar", "Saudi Arabia"],
      image: "/placeholder.svg?height=300&width=400",
      href: "/job-categories/security",
    },
    {
      icon: Car,
      title: "Transport & Logistics",
      description: "Professional driving and logistics positions in rapidly growing urban centers",
      salaryRange: "UGX 1.8M - 2.9M",
      jobs: ["Taxi Drivers", "Bus Drivers", "Baggage Handlers", "Delivery Drivers"],
      companies: ["Emirates Taxi", "Mowasalat Qatar", "Elitzam Group"],
      countries: ["UAE", "Qatar", "Jordan"],
      image: "/placeholder.svg?height=300&width=400",
      href: "/job-categories/transport",
    },
    {
      icon: Utensils,
      title: "Hospitality & Cleaning",
      description: "Service industry positions in hotels, restaurants, and facility management",
      salaryRange: "UGX 1.2M - 2.0M",
      jobs: ["Hotel Workers", "Waiters", "Housemaids", "Cleaners"],
      companies: ["Ejadah FM", "Power International", "Duserv", "Musaned"],
      countries: ["UAE", "Saudi Arabia", "Qatar"],
      image: "/placeholder.svg?height=300&width=400",
      href: "/job-categories/hospitality",
    },
    {
      icon: HardHat,
      title: "Construction & Skilled Work",
      description: "Skilled trades and construction positions with major infrastructure projects",
      salaryRange: "UGX 1.5M - 2.7M",
      jobs: ["Carpenters", "Plumbers", "Electricians", "Construction Workers"],
      companies: ["Infracare", "QatarGas", "Major Construction Firms"],
      countries: ["UAE", "Qatar", "Saudi Arabia"],
      image: "/placeholder.svg?height=300&width=400",
      href: "/job-categories/construction",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Medical and caregiving positions in hospitals and healthcare facilities",
      salaryRange: "UGX 2.0M - 3.5M",
      jobs: ["Nurses", "Caregivers", "Medical Assistants", "Healthcare Support"],
      companies: ["Hospitals", "Private Clinics", "Healthcare Centers"],
      countries: ["UAE", "Saudi Arabia", "Qatar"],
      image: "/placeholder.svg?height=300&width=400",
      href: "/job-categories/healthcare",
    },
    {
      icon: ShoppingBag,
      title: "Retail & Customer Service",
      description: "Customer-facing positions in shopping centers and retail establishments",
      salaryRange: "UGX 1.3M - 2.2M",
      jobs: ["Cashiers", "Sales Executives", "Store Assistants", "Customer Service"],
      companies: ["Etisalat", "Trust Bridge", "Major Retail Chains"],
      countries: ["UAE", "Qatar", "Poland"],
      image: "/placeholder.svg?height=300&width=400",
      href: "/job-categories/retail",
    },
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salaries",
      description:
        "Monthly salaries ranging from UGX 1.2M to 3.5M depending on role and experience",
    },
    {
      icon: Building,
      title: "Free Accommodation",
      description: "Company-provided housing or housing allowance included in most positions",
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive medical coverage and emergency healthcare assistance",
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Free transport to and from work, or transportation allowance",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative fm-gradient text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold">Job Categories</h1>
            <p className="text-xl leading-relaxed text-secondary-foreground/80">
              Explore diverse employment opportunities across multiple industries with competitive salaries,
              comprehensive benefits, and career growth potential in top international destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Users}
            subtitle="EMPLOYMENT OPPORTUNITIES"
            title="High-Demand Job Categories"
            description="Discover your ideal career path with our diverse range of international employment opportunities."
            centered
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {jobCategories.map((cat, i) => (
              <Card
                key={i}
                className="hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <cat.icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="badge-salary">{cat.salaryRange}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-bold text-foreground">
                      {cat.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>

                    <div className="mb-6 space-y-4">
                      <div>
                        <h4 className="mb-2 flex items-center font-semibold text-foreground">
                          <Users className="mr-2 w-4 h-4 text-secondary" />
                          Available Positions
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cat.jobs.map((job, idx) => (
                            <span
                              key={idx}
                              className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                            >
                              {job}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-2 flex items-center font-semibold text-foreground">
                          <MapPin className="mr-2 w-4 h-4 text-secondary" />
                          Destinations
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cat.countries.map((ct, idx) => (
                            <span
                              key={idx}
                              className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                            >
                              {ct}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link href={cat.href}>
                      <Button className="w-full btn-primary">
                        View Details & Apply
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeader
            icon={Heart}
            subtitle="EMPLOYMENT BENEFITS"
            title="Comprehensive Benefits Package"
            description="All positions come with competitive compensation and comprehensive benefits to ensure your success abroad."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <Card
                key={i}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <b.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">
                    {b.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner
        message="Ready to explore international job opportunities? Contact us to discuss your career goals"
        phoneNumber="+256 783 183 252"
      />
    </div>
  )
}
