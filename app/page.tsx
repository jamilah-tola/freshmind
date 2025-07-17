"use client"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"
import { VisaCard } from "@/components/ui/visa-card"
import { SectionHeader } from "@/components/ui/section-header"
import { StatsBanner } from "@/components/ui/stats-banner"
import { ContactBanner } from "@/components/ui/contact-banner"
import {
  Users,
  Globe,
  Award,
  Shield,
  Plane,
  Building,
  Car,
  Utensils,
  HardHat,
  CheckCircle,
} from "lucide-react"
import { images } from "@/constants/images"

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

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 * i, duration: 0.6 },
    }),
  }

  return (
    <>
      <Head>
        <title>FreshMind International – Global Job Placements</title>
        <meta
          name="description"
          content="FreshMind International connects Ugandan workers with ethical, secure employment opportunities abroad. Licensed by MGLSD."
        />
      </Head>

      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only p-2 bg-primary text-primary-foreground rounded"
      >
        Skip to main content
      </a>

      {/* Hero */}
      <header
        role="banner"
        className="relative text-primary-foreground py-20 lg:py-32"
      >
        {/* Full-bleed background image */}
        <Image
          src={images.dubaiNight}
          alt="Dubai skyline at night"
          fill
          className="absolute inset-0 -z-20 object-cover"
          priority
        />

        {/* Brand gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/70 to-secondary/60" />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 -z-5 bg-black/30" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text block */}
            <div className="space-y-6">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={statsVariants}
                custom={0}
              >
                <span className="inline-block mb-6 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                  Licensed by MGLSD – License No. E24050019
                </span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={statsVariants}
                custom={1}
                className="mb-6 text-4xl lg:text-6xl font-bold leading-tight"
              >
                International Employment Opportunities for Ugandans
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={statsVariants}
                custom={2}
                className="mb-8 text-lg text-secondary-foreground/80"
              >
                Connecting skilled and unskilled Ugandan workers with reputable
                employers across the Middle East and Europe. Ethical recruitment,
                fair wages, and secure employment—all guaranteed.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={statsVariants}
                custom={3}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link href="/application-process" prefetch>
                  <Button className="btn-primary px-8 py-4 text-lg">
                    Apply for Jobs
                  </Button>
                </Link>
                <Button
                  asChild
                  variant="outline"
                  className="btn-secondary bg-transparent px-8 py-4 text-lg hover:bg-secondary hover:text-secondary-foreground"
                >
                  <a href="#job-categories">View Job Categories</a>
                </Button>
              </motion.div>
            </div>

            {/* Right illustrative image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src={images.security}
                alt="Group of Ugandan workers preparing for overseas deployment"
                width={600}
                height={500}
                priority
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </header>

      <main id="main-content" className="bg-background text-foreground">
        {/* Services */}
        <section className="bg-muted py-20">
          <div className="container">
            <SectionHeader
              icon={Users}
              subtitle="OUR SERVICES"
              title="Comprehensive Recruitment Solutions"
              description="End-to-end services ensuring safe, legal, and well-regulated labor migration for Ugandan workers."
              centered
            />
            <div className="grid gap-8 md:grid-cols-3">
              <ServiceCard
                icon={Globe}
                title="International Job Placements"
                description="Matching skilled and unskilled workers with verified employers in UAE, Qatar, Saudi Arabia, Jordan, and Poland."
                href="/services/job-placements"
              />
              <ServiceCard
                icon={Shield}
                title="Pre-Departure Training"
                description="Orientation on workplace culture, safety protocols, labor rights, and adaptation skills."
                href="/services/training"
              />
              <ServiceCard
                icon={Award}
                title="Worker Welfare & Support"
                description="Ongoing assistance with dispute resolution, welfare monitoring, and contract renewals."
                href="/services/support"
              />
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <ContactBanner
          message="FreshMind International – Your trusted partner for global employment"
          phoneNumber="+256 783 183 252"
        />

        {/* About */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className="relative">
                <Image
                  src={images.dubaiDay}
                  alt="Professional recruitment consultation with FreshMind team"
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
                  description="FreshMind International Ltd is fully licensed and accredited, specializing in ethical global placements for Ugandan workers."
                />
                <div className="mb-8 grid gap-6 md:grid-cols-2">
                  {[ 
                    { Icon: CheckCircle, title: "MGLSD Licensed", text: "Fully accredited agency" },
                    { Icon: Globe, title: "Global Partnerships", text: "Trusted employers worldwide" },
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
                    "Free accommodation & transportation",
                    "Health insurance & medical coverage",
                  ].map((line) => (
                    <div key={line} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span className="text-foreground">{line}</span>
                    </div>
                  ))}
                </div>
                <Link href="/about">
                  <Button className="btn-primary px-8 py-3">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats */}
        <StatsBanner stats={serviceStats} />

        {/* Job Categories */}
        <section id="job-categories" className="bg-primary py-20">
          <div className="container">
            <SectionHeader
              icon={Building}
              subtitle="JOB CATEGORIES"
              title="High-Demand Employment Sectors"
              centered
              theme="dark"
            />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <VisaCard
                icon={Shield}
                title="Security Services"
                description="Guards, surveillance, VIP protection roles with G4S, AMNCO, Certis."
                image={images.security}
                href="/job-categories/security"
              />
              <VisaCard
                icon={Car}
                title="Transport & Logistics"
                description="Taxi, bus, baggage handlers with Emirates Taxi, Mowasalat, Elitzam."
                image={images.taxi}
                href="/job-categories/transport"
              />
              <VisaCard
                icon={Utensils}
                title="Hospitality & Cleaning"
                description="Hotel staff, waiters, cleaners with top hospitality firms."
                image={images.cleaners}
                href="/job-categories/hospitality"
              />
              <VisaCard
                icon={HardHat}
                title="Construction & Skilled Work"
                description="Carpenters, plumbers, electricians on major Gulf projects."
                image={images.construction}
                href="/job-categories/construction"
              />
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="bg-muted py-20">
          <div className="container">
            <SectionHeader
              icon={Plane}
              subtitle="EMPLOYMENT DESTINATIONS"
              title="Work Opportunities Across the Globe"
              description="Secure roles in markets with strong labor agreements & protections."
              centered
            />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {destinations.map(({ country, city, flag }) => (
                <div
                  key={country}
                  className="rounded-lg bg-background p-6 shadow-lg transition-transform hover:scale-105"
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

        {/* Final CTA */}
        <section className="bg-secondary py-20">
          <div className="container text-center">
            <h2 className="mb-6 text-4xl font-bold text-secondary-foreground">
              Ready to Start Your International Career?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-secondary-foreground/90">
              Join thousands of Ugandans who’ve secured well-paying jobs abroad
              through our ethical recruitment process.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/application-process">
                <Button className="bg-background px-8 py-3 text-secondary hover:bg-muted">
                  Apply for Jobs Now
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-background px-8 py-3 text-secondary-foreground hover:bg-background hover:text-secondary"
              >
                Download Application Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
