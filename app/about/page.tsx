import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { ServiceCard } from "@/components/ui/service-card"
import { ContactBanner } from "@/components/ui/contact-banner"
import { Users, Award, CheckCircle, Target, Heart, Shield, Clock, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Ethical Recruitment",
      description: "We maintain the highest standards of integrity and transparency in all recruitment processes.",
    },
    {
      icon: Heart,
      title: "Worker Welfare",
      description: "Your safety and well-being are our top priorities throughout your employment journey.",
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
      description: "Continuous assistance from application to deployment and throughout your employment abroad.",
    },
  ]

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "1,000+", label: "Workers Placed" },
    { number: "5", label: "Countries Covered" },
    { number: "100%", label: "Legal Compliance" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About FreshMind International</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Licensed and accredited labor recruitment agency committed to ethical recruitment and global workforce
              placement for Ugandan workers seeking international opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                icon={Users}
                subtitle="OUR STORY"
                title="Bridging Uganda to Global Opportunities"
                description="FreshMind International Ltd was founded with a vision to bridge the gap between Ugandan job seekers and reputable employers abroad, recognizing the high demand for skilled and unskilled labor in the Middle East and Europe."
              />

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Established as a professional recruitment agency committed to ethical and legal labor migration, we
                  have grown to become one of Uganda's most trusted recruitment agencies, successfully placing thousands
                  of workers in well-paying jobs abroad.
                </p>
                <p>
                  We are fully registered and licensed under the Ministry of Gender, Labour, and Social Development
                  (MGLSD) with License No. E24050019, and are a recognized member of the Uganda Association of External
                  Recruitment Agencies (UAERA).
                </p>
                <p>
                  Our commitment to safe labor migration ensures that all recruited workers obtain genuine work visas,
                  sign transparent employment contracts, and receive comprehensive pre-departure training.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
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
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader icon={Target} subtitle="OUR MISSION" title="Empowering Ugandan Workers" />
              <p className="text-gray-600 leading-relaxed mb-8">
                "To empower Ugandan job seekers with safe, reliable, and well-structured employment opportunities
                abroad, ensuring dignity, fair wages, and career growth in compliance with global labor standards."
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span>Ethical and transparent recruitment practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span>Comprehensive worker protection and support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span>Compliance with international labor standards</span>
                </div>
              </div>
            </div>

            <div>
              <SectionHeader icon={Globe} subtitle="OUR VISION" title="Leading Recruitment Agency" />
              <p className="text-gray-600 leading-relaxed mb-8">
                "To become the leading recruitment agency in Uganda and East Africa, recognized for ethical labor
                migration, professionalism, and strong partnerships with reputable international employers."
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-gray-900 mb-4">Our Commitment</h4>
                <p className="text-gray-600">
                  We are committed to transforming lives through international employment opportunities while
                  maintaining the highest standards of professionalism, integrity, and ethical labor migration
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Heart}
            subtitle="OUR VALUES"
            title="What Drives Our Success"
            description="Our core values guide every decision and interaction in serving Ugandan workers seeking international opportunities."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ServiceCard key={index} icon={value.icon} title={value.title} description={value.description} href="#" />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner
        message="Ready to start your international employment journey with Uganda's trusted recruitment agency?"
        phoneNumber="+256 783 183 252"
      />

      {/* Licensing & Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Shield}
            subtitle="LICENSING & COMPLIANCE"
            title="Fully Licensed & Accredited"
            description="Operating under strict regulatory compliance to ensure safe and legal labor migration for all our workers."
            centered
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">MGLSD Licensed</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>License No. E24050019</strong>
                  </p>
                  <p className="text-gray-600">
                    Fully registered and licensed under the Ministry of Gender, Labour, and Social Development, ensuring
                    compliance with Ugandan labor export regulations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">UAERA Member</h3>
                  <p className="text-gray-600">
                    Recognized member of the Uganda Association of External Recruitment Agencies, reinforcing our
                    credibility in the labor recruitment industry.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Compliance Standards</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Genuine Work Visas</h4>
                    <p className="text-gray-600 text-sm">All workers obtain legitimate work visas before travel</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Transparent Contracts</h4>
                    <p className="text-gray-600 text-sm">Clear employment contracts detailing roles and benefits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Pre-Departure Training</h4>
                    <p className="text-gray-600 text-sm">Comprehensive preparation for new work environments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Worker Protection</h4>
                    <p className="text-gray-600 text-sm">Ongoing support and welfare monitoring abroad</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Join Thousands of Successful Workers</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Start your journey to international employment with Uganda's most trusted and licensed recruitment agency.
            Apply today and secure your future abroad.
          </p>
          <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Start Your Application
          </Button>
        </div>
      </section>
    </div>
  )
}
