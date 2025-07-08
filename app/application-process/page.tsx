"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactBanner } from "@/components/ui/contact-banner"
import {
  FileText,
  CheckCircle,
  Clock,
  Users,
  Phone,
  MessageSquare,
  Download,
  AlertCircle,
  Shield,
  Plane,
} from "lucide-react"

export default function ApplicationProcessPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    age: "",
    education: "",
    jobCategory: "",
    experience: "",
    preferredCountry: "",
    hasPassport: "",
    additionalInfo: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleWhatsAppSubmit = () => {
    const message = `*FreshMind International Job Application*

*Personal Information:*
Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Email: ${formData.email}
Age: ${formData.age}
Education: ${formData.education}

*Job Preferences:*
Job Category: ${formData.jobCategory}
Experience: ${formData.experience}
Preferred Country: ${formData.preferredCountry}
Has Valid Passport: ${formData.hasPassport}

*Additional Information:*
${formData.additionalInfo}

I am interested in applying for international employment opportunities through FreshMind International.`

    const whatsappNumber = "256783183252" // FreshMind's WhatsApp number
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  const processSteps = [
    {
      step: "01",
      title: "Submit Application",
      description: "Complete the online application form and submit via WhatsApp for immediate processing.",
      icon: FileText,
      duration: "5 minutes",
    },
    {
      step: "02",
      title: "Document Verification",
      description: "Visit our office with required documents for verification and background checks.",
      icon: CheckCircle,
      duration: "1-2 days",
    },
    {
      step: "03",
      title: "Interview & Matching",
      description: "Undergo interview and skill assessment, then get matched with suitable employers.",
      icon: Users,
      duration: "3-5 days",
    },
    {
      step: "04",
      title: "Contract & Training",
      description: "Sign employment contract and complete pre-departure training program.",
      icon: Shield,
      duration: "1-2 weeks",
    },
    {
      step: "05",
      title: "Visa Processing",
      description: "Complete visa application, medical examination, and travel arrangements.",
      icon: Plane,
      duration: "2-8 weeks",
    },
  ]

  const requiredDocuments = [
    "Valid Ugandan Passport (minimum 6 months validity)",
    "National ID Copy",
    "10 Passport Photos (white background)",
    "Academic Certificates (O-Level, A-Level, Diploma, Degree)",
    "Certificate of Good Conduct",
    "Interpol Clearance Certificate",
    "Reference Letter (for experienced candidates)",
    "Medical Certificate (if required)",
  ]

  const jobCategories = [
    "Security Services",
    "Transport & Logistics",
    "Hospitality & Cleaning",
    "Construction & Skilled Work",
    "Healthcare",
    "Retail & Customer Service",
  ]

  const countries = ["United Arab Emirates (UAE)", "Qatar", "Saudi Arabia", "Jordan", "Poland"]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Application Process</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Start your journey to international employment with our simple, transparent application process. Submit
              your application via WhatsApp for immediate processing.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Clock}
            subtitle="HOW IT WORKS"
            title="5-Step Application Process"
            description="Our structured process ensures you're fully prepared for international employment success."
            centered
          />

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-red-600 font-medium">{step.duration}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={MessageSquare}
            subtitle="APPLY NOW"
            title="Submit Your Application via WhatsApp"
            description="Complete the form below and submit directly to our WhatsApp for immediate processing."
            centered
          />

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="+256 XXX XXX XXX"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      required
                      min="18"
                      max="65"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your age"
                    />
                  </div>

                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                      Education Level *
                    </label>
                    <select
                      id="education"
                      name="education"
                      required
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">Select education level</option>
                      <option value="Primary">Primary</option>
                      <option value="O-Level">O-Level</option>
                      <option value="A-Level">A-Level</option>
                      <option value="Certificate">Certificate</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Degree">Degree</option>
                      <option value="Masters">Masters</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="jobCategory" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Job Category *
                    </label>
                    <select
                      id="jobCategory"
                      name="jobCategory"
                      required
                      value={formData.jobCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">Select job category</option>
                      {jobCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="e.g., 2 years in security, 3 years in hospitality"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredCountry" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Country *
                    </label>
                    <select
                      id="preferredCountry"
                      name="preferredCountry"
                      required
                      value={formData.preferredCountry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">Select preferred country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="hasPassport" className="block text-sm font-medium text-gray-700 mb-2">
                      Do you have a valid passport? *
                    </label>
                    <select
                      id="hasPassport"
                      name="hasPassport"
                      required
                      value={formData.hasPassport}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes, valid for 6+ months</option>
                      <option value="Expired">Yes, but expired</option>
                      <option value="No">No, I need to apply</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                    placeholder="Any additional information about your skills, preferences, or questions..."
                  />
                </div>

                <div className="mt-8 text-center">
                  <Button
                    onClick={handleWhatsAppSubmit}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Submit via WhatsApp</span>
                  </Button>
                  <p className="text-sm text-gray-600 mt-2">
                    Your application will be sent directly to our WhatsApp for immediate processing
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={FileText}
            subtitle="DOCUMENT CHECKLIST"
            title="Required Documents"
            description="Prepare these documents before visiting our office for document verification."
            centered
          />

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircle className="w-6 h-6 text-red-600 mr-2" />
                      Essential Documents
                    </h3>
                    <div className="space-y-3">
                      {requiredDocuments.map((doc, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <AlertCircle className="w-6 h-6 text-orange-600 mr-2" />
                      Important Notes
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                        <p className="text-orange-800 text-sm">
                          <strong>Passport Validity:</strong> Your passport must be valid for at least 6 months from the
                          date of travel.
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-blue-800 text-sm">
                          <strong>Document Authenticity:</strong> All documents must be original and certified copies
                          will be made during verification.
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-green-800 text-sm">
                          <strong>Registration Fee:</strong> A non-refundable registration fee is required to initiate
                          the application process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 inline-flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Document Checklist</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner
        message="Need help with your application? Contact our recruitment team for assistance"
        phoneNumber="+256 783 183 252"
      />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            icon={Phone}
            subtitle="FREQUENTLY ASKED"
            title="Application Questions"
            description="Common questions about the application process and requirements."
            centered
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How long does the application process take?",
                answer:
                  "The complete process from application to deployment typically takes 4-12 weeks, depending on visa processing times and job matching.",
              },
              {
                question: "What is the registration fee?",
                answer:
                  "A non-refundable registration fee is required to initiate your application. The exact amount will be communicated during your consultation.",
              },
              {
                question: "Can I apply if I don't have a passport?",
                answer:
                  "Yes, you can apply and we will guide you through the passport application process. However, you'll need a valid passport before deployment.",
              },
              {
                question: "What if my documents are not ready?",
                answer:
                  "You can submit your initial application and we'll guide you on obtaining the required documents. Some documents can be processed in parallel.",
              },
              {
                question: "Is there an age limit for applications?",
                answer:
                  "Generally, applicants should be between 21-45 years old, though this varies by job category and destination country requirements.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
