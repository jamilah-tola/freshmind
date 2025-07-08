"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { Phone, Mail, MapPin, Clock, Users, Send, Facebook, Twitter, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobCategory: "",
    experience: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Application submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+256 783 183 252", "+256 704 231 665"],
      description: "Call us for immediate assistance and job inquiries",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["freshmindinternational@gmail.com"],
      description: "Send us your application documents and queries",
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Mengo, Behind Sir Apollo Kaggwa Primary School", "P.O. Box 5633, Kampala, Uganda"],
      description: "Visit our office for walk-in consultations",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 3:00 PM"],
      description: "We're here to help during business hours",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact FreshMind International</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Ready to start your international employment journey? Get in touch with our recruitment experts for
              personalized guidance and job placement assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <SectionHeader
                icon={Send}
                subtitle="APPLY NOW"
                title="Start Your Application"
                description="Fill out the form below to begin your journey to international employment opportunities."
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="jobCategory" className="block text-sm font-medium text-gray-700 mb-2">
                      Job Category of Interest
                    </label>
                    <select
                      id="jobCategory"
                      name="jobCategory"
                      value={formData.jobCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    >
                      <option value="">Select a job category</option>
                      {jobCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Work Experience
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Brief description of your work experience"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
                    placeholder="Tell us about your employment goals, preferred destination countries, and any specific questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 w-full text-lg font-semibold"
                >
                  Submit Application
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <SectionHeader
                icon={Users}
                subtitle="CONTACT INFORMATION"
                title="Get in Touch With Us"
                description="Multiple ways to reach our recruitment team for job applications and inquiries."
              />

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-900 font-medium">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="mt-8 bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-red-900 mb-4">Follow Us on Social Media</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-red-600 hover:text-red-800 transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-800 transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-800 transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-red-700 text-sm mt-2">
                    Stay updated with latest job opportunities and recruitment announcements
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={MapPin}
            subtitle="VISIT OUR OFFICE"
            title="FreshMind International Office"
            description="Located in Mengo, Kampala with easy access for walk-in consultations and document submission."
            centered
          />

          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Office Location</p>
              <p className="text-sm">Mengo, Behind Sir Apollo Kaggwa Primary School</p>
              <p className="text-sm">P.O. Box 5633, Kampala, Uganda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Send}
            subtitle="APPLICATION REQUIREMENTS"
            title="Documents You Need"
            description="Prepare these documents before visiting our office or submitting your application."
            centered
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Required Documents</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Valid Ugandan Passport (6+ months validity)</li>
                    <li>• National ID Copy</li>
                    <li>• 10 Passport Photos (white background)</li>
                    <li>• Academic Certificates (O-Level, A-Level, etc.)</li>
                    <li>• Certificate of Good Conduct</li>
                    <li>• Interpol Clearance Certificate</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Additional Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Reference Letter (for experienced candidates)</li>
                    <li>• Driver's License (for transport jobs)</li>
                    <li>• Fitness Certificate (for security jobs)</li>
                    <li>• Vocational Training Certificates</li>
                    <li>• Medical Examination (if required)</li>
                    <li>• Registration Fee Payment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
