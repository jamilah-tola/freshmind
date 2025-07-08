import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactBanner } from "@/components/ui/contact-banner"
import { Utensils, CheckCircle, Building, Sparkles } from "lucide-react"

export default function HospitalityJobsPage() {
  const hospitalityRoles = [
    {
      title: "Hotel Worker",
      description: "Front desk, housekeeping, and guest services in luxury hotels and resorts",
      salary: "UGX 1.2M - 1.8M",
      requirements: ["Customer service skills", "Basic English", "Professional appearance"],
      icon: Building,
    },
    {
      title: "Waiter/Waitress",
      description: "Restaurant and hotel dining service with international cuisine experience",
      salary: "UGX 1.3M - 2.0M",
      requirements: ["Food service experience", "Communication skills", "Physical stamina"],
      icon: Utensils,
    },
    {
      title: "Housemaid/Cleaner",
      description: "Residential and commercial cleaning with professional standards",
      salary: "UGX 1.2M - 1.7M",
      requirements: ["Attention to detail", "Reliability", "Physical fitness"],
      icon: Sparkles,
    },
  ]

  const employerPartners = [
    {
      name: "Ejadah Facilities Management",
      description: "Leading facility management company across UAE and Saudi Arabia",
      positions: "400+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Power International FM",
      description: "Comprehensive facility management and hospitality services",
      positions: "250+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Duserv",
      description: "Premium hospitality and cleaning services provider",
      positions: "200+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Musaned",
      description: "Saudi Arabia's official domestic worker recruitment platform",
      positions: "300+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
  ]

  const benefits = [
    "Free accommodation and meals provided",
    "Health insurance and medical coverage",
    "Annual leave and end-of-service benefits",
    "Professional training and development",
    "Safe and secure working environment",
    "Opportunity for career advancement",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <span className="text-red-400 font-medium text-lg">HOSPITALITY & CLEANING</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">Hospitality Jobs in the Middle East</h1>
              <p className="text-xl mb-8 text-blue-100">
                Service industry positions in luxury hotels, restaurants, and residential settings. Competitive
                salaries, accommodation provided, and opportunities for career growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/application-process">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                    Apply for Hospitality Jobs
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  View Requirements
                </Button>
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
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Utensils}
            subtitle="AVAILABLE POSITIONS"
            title="Hospitality Job Opportunities"
            description="Explore different hospitality and service roles with competitive compensation."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            {hospitalityRoles.map((role, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <role.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{role.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Monthly Salary</span>
                      <span className="text-lg font-bold text-green-600">{role.salary}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Requirements</h4>
                    <ul className="space-y-1">
                      {role.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/application-process">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Apply Now</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Building}
            subtitle="EMPLOYER PARTNERS"
            title="Leading Hospitality Companies"
            description="Work with established hospitality and facility management companies."
            centered
          />

          <div className="grid md:grid-cols-2 gap-8">
            {employerPartners.map((employer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src={employer.logo || "/placeholder.svg"}
                        alt={employer.name}
                        width={120}
                        height={80}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{employer.name}</h3>
                      <p className="text-gray-600 mb-3 text-sm leading-relaxed">{employer.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 font-semibold">{employer.positions}</span>
                        <Link href="/application-process">
                          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                            Apply
                          </Button>
                        </Link>
                      </div>
                    </div>
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
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Begin Your Hospitality Career Today</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join the thriving hospitality industry in the Middle East with competitive salaries, accommodation provided,
            and excellent career development opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/application-process">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Apply for Hospitality Jobs
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg font-semibold bg-transparent"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
