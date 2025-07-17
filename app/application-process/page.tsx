// app/application-process/page.tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactBanner } from "@/components/ui/contact-banner"
import {
  FileText,
  CheckCircle,
  Clock,
  Users,
  MessageSquare,
  Download,
  AlertCircle,
  Shield,
  Plane,
  Phone,
  ChevronDown,
} from "lucide-react"
import PageHeader from "@/components/layout/pageHeader"

export default function ApplicationProcessPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    education: "",
    category: "",
    experience: "",
    country: "",
    passport: "",
    notes: "",
  })

  const onChange = (e: React.ChangeEvent<any>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submitWhatsApp = () => {
    const text = `*FreshMind Intl Application*%0A
*Name:* ${form.fullName}%0A
*Phone:* ${form.phone}%0A
*Email:* ${form.email}%0A
*Age:* ${form.age}%0A
*Education:* ${form.education}%0A
*Category:* ${form.category}%0A
*Experience:* ${form.experience}%0A
*Country:* ${form.country}%0A
*Passport:* ${form.passport}%0A
*Notes:* ${form.notes}`
    window.open(`https://wa.me/256783183252?text=${encodeURIComponent(text)}`, "_blank")
  }

  const steps = [
    {
      step: "01",
      icon: FileText,
      title: "Submit via WhatsApp",
      desc: "Fill and send your details instantly for priority handling.",
      time: "5 min",
    },
    {
      step: "02",
      icon: CheckCircle,
      title: "Document Check",
      desc: "Bring originals for verification at our office.",
      time: "1–2 days",
    },
    {
      step: "03",
      icon: Users,
      title: "Interview & Match",
      desc: "Skills assessment and employer matching.",
      time: "3–5 days",
    },
    {
      step: "04",
      icon: Shield,
      title: "Contract & Training",
      desc: "Sign agreement and attend pre-departure briefing.",
      time: "1–2 weeks",
    },
    {
      step: "05",
      icon: Plane,
      title: "Visa & Travel",
      desc: "Visa processing, medicals, and flight booking.",
      time: "2–8 weeks",
    },
  ]

  const docs = [
    "Ugandan passport (valid ≥6 months)",
    "National ID copy",
    "10 passport photos (white bg)",
    "Academic certificates",
    "Good conduct certificate",
    "Interpol clearance",
    "Reference letter",
    "Medical certificate",
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        title="Application Process"
        subtitle="A clear 5-step journey to your international career. Submit via WhatsApp for fast tracking."
      />

      {/* Steps */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Clock}
            subtitle="HOW IT WORKS"
            title="Our 5-Step Process"
            description="Everything you need from application to deployment."
            centered
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Card key={i} className="shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                      {s.step}
                    </div>
                    <s.icon className="ml-4 h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="flex-1 text-muted-foreground mb-4">{s.desc}</p>
                  <span className="self-end text-sm font-medium text-secondary">{s.time}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <SectionHeader
            icon={MessageSquare}
            subtitle="APPLY NOW"
            title="Send Your Application"
            description="Complete the form below and tap to submit via WhatsApp."
            centered
          />

          <Card className="mx-auto max-w-2xl shadow-xl">
            <CardContent className="p-8 grid gap-6 md:grid-cols-2">
              {[
                { label: "Full Name", name: "fullName", type: "text", req: true },
                { label: "Phone", name: "phone", type: "tel", req: true },
                { label: "Email", name: "email", type: "email", req: true },
                { label: "Age", name: "age", type: "number", req: true },
                {
                  label: "Education",
                  name: "education",
                  type: "select",
                  options: ["Primary","O-Level","A-Level","Diploma","Degree","Masters"],
                  req: true,
                },
                {
                  label: "Job Category",
                  name: "category",
                  type: "select",
                  options: ["Security","Transport","Hospitality","Construction","Healthcare","Retail"],
                  req: true,
                },
                { label: "Experience", name: "experience", type: "text" },
                {
                  label: "Preferred Country",
                  name: "country",
                  type: "select",
                  options: ["UAE","Qatar","Saudi Arabia","Jordan","Poland"],
                  req: true,
                },
                {
                  label: "Valid Passport?",
                  name: "passport",
                  type: "select",
                  options: ["Yes (6+ months)","Expired","No"],
                  req: true,
                },
                {
                  label: "Additional Notes",
                  name: "notes",
                  type: "textarea",
                },
              ].map((f, i) => (
                <div key={i} className="flex flex-col">
                  <label className="mb-1 font-medium">
                    {f.label}{f.req && <span className="text-red-600">*</span>}
                  </label>
                  {f.type === "select" ? (
                    <select
                      name={f.name}
                      required={f.req}
                      value={(form as any)[f.name]}
                      onChange={onChange}
                      className="px-4 py-3 border rounded-lg focus:ring-secondary focus:border-secondary"
                    >
                      <option value="">Select {f.label}</option>
                      {f.options!.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  ) : f.type === "textarea" ? (
                    <textarea
                      name={f.name}
                      rows={4}
                      value={(form as any)[f.name]}
                      onChange={onChange}
                      className="px-4 py-3 border rounded-lg focus:ring-secondary focus:border-secondary resize-none"
                      placeholder="Any additional info…"
                    />
                  ) : (
                    <input
                      type={f.type}
                      name={f.name}
                      required={f.req}
                      value={(form as any)[f.name]}
                      onChange={onChange}
                      className="px-4 py-3 border rounded-lg focus:ring-secondary focus:border-secondary"
                      placeholder={f.label}
                    />
                  )}
                </div>
              ))}

              <div className="md:col-span-2 text-center mt-4">
                <Button
                  onClick={submitWhatsApp}
                  className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Submit via WhatsApp</span>
                </Button>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sent directly to our WhatsApp for immediate review.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-muted/10">
        <div className="container">
          <SectionHeader
            icon={FileText}
            subtitle="DOCUMENT CHECKLIST"
            title="What to Prepare"
            description="Gather these before you come in for verification."
            centered
          />

          <div className="grid gap-8 md:grid-cols-2">
            {/* Essential Documents */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Essential Documents
                  </h3>
                </div>
                <ul className="grid gap-3 list-inside list-disc text-muted-foreground">
                  {docs.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Important Notes
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border-l-4 border-orange-200 bg-orange-50 p-4">
                    <p className="text-orange-800 text-sm">
                      <strong>Passport Validity:</strong> Must be valid for at least 6 months.
                    </p>
                  </div>
                  <div className="rounded-lg border-l-4 border-blue-200 bg-blue-50 p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Originals Required:</strong> Bring original documents; certified copies will be made on-site.
                    </p>
                  </div>
                  <div className="rounded-lg border-l-4 border-green-200 bg-green-50 p-4">
                    <p className="text-green-800 text-sm">
                      <strong>Registration Fee:</strong> A non-refundable fee is due when you submit your application.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Download Checklist */}
          {/* <div className="text-center mt-12">
            <Button className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-6 py-3">
              <Download className="h-5 w-5" />
              <span>Download Full Checklist</span>
            </Button>
          </div> */}
        </div>
      </section>


      {/* FAQ */}
      <section className="py-20 bg-muted/10">
        <div className="container">
          <SectionHeader
            icon={Phone}
            subtitle="FREQUENTLY ASKED"
            title="Application FAQs"
            description="Answers to the most common questions about your application."
            centered
          />

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                q: "How long does the application process take?",
                a: "From submission to deployment typically takes 4–12 weeks, depending on visa and matching timelines.",
              },
              {
                q: "What is the registration fee?",
                a: "There is a non-refundable registration fee. The exact amount will be shared during your consultation.",
              },
              {
                q: "Can I apply without a passport?",
                a: "Yes — we guide you through passport application. However, a valid passport is required before travel.",
              },
              {
                q: "My documents aren’t ready. Can I still apply?",
                a: "Absolutely. Submit your application now and complete any missing documents in parallel.",
              },
              {
                q: "Is there an age limit for applicants?",
                a: "Generally 21–45 years, though this may vary slightly by job category and destination country.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-card p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="font-semibold text-foreground">{faq.q}</h4>
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner
        message="Need help? Our team is here to assist you every step of the way."
        phoneNumber="+256 783 183 252"
      />
    </div>
  )
}
