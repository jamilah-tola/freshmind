import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactBanner } from "@/components/ui/contact-banner"
import { Shield, Users, MapPin, CheckCircle, Award, Building, Eye, UserCheck } from "lucide-react"

export default function SecurityJobsPage() {
  const securityRoles = [
    {
      title: "Security Guard",
      description: "Protect commercial and residential properties, monitor access points, and ensure safety",
      salary: "UGX 1.5M - 2.2M",
      requirements: ["Basic security training", "Physical fitness", "Good communication"],
      icon: Shield,
    },
    {
      title: "Surveillance Officer",
      description: "Monitor CCTV systems, control access, and maintain security protocols",
      salary: "UGX 1.8M - 2.5M",
      requirements: ["CCTV operation skills", "Attention to detail", "Report writing"],
      icon: Eye,
    },
    {
      title: "VIP Protection Officer",
      description: "Provide personal security for high-profile individuals and executives",
      salary: "UGX 2.0M - 2.8M",
      requirements: ["Advanced security training", "Excellent fitness", "Discretion"],
      icon: UserCheck,
    },
  ]

  const employerPartners = [
    {
      name: "G4S",
      description: "Global security company with operations across UAE, Qatar, and Saudi Arabia",
      positions: "500+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "AMNCO Security",
      description: "Leading security services provider in the Middle East region",
      positions: "200+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Certis",
      description: "Integrated security solutions company with international presence",
      positions: "150+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Rangers Security",
      description: "Professional security services across commercial and residential sectors",
      positions: "100+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
  ]

  const benefits = [
    "Free accommodation in company housing",
    "Health insurance and medical coverage",
    "Free transportation to and from work",
    "Overtime pay opportunities",
    "Annual leave and end-of-service benefits",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-red-400 font-medium text-lg">SECURITY SERVICES</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">Security Jobs in the Middle East</h1>
              <p className="text-xl mb-8 text-blue-100">
                High-demand security positions with leading international companies. Competitive salaries, comprehensive
                benefits, and professional growth opportunities in UAE, Qatar, and Saudi Arabia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/application-process">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                    Apply for Security Jobs
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  Download Job Guide
                </Button>
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
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Shield}
            subtitle="AVAILABLE POSITIONS"
            title="Security Job Opportunities"
            description="Explore different security roles with competitive salaries and growth potential."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            {securityRoles.map((role, index) => (
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
            title="Leading Security Companies"
            description="Work with internationally recognized security companies that offer excellent career opportunities."
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

      {/* Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={MapPin}
            subtitle="WORK DESTINATIONS"
            title="Security Jobs by Country"
            description="Explore security opportunities across different Middle Eastern countries."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{destination.flag}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.country}</h3>
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-2">Major Cities:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {destination.cities.map((city, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm text-gray-600">Demand:</span>
                    <span
                      className={`text-sm font-semibold ${
                        destination.demand === "Very High" ? "text-red-600" : "text-orange-600"
                      }`}
                    >
                      {destination.demand}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <SectionHeader
                icon={Award}
                subtitle="EMPLOYMENT BENEFITS"
                title="What You'll Receive"
                description="Comprehensive benefits package for all security positions."
              />

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <SectionHeader
                icon={Users}
                subtitle="REQUIREMENTS"
                title="Security Job Requirements"
                description="Essential qualifications and skills needed for security positions."
              />

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Basic Requirements</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Age: 21-40 years</li>
                        <li>• Minimum O-Level education</li>
                        <li>• Good physical fitness</li>
                        <li>• Clean criminal record</li>
                        <li>• Basic English communication</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Preferred Qualifications</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Previous security experience</li>
                        <li>• Security training certification</li>
                        <li>• First aid certification</li>
                        <li>• Military or police background</li>
                      </ul>
                    </div>
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
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Security Career Today</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Ugandan security professionals working with top international companies. Secure
            employment, competitive salaries, and professional growth await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/application-process">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Apply for Security Jobs
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
