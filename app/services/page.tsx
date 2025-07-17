import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactBanner } from "@/components/ui/contact-banner"
import {
  Users,
  Globe,
  Shield,
  FileText,
  Plane,
  Phone,
  CheckCircle,
  Award,
  Clock,
  Building,
  Car,
} from "lucide-react"
import PageHeader from "@/components/layout/pageHeader"

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
      description:
        "Visit our office for job listings, eligibility checks, and pay the registration fee to begin.",
    },
    {
      step: "02",
      title: "Document Verification",
      description:
        "Submit required documents for authenticity verification and background checks.",
    },
    {
      step: "03",
      title: "Interview & Matching",
      description:
        "Undergo interviews and skill assessments, then get matched with suitable international employers.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Complete visa processing, pre-departure training, travel arrangements, and ongoing support abroad.",
    },
  ]

  const benefits = [
    {
      title: "Free Accommodation",
      text: "Company-sponsored housing or housing allowance",
    },
    {
      title: "Health Insurance",
      text: "Comprehensive medical coverage and emergency assistance",
    },
    {
      title: "Transportation",
      text: "Free transport to and from work",
    },
    {
      title: "End-of-Service Benefits",
      text: "Gratuity payments upon contract completion",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive labor recruitment services connecting Ugandan workers
              with reputable international employers. From application to
              deployment and ongoing support abroad."
      />
      

      {/* Main Services */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Users}
            subtitle="WHAT WE OFFER"
            title="Complete Recruitment Solutions"
            description="End-to-end services ensuring safe, legal, and successful international employment for Ugandan workers."
            centered
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={`/services/${service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/&/g, "and")}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeader
            icon={Building}
            subtitle="INDUSTRIES WE SERVE"
            title="High-Demand Employment Sectors"
            description="Diverse job opportunities across multiple industries with competitive salaries and comprehensive benefits."
            centered
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, idx) => (
              <ServiceCard
                key={idx}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                href={`/job-categories/${industry.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/&/g, "and")}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Clock}
            subtitle="HOW IT WORKS"
            title="Our Recruitment Process"
            description="A structured and transparent process that has successfully placed thousands of Ugandan workers in international jobs."
            centered
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="mb-4 text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
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
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeader
            icon={Award}
            subtitle="SALARY & BENEFITS"
            title="Competitive Compensation Packages"
            description="Fair wages and comprehensive benefits ensuring a positive and productive experience for all our workers."
            centered
          />
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-foreground">
                Salary Ranges (Monthly)
              </h3>
              <div className="space-y-4">
                {[
                  ["Security Guards", "UGX 1.5M - 2.5M"],
                  ["Hospitality Workers", "UGX 1.2M - 2.0M"],
                  ["Drivers & Transport", "UGX 1.8M - 2.9M"],
                  ["Construction Workers", "UGX 1.5M - 2.7M"],
                ].map(([role, range], i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center rounded-lg bg-background p-4 shadow-sm"
                  >
                    <span className="font-medium text-foreground">{role}</span>
                    <span className="font-bold text-secondary">{range}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-bold text-foreground">
                Employment Benefits
              </h3>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="mt-1 h-5 w-5 text-secondary" />
                    <div>
                      <h4 className="mb-1 text-lg font-bold text-foreground">
                        {b.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {b.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
