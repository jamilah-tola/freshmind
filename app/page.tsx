import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"
import { VisaCard } from "@/components/ui/visa-card"
import { SectionHeader } from "@/components/ui/section-header"
import { StatsBanner } from "@/components/ui/stats-banner"
import { ContactBanner } from "@/components/ui/contact-banner"
import {
  Users,
  Shield,
  Plane,
  Building,
  CheckCircle,
  Award,
  Globe,
  Car,
  Utensils,
  HardHat,
} from "lucide-react"

export default function HomePage() {
  const serviceStats = [
    { icon: Users, label: "LICENSED RECRUITMENT AGENCY" },
    { icon: Globe, label: "INTERNATIONAL JOB PLACEMENTS" },
    { icon: Award, label: "ETHICAL RECRUITMENT PRACTICES" },
    { icon: Shield, label: "WORKER PROTECTION & SUPPORT" },
  ]

  const destinations = [
    { country: "United Arab Emirates", city: "Dubai, Abu Dhabi", flag: "🇦🇪" },
    { country: "Qatar", city: "Doha", flag: "🇶🇦" },
    { country: "Saudi Arabia", city: "Riyadh, Jeddah", flag: "🇸🇦" },
    { country: "Jordan", city: "Amman", flag: "🇯🇴" },
    { country: "Poland", city: "Warsaw, Krakow", flag: "🇵🇱" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative fm-gradient text-primary-foreground py-20 lg:py-32">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                Licensed by MGLSD – License No. E24050019
              </div>
              <h1 className="mb-6 text-4xl lg:text-6xl font-bold leading-tight">
                International Employment Opportunities for Ugandans
              </h1>
              <p className="mb-8 text-lg text-secondary-foreground/80">
                Connecting skilled and unskilled Ugandan workers with reputable
                employers across the Middle East and Europe. Ethical recruitment,
                fair wages, and secure employment guaranteed.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="btn-primary px-8 py-4 text-lg">
                  Apply for Jobs
                </Button>
                <Button
                  variant="outline"
                  className="btn-secondary bg-transparent px-8 py-4 text-lg hover:bg-secondary hover:text-secondary-foreground"
                >
                  View Job Categories
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
      <section className="bg-muted py-20">
        <div className="container">
          <SectionHeader
            icon={Users}
            subtitle="OUR SERVICES"
            title="Comprehensive Recruitment Solutions"
            description="End-to-end recruitment services ensuring safe, legal, and well-regulated labor migration for Ugandan workers."
            centered
          />
          <div className="grid gap-8 md:grid-cols-3">
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
        message="FreshMind International – Your trusted partner for international employment opportunities"
        phoneNumber="+256 783 183 252"
      />

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="relative photo-overlay">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Professional recruitment consultation"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 rounded-lg bg-secondary p-6 shadow-lg text-secondary-foreground">
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
              <div className="mb-8 grid gap-6 md:grid-cols-2">
                {[
                  {
                    Icon: CheckCircle,
                    title: "MGLSD Licensed",
                    text: "Fully accredited agency",
                  },
                  {
                    Icon: Globe,
                    title: "Global Partnerships",
                    text: "Trusted employers worldwide",
                  },
                ].map(({ Icon, title, text }) => (
                  <div key={title} className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold">{title}</h4>
                      <p className="text-muted-foreground text-sm">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mb-8 space-y-4">
                {[
                  "Salary range: UGX 1.2M – 2.9M per month",
                  "Free accommodation and transportation",
                  "Health insurance and medical coverage",
                ].map((line) => (
                  <div key={line} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">{line}</span>
                  </div>
                ))}
              </div>
              <Button className="btn-primary px-8 py-3">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <StatsBanner stats={serviceStats} />

      {/* Job Categories */}
      <section className="bg-primary py-20">
        <div className="container">
          <SectionHeader
            icon={Building}
            subtitle="JOB CATEGORIES"
            title="High-Demand Employment Sectors"
            description="Diverse job opportunities across multiple industries with competitive salaries and comprehensive benefits."
            centered
            theme="dark"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
      <section className="bg-muted py-20">
        <div className="container">
          <SectionHeader
            icon={Plane}
            subtitle="EMPLOYMENT DESTINATIONS"
            title="Work Opportunities Across the Globe"
            description="Secure employment in high-demand markets with established labor agreements and worker protection policies."
            centered
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {destinations.map(({ country, city, flag }) => (
              <div
                key={country}
                className="rounded-lg bg-background p-6 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">{flag}</div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {country}
                </h3>
                <p className="text-sm text-muted-foreground">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="container text-center">
          <h2 className="mb-6 text-4xl font-bold text-secondary-foreground">
            Ready to Start Your International Career?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-secondary-foreground/90">
            Join thousands of Ugandans who have secured well-paying jobs abroad
            through our ethical recruitment process. Get started with your
            application today.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button className="bg-background px-8 py-3 text-secondary hover:bg-muted">
              Apply for Jobs Now
            </Button>
            <Button
              variant="outline"
              className="border-background px-8 py-3 text-secondary-foreground hover:bg-background hover:text-secondary"
            >
              Download Application Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
