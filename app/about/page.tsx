import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { ServiceCard } from "@/components/ui/service-card"
import { ContactBanner } from "@/components/ui/contact-banner"
import {
  Users,
  Award,
  CheckCircle,
  Target,
  Heart,
  Shield,
  Clock,
  Globe,
} from "lucide-react"
import PageHeader from "@/components/layout/pageHeader"
import { images } from "@/constants/images"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Ethical Recruitment",
      description:
        "We maintain the highest standards of integrity and transparency in all recruitment processes.",
    },
    {
      icon: Heart,
      title: "Worker Welfare",
      description:
        "Your safety and well-being are our top priorities throughout your employment journey.",
    },
    {
      icon: Award,
      title: "Quality Placements",
      description:
        "We partner only with verified, reputable employers who offer fair wages and good working conditions.",
    },
    {
      icon: Clock,
      title: "Ongoing Support",
      description:
        "Continuous assistance from application to deployment and throughout your employment abroad.",
    },
  ]

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "1,000+", label: "Workers Placed" },
    { number: "5", label: "Countries Covered" },
    { number: "100%", label: "Legal Compliance" },
  ]

  const complianceStandards = [
    {
      title: "Genuine Work Visas",
      text: "All workers obtain legitimate work visas before travel",
    },
    {
      title: "Transparent Contracts",
      text: "Clear employment contracts detailing roles and benefits",
    },
    {
      title: "Pre-Departure Training",
      text: "Comprehensive preparation for new work environments",
    },
    {
      title: "Worker Protection",
      text: "Ongoing support and welfare monitoring abroad",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <PageHeader
        title="About FreshMind International"
        subtitle="Licensed and accredited labor recruitment agency committed to ethical recruitment and global workforce placement for Ugandan workers seeking international opportunities."
      />

      {/* Company Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <SectionHeader
                icon={Users}
                subtitle="OUR STORY"
                title="Bridging Uganda to Global Opportunities"
                description="FreshMind International Ltd was founded with a vision to bridge the gap between Ugandan job seekers and reputable employers abroad, recognizing the high demand for skilled and unskilled labor in the Middle East and Europe."
              />
              <div className="space-y-6 leading-relaxed text-muted-foreground">
                <p>
                  Established as a professional recruitment agency committed to
                  ethical and legal labor migration, we have grown to become one
                  of Uganda’s most trusted agencies, successfully placing
                  thousands of workers in well-paying jobs abroad.
                </p>
                <p>
                  We are fully registered and licensed under the Ministry of
                  Gender, Labour, and Social Development (MGLSD) with License
                  No. E24050019, and are a recognized member of the Uganda
                  Association of External Recruitment Agencies (UAERA).
                </p>
                <p>
                  Our commitment to safe labor migration ensures that all
                  recruited workers obtain genuine work visas, sign transparent
                  employment contracts, and receive comprehensive pre-departure
                  training.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={images.about}
                alt="FreshMind International office and team"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="mb-2 text-4xl font-bold text-secondary-foreground">
                  {stat.number}
                </div>
                <div className="text-secondary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeader
                icon={Target}
                subtitle="OUR MISSION"
                title="Empowering Ugandan Workers"
                description="To empower Ugandan job seekers with safe, reliable, and well-structured employment opportunities abroad, ensuring dignity, fair wages, and career growth in compliance with global labor standards."
              />
              <div className="space-y-4 mb-8">
                {[
                  "Ethical and transparent recruitment practices",
                  "Comprehensive worker protection and support",
                  "Compliance with international labor standards",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 text-muted-foreground"
                  >
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                icon={Globe}
                subtitle="OUR VISION"
                title="Leading Recruitment Agency"
                description="To become the leading recruitment agency in Uganda and East Africa, recognized for ethical labor migration, professionalism, and strong partnerships with reputable international employers."
              />
              <div className="bg-background p-6 rounded-lg shadow-md">
                <h4 className="mb-4 text-xl font-bold text-foreground">
                  Our Commitment
                </h4>
                <p className="text-muted-foreground">
                  We are committed to transforming lives through international
                  employment opportunities while maintaining the highest
                  standards of professionalism, integrity, and ethical labor
                  migration practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Heart}
            subtitle="OUR VALUES"
            title="What Drives Our Success"
            description="Our core values guide every decision and interaction in serving Ugandan workers seeking international opportunities."
            centered
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <ServiceCard
                key={idx}
                icon={value.icon}
                title={value.title}
                description={value.description}
                href="#"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner
        message="Ready to start your international employment journey with Uganda’s trusted recruitment agency?"
        phoneNumber="+256 783 183 252"
      />

      {/* Licensing & Compliance */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeader
            icon={Shield}
            subtitle="LICENSING & COMPLIANCE"
            title="Fully Licensed & Accredited"
            description="Operating under strict regulatory compliance to ensure safe and legal labor migration for all our workers."
            centered
          />
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  MGLSD Licensed
                </h3>
                <p className="mb-2 text-muted-foreground">
                  <strong>License No. E24050019</strong>
                </p>
                <p className="text-muted-foreground">
                  Fully registered and licensed under the Ministry of Gender,
                  Labour, and Social Development, ensuring compliance with
                  Ugandan labor export regulations.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  UAERA Member
                </h3>
                <p className="text-muted-foreground">
                  Recognized member of the Uganda Association of External
                  Recruitment Agencies, reinforcing our credibility in the labor
                  recruitment industry.
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-bold text-foreground">
                Our Compliance Standards
              </h3>
              <div className="space-y-4">
                {complianceStandards.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3 text-muted-foreground"
                  >
                    <CheckCircle className="mt-1 h-5 w-5 text-secondary" />
                    <div>
                      <h4 className="mb-1 text-lg font-bold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="mb-6 text-4xl font-bold text-secondary-foreground">
            Join Thousands of Successful Workers
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-secondary-foreground/90">
            Start your journey to international employment with Uganda’s most
            trusted and licensed recruitment agency. Apply today and secure
            your future abroad.
          </p>
          <Button className="bg-background px-8 py-3 text-secondary hover:bg-muted">
            Start Your Application
          </Button>
        </div>
      </section>
    </div>
  )
}
