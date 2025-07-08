import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactBanner } from "@/components/ui/contact-banner"
import { Car, Users, MapPin, CheckCircle, Award, Building, Truck, Plane } from "lucide-react"

export default function TransportJobsPage() {
  const transportRoles = [
    {
      title: "Taxi Driver",
      description: "Professional taxi driving in major cities with modern fleet vehicles",
      salary: "UGX 1.8M - 2.5M",
      requirements: ["Valid driving license", "3+ years experience", "Good navigation skills"],
      icon: Car,
    },
    {
      title: "Bus Driver",
      description: "Public transport and tour bus driving with established transport companies",
      salary: "UGX 2.0M - 2.9M",
      requirements: ["Heavy vehicle license", "5+ years experience", "Clean driving record"],
      icon: Truck,
    },
    {
      title: "Baggage Handler",
      description: "Airport baggage handling and logistics support at international airports",
      salary: "UGX 1.5M - 2.2M",
      requirements: ["Physical fitness", "Airport security clearance", "Team work skills"],
      icon: Plane,
    },
  ]

  const employerPartners = [
    {
      name: "Emirates Taxi",
      description: "Leading taxi service provider in Dubai and Abu Dhabi with modern fleet",
      positions: "300+ openings",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Mowasalat Qatar",
      description: "Qatar's national transport company operating buses and taxis",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <span className="text-red-400 font-medium text-lg">TRANSPORT & LOGISTICS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">Transport Jobs in the Middle East</h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional driving and logistics positions with leading transport companies. Excellent salaries,
                company vehicles, and career advancement opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/application-process">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                    Apply for Transport Jobs
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  Download Requirements
                </Button>
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
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Car}
            subtitle="AVAILABLE POSITIONS"
            title="Transport Job Opportunities"
            description="Explore different transport and logistics roles with competitive compensation."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            {transportRoles.map((role, index) => (
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
            title="Leading Transport Companies"
            description="Work with established transport and logistics companies across the Middle East."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            {employerPartners.map((employer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Image
                        src={employer.logo || "/placeholder.svg"}
                        alt={employer.name}
                        width={120}
                        height={80}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{employer.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{employer.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold">{employer.positions}</span>
                      <Link href="/application-process">
                        <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                          Apply
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* License Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Award}
            subtitle="LICENSE REQUIREMENTS"
            title="Driving License Categories"
            description="Different transport roles require specific license categories and experience levels."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Category B License</h3>
                <p className="text-gray-600 mb-4">For taxi and light vehicle driving positions</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Minimum 3 years experience</li>
                  <li>• Clean driving record</li>
                  <li>• Valid for cars up to 3.5 tons</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Category C License</h3>
                <p className="text-gray-600 mb-4">For bus and heavy vehicle driving</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Minimum 5 years experience</li>
                  <li>• Heavy vehicle certification</li>
                  <li>• Passenger transport endorsement</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Airport Security</h3>
                <p className="text-gray-600 mb-4">For airport and logistics positions</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Security clearance required</li>
                  <li>• Physical fitness test</li>
                  <li>• Background verification</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={MapPin}
            subtitle="WORK DESTINATIONS"
            title="Transport Jobs by Country"
            description="Explore transport opportunities across different Middle Eastern countries."
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
                        destination.demand === "Very High"
                          ? "text-red-600"
                          : destination.demand === "High"
                            ? "text-orange-600"
                            : "text-yellow-600"
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <SectionHeader
                icon={Award}
                subtitle="EMPLOYMENT BENEFITS"
                title="What You'll Receive"
                description="Comprehensive benefits package for all transport positions."
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
                title="Transport Job Requirements"
                description="Essential qualifications and skills needed for transport positions."
              />

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Basic Requirements</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Age: 25-45 years</li>
                        <li>• Valid driving license (3+ years)</li>
                        <li>• Clean driving record</li>
                        <li>• Good physical health</li>
                        <li>• Basic English communication</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Preferred Qualifications</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Professional driving experience</li>
                        <li>• GPS navigation skills</li>
                        <li>• Customer service experience</li>
                        <li>• Defensive driving certification</li>
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
        message="Ready to drive your career forward? Apply now for transport opportunities abroad"
        phoneNumber="+256 783 183 252"
      />

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Transport Career Today</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join professional drivers working with leading transport companies across the Middle East. Excellent
            salaries, company vehicles, and career growth opportunities await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/application-process">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Apply for Transport Jobs
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
