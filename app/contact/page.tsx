"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactBanner } from "@/components/ui/contact-banner"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Send,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    experience: "",
    message: "",
  })

  const onChange = (e: React.ChangeEvent<any>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted:", form)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      items: ["+256 783 183 252", "+256 704 231 665"],
      desc: "Immediate assistance & job inquiries",
    },
    {
      icon: Mail,
      title: "Email Us",
      items: ["freshmindinternational@gmail.com"],
      desc: "Send documents & questions anytime",
    },
    {
      icon: MapPin,
      title: "Visit Office",
      items: [
        "Mengo, Behind Sir Apollo Kaggwa Primary School",
        "P.O. Box 5633, Kampala, Uganda",
      ],
      desc: "Walk-in consultations welcomed",
    },
    {
      icon: Clock,
      title: "Office Hours",
      items: ["Mon–Fri: 8 AM–6 PM", "Sat: 9 AM–3 PM"],
      desc: "Here to help during business hours",
    },
  ]

  const jobCategories = [
    "Security Services",
    "Transport & Logistics",
    "Hospitality & Cleaning",
    "Construction & Skilled Work",
    "Healthcare",
    "Retail & Customer Service",
    "Other",
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative fm-gradient text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 text-center">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold">
            Contact FreshMind International
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-secondary-foreground/80">
            Ready to start your international employment journey?  
            Reach out for personalized guidance and placement assistance.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-20">
        <div className="container grid gap-16 lg:grid-cols-2">
          {/* Application Form */}
          <div>
            <SectionHeader
              icon={Send}
              subtitle="APPLY NOW"
              title="Start Your Application"
              description="Fill out the form below to take the first step."
            />
            <Card className="shadow-xl">
              <CardContent className="p-8 grid gap-6">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      { name: "name", label: "Full Name", type: "text", req: true },
                      { name: "email", label: "Email Address", type: "email", req: true },
                      { name: "phone", label: "Phone Number", type: "tel", req: true },
                      {
                        name: "category",
                        label: "Job Category",
                        type: "select",
                        req: false,
                        options: jobCategories,
                      },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium mb-2">
                          {field.label}
                          {field.req && <span className="text-red-600">*</span>}
                        </label>
                        {field.type === "select" ? (
                          <select
                            name={field.name}
                            value={(form as any)[field.name]}
                            onChange={onChange}
                            className="w-full px-4 py-3 border rounded-lg focus:ring-secondary focus:border-secondary transition"
                          >
                            <option value="">Select {field.label}</option>
                            {field.options!.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            required={field.req}
                            value={(form as any)[field.name]}
                            onChange={onChange}
                            className="w-full px-4 py-3 border rounded-lg focus:ring-secondary focus:border-secondary transition"
                            placeholder={field.label}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Work Experience
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={form.experience}
                      onChange={onChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-secondary focus:border-secondary transition"
                      placeholder="e.g. 2 years security"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Additional Information <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-secondary focus:border-secondary transition resize-none"
                      placeholder="Your goals, destinations, questions…"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full btn-primary py-3 text-lg"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Details */}
          <div>
            <SectionHeader
              icon={Users}
              subtitle="CONTACT INFORMATION"
              title="Reach Our Team"
              description="Choose your preferred channel below."
            />
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <Card
                  key={idx}
                  className="shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1"
                >
                  <CardContent className="flex items-start p-6">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                      <info.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold">
                        {info.title}
                      </h3>
                      {info.items.map((item, i) => (
                        <p key={i} className="text-foreground font-medium">
                          {item}
                        </p>
                      ))}
                      <p className="mt-2 text-sm text-muted-foreground">
                        {info.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social */}
            <Card className="mt-8 bg-secondary/5">
              <CardContent className="p-6 text-center">
                <h3 className="mb-4 text-lg font-semibold text-secondary-foreground">
                  Follow Us
                </h3>
                <div className="flex justify-center space-x-4">
                  {[Facebook, Twitter, Instagram].map((Icon, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="text-secondary hover:text-secondary-foreground transition"
                    >
                      <Icon className="h-6 w-6" />
                    </Link>
                  ))}
                </div>
                <p className="mt-2 text-sm text-secondary-foreground/80">
                  Stay updated on job openings & announcements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-muted/10">
        <div className="container text-center">
          <SectionHeader
            icon={MapPin}
            subtitle="VISIT US"
            title="Our Kampala Office"
            description="Walk-in consultations & document drop-off welcome."
            centered
          />
          <div className="mx-auto mt-8 max-w-md rounded-lg bg-gray-200 p-8">
            <MapPin className="mx-auto mb-4 h-12 w-12 text-secondary" />
            <p className="font-medium">Mengo, Behind Sir Apollo Kaggwa Primary School</p>
            <p className="mt-1 text-sm">P.O. Box 5633, Kampala, Uganda</p>
          </div>
        </div>
      </section>
    </div>
  )
}
