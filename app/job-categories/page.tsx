import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
  Building,
  Users,
  DollarSign,
  MapPin,
  Clock,
} from "lucide-react"

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
      description: "Monthly salaries ranging from UGX 1.2M to 3.5M depending on role and experience",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Job Categories</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Explore diverse employment opportunities across multiple industries with competitive salaries,
              comprehensive benefits, and career growth potential in top international destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Job Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Users}
            subtitle="EMPLOYMENT OPPORTUNITIES"
            title="High-Demand Job Categories"
            description="Discover your ideal career path with our diverse range of international employment opportunities."
            centered
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {jobCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {category.salaryRange}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Users className="w-4 h-4 mr-2 text-red-600" />
                          Available Positions
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.jobs.map((job, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {job}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-red-600" />
                          Destinations
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.countries.map((country, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link href={category.href}>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">View Details & Apply</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Heart}
            subtitle="EMPLOYMENT BENEFITS"
            title="Comprehensive Benefits Package"
            description="All positions come with competitive compensation and comprehensive benefits to ensure your success abroad."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner
        message="Ready to explore international job opportunities? Contact us to discuss your career goals"
        phoneNumber="+256 783 183 252"
      />

      {/* Requirements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Clock}
            subtitle="GENERAL REQUIREMENTS"
            title="What You Need to Get Started"
            description="Basic requirements that apply to most job categories. Specific requirements may vary by position."
            centered
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Requirements</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Age: 21-45 years (varies by category)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Valid Ugandan passport (6+ months validity)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Clean criminal record</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Basic education (minimum O-Level)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Good physical and mental health</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Preferred Qualifications</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Previous work experience in relevant field</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Basic English communication skills</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Technical certifications (for skilled roles)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Willingness to work abroad for 2+ years</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Adaptability to different cultures</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Find Your Perfect International Career</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            With opportunities across multiple industries and countries, your ideal international career is waiting.
            Start your application today and join thousands of successful Ugandan workers abroad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/application-process">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Start Application Process
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
