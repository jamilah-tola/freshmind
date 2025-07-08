import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactBanner } from "@/components/ui/contact-banner"
import { Users, Globe, Shield, FileText, Plane, Phone, CheckCircle, Award, Clock, Building, Car } from "lucide-react"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Globe,
      title: "International Job Placements",
      description:
        "Matching skilled and unskilled Ugandan workers with verified employers in UAE, Qatar, Saudi Arabia, Jordan, and Poland across multiple industries.",
    },
    {
      icon: FileText,
      title: "Visa & Documentation Processing",
      description:
        "Complete assistance with work visa applications, employment contracts, and ensuring compliance with host country labor regulations.",
    },
    {
      icon: Shield,
      title: "Pre-Departure Training",
      description:
        "Comprehensive orientation covering workplace culture, safety protocols, labor rights, and cultural adaptation for successful employment abroad.",
    },
    {
      icon: Plane,
      title: "Travel & Relocation Support",
      description:
        "Arranging flights, airport transfers, and providing guidance on accommodation and settlement in destination countries.",
    },
    {
      icon: Phone,
      title: "Worker Welfare & Support",
      description:
        "Ongoing communication with deployed workers, welfare monitoring, and assistance with conflict resolution and contract compliance.",
    },
    {
      icon: Award,
      title: "Compliance & Ethical Recruitment",
      description:
        "Adhering to Uganda's labor export regulations and international standards while preventing exploitation and ensuring worker protection.",
    },
  ]

  const industries = [
    {
      icon: Shield,
      title: "Security Services",
      description:
        "Security guards, surveillance officers, and VIP protection roles with leading companies like G4S, AMNCO Security, and Certis.",
    },
    {
      icon: Car,
      title: "Transport & Logistics",
      description:
        "Taxi drivers, bus drivers, and baggage handlers with Emirates Taxi, Mowasalat Qatar, and Elitzam Group.",
    },
    {
      icon: Building,
      title: "Hospitality & Cleaning",
      description:
        "Hotel workers, waiters, housemaids, and cleaners with top hospitality and facility management companies.",
    },
    {
      icon: Users,
      title: "Construction & Skilled Work",
      description:
        "Carpenters, plumbers, electricians, and construction workers with major construction companies in the Gulf region.",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Application & Registration",
      description: "Visit our office for job listings, eligibility checks, and pay the registration fee to begin.",
    },
    {
      step: "02",
      title: "Document Verification",
      description: "Submit required documents for authenticity verification and background checks.",
    },
    {
      step: "03",
      title: "Interview & Matching",
      description: "Undergo interviews and skill assessments, then get matched with suitable international employers.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Complete visa processing, pre-departure training, travel arrangements, and ongoing support abroad.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive labor recruitment services connecting Ugandan workers with reputable international
              employers. From application to deployment and ongoing support abroad.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Users}
            subtitle="WHAT WE OFFER"
            title="Complete Recruitment Solutions"
            description="End-to-end services ensuring safe, legal, and successful international employment for Ugandan workers."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Building}
            subtitle="INDUSTRIES WE SERVE"
            title="High-Demand Employment Sectors"
            description="Diverse job opportunities across multiple industries with competitive salaries and comprehensive benefits."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <ServiceCard
                key={index}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                href={`/job-categories/${industry.title.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Clock}
            subtitle="HOW IT WORKS"
            title="Our Recruitment Process"
            description="A structured and transparent process that has successfully placed thousands of Ugandan workers in international jobs."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner
        message="Ready to start your international employment journey with FreshMind International?"
        phoneNumber="+256 783 183 252"
      />

      {/* Salary & Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Award}
            subtitle="SALARY & BENEFITS"
            title="Competitive Compensation Packages"
            description="Fair wages and comprehensive benefits ensuring a positive and productive experience for all our workers."
            centered
          />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Salary Ranges (Monthly)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">Security Guards</span>
                  <span className="text-red-600 font-bold">UGX 1.5M - 2.5M</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">Hospitality Workers</span>
                  <span className="text-red-600 font-bold">UGX 1.2M - 2.0M</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">Drivers & Transport</span>
                  <span className="text-red-600 font-bold">UGX 1.8M - 2.9M</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">Construction Workers</span>
                  <span className="text-red-600 font-bold">UGX 1.5M - 2.7M</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Employment Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Free Accommodation</h4>
                    <p className="text-gray-600 text-sm">Company-sponsored housing or housing allowance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Health Insurance</h4>
                    <p className="text-gray-600 text-sm">Comprehensive medical coverage and emergency assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Transportation</h4>
                    <p className="text-gray-600 text-sm">Free transport to and from work</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">End-of-Service Benefits</h4>
                    <p className="text-gray-600 text-sm">Gratuity payments upon contract completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Application Today</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Ugandans who have secured well-paying international jobs through our ethical recruitment
            process. Your journey to financial stability starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Apply for Jobs Now
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg font-semibold bg-transparent"
            >
              Download Requirements Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
