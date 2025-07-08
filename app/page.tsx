import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"
import { VisaCard } from "@/components/ui/visa-card"
import { SectionHeader } from "@/components/ui/section-header"
import { StatsBanner } from "@/components/ui/stats-banner"
import { ContactBanner } from "@/components/ui/contact-banner"
import { Users, Shield, Plane, Building, CheckCircle, Award, Globe, Car, Utensils, HardHat } from "lucide-react"

export default function HomePage() {
  const serviceStats = [
    { icon: Users, label: "LICENSED RECRUITMENT AGENCY" },
    { icon: Globe, label: "INTERNATIONAL JOB PLACEMENTS" },
    { icon: Award, label: "ETHICAL RECRUITMENT PRACTICES" },
    { icon: Shield, label: "WORKER PROTECTION & SUPPORT" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-600 text-white px-4 py-2 rounded-full inline-block text-sm font-medium mb-6">
                Licensed by MGLSD - License No. E24050019
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                International Employment Opportunities for Ugandans
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Connecting skilled and unskilled Ugandan workers with reputable employers across the Middle East and
                Europe. Ethical recruitment, fair wages, and secure employment guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                  APPLY FOR JOBS
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  VIEW JOB CATEGORIES
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Ugandan workers ready for international employment"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Users}
            subtitle="OUR SERVICES"
            title="Comprehensive Recruitment Solutions"
            description="End-to-end recruitment services ensuring safe, legal, and well-regulated labor migration for Ugandan workers."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Globe}
              title="International Job Placements"
              description="Matching skilled and unskilled Ugandan workers with verified employers in UAE, Qatar, Saudi Arabia, Jordan, and Poland with competitive salaries."
              href="/services/job-placements"
            />
            <ServiceCard
              icon={Shield}
              title="Pre-Departure Training"
              description="Comprehensive orientation covering workplace culture, safety protocols, labor rights, and cultural adaptation to prepare workers for success abroad."
              href="/services/training"
            />
            <ServiceCard
              icon={Award}
              title="Worker Welfare & Support"
              description="Ongoing support for deployed workers including dispute resolution, welfare monitoring, and assistance with contract compliance and renewals."
              href="/services/support"
            />
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner
        message="FreshMind International - Your trusted partner for international employment opportunities"
        phoneNumber="+256 783 183 252"
      />

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Professional recruitment consultation"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm">Workers Placed</div>
              </div>
            </div>

            <div>
              <SectionHeader
                icon={Users}
                subtitle="WHO WE ARE"
                title="Licensed Labor Recruitment Agency"
                description="FreshMind International Ltd is a fully licensed and accredited labor recruitment agency based in Uganda, specializing in connecting Ugandan workers with reputable international employers."
              />

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">MGLSD Licensed</h4>
                    <p className="text-sm text-gray-600">Fully accredited agency</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Global Partnerships</h4>
                    <p className="text-sm text-gray-600">Trusted employers worldwide</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Salary range: UGX 1.2M - 2.9M per month</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Free accommodation and transportation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Health insurance and medical coverage</span>
                </div>
              </div>

              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">LEARN MORE</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <StatsBanner stats={serviceStats} />

      {/* Job Categories */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Building}
            subtitle="JOB CATEGORIES"
            title="High-Demand Employment Sectors"
            description="Diverse job opportunities across multiple industries with competitive salaries and comprehensive benefits."
            centered
            theme="dark"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <VisaCard
              icon={Shield}
              title="Security Services"
              description="Security guards, surveillance officers, and VIP protection roles with leading companies like G4S, AMNCO Security, and Certis."
              image="/placeholder.svg?height=200&width=300"
              href="/job-categories/security"
            />
            <VisaCard
              icon={Car}
              title="Transport & Logistics"
              description="Taxi drivers, bus drivers, and baggage handlers with Emirates Taxi, Mowasalat Qatar, and Elitzam Group."
              image="/placeholder.svg?height=200&width=300"
              href="/job-categories/transport"
            />
            <VisaCard
              icon={Utensils}
              title="Hospitality & Cleaning"
              description="Hotel workers, waiters, housemaids, and cleaners with top hospitality and facility management companies."
              image="/placeholder.svg?height=200&width=300"
              href="/job-categories/hospitality"
            />
            <VisaCard
              icon={HardHat}
              title="Construction & Skilled Work"
              description="Carpenters, plumbers, electricians, and construction workers with major construction companies in the Gulf."
              image="/placeholder.svg?height=200&width=300"
              href="/job-categories/construction"
            />
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Plane}
            subtitle="EMPLOYMENT DESTINATIONS"
            title="Work Opportunities Across the Globe"
            description="Secure employment in high-demand markets with established labor agreements and worker protection policies."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { country: "United Arab Emirates", city: "Dubai, Abu Dhabi", flag: "🇦🇪" },
              { country: "Qatar", city: "Doha", flag: "🇶🇦" },
              { country: "Saudi Arabia", city: "Riyadh, Jeddah", flag: "🇸🇦" },
              { country: "Jordan", city: "Amman", flag: "🇯🇴" },
              { country: "Poland", city: "Warsaw, Krakow", flag: "🇵🇱" },
            ].map((destination, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{destination.flag}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{destination.country}</h3>
                <p className="text-gray-600 text-sm">{destination.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your International Career?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Ugandans who have secured well-paying jobs abroad through our ethical recruitment process.
            Get started with your application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Apply for Jobs Now
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg font-semibold bg-transparent"
            >
              Download Application Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
