import type { ImageAssetKey } from "@/lib/freshmind/presentation"
import { siteConfig } from "@/lib/site"

type HeroCopy = {
  eyebrow: string
  title: string
  description: string
  image: ImageAssetKey
  proofLine?: string
}

type SectionCopy = {
  eyebrow: string
  title: string
  description: string
}

export const companyDestinations = [
  "United Arab Emirates (UAE)",
  "Qatar",
  "Saudi Arabia",
  "Jordan",
  "Poland",
]

export const companySectors = [
  "Security",
  "Transport and logistics",
  "Hospitality and domestic work",
  "Cleaning and maintenance",
  "Construction and skilled work",
  "Retail and customer service",
  "Healthcare",
]

export const globalEditorialCopy = {
  siteDescription:
    "Licensed ethical recruitment for Ugandan job seekers pursuing verified overseas opportunities through documented process, worker protection, and official support.",
  menuDescription:
    "Verified opportunities, official channels, and structured interview booking through Freshmind's published process.",
  footerLead:
    "The public site repeats the same signals the recruitment process depends on: official channels, verified employers, transparent contracts, and clear next steps.",
  footerSummary:
    "Freshmind helps Ugandan job seekers pursue verified overseas work through a licensed process grounded in documentation, preparation, and worker support before departure and after placement.",
  footerTrustLine:
    "Official channels only. Verified employers. Transparent contracts. Clear interview references.",
  opengraphSupport:
    "Licensed process. Clear next steps. Official verification links.",
} as const

export const homePageCopy = {
  metadata: {
    title: "Promoting Ethical Recruitment",
    description:
      "Freshmind International connects Ugandan job seekers to verified overseas employers through a licensed, structured recruitment process built around compliance, worker protection, and support before departure and after placement.",
  },
  hero: {
    eyebrow: "Freshmind International",
    title: "Promoting Ethical Recruitment",
    description:
      "Freshmind International connects Ugandan job seekers to verified overseas employers through a licensed, structured recruitment process built around compliance, worker protection, and support before departure and after placement.",
    image: "heroRecruitment",
    proofLine: `MGLSD Licensed • UAERA Aligned • License No. ${siteConfig.licenseNumber}`,
  } satisfies HeroCopy,
  licensedPath: {
    eyebrow: "A Licensed Path to Overseas Work",
    title: "Freshmind works through regulation, documentation, and verified employer relationships.",
    description:
      "Freshmind International Ltd is a licensed Ugandan recruitment agency connecting skilled and unskilled workers to reputable employers across the Middle East and Europe. Its public process is built on employer verification, documented contracts, lawful travel preparation, and worker support that continues after placement.",
  } satisfies SectionCopy,
  licensedProofs: [
    {
      label: "Regulatory standing",
      value: "Licensed by MGLSD",
      detail: "Freshmind operates under License No. E24050019.",
    },
    {
      label: "Industry alignment",
      value: "UAERA guidance",
      detail: "The company positions itself inside recognized recruitment standards.",
    },
    {
      label: "Employer checks",
      value: "Verified employers abroad",
      detail: "Overseas partners are reviewed before worker placement proceeds.",
    },
    {
      label: "Worker readiness",
      value: "Contracts and training",
      detail: "Documentation and pre-departure preparation are part of the process.",
    },
  ],
  process: {
    eyebrow: "How Freshmind Works",
    title: "The process is meant to be followed, not guessed.",
    description:
      "Each step is designed to reduce uncertainty for candidates and families by making the route into overseas work more visible and more disciplined.",
  } satisfies SectionCopy,
  processSteps: [
    {
      title: "Eligibility and registration",
      body:
        "Candidates begin through Freshmind's official channels after reviewing the role, destination, and requirements that apply to them.",
    },
    {
      title: "Document verification",
      body:
        "Passports, national ID, certificates, and supporting records are checked before interviews and employer matching move forward.",
    },
    {
      title: "Screening and interview",
      body:
        "Shortlisted applicants go through screening and role-fit interviews tied to the employer's stated job requirements.",
    },
    {
      title: "Contract and training",
      body:
        "Selected workers receive formal contracts and pre-departure training covering rights, safety, workplace culture, and expectations.",
    },
    {
      title: "Deployment and support",
      body:
        "Freshmind supports visa processing, travel preparation, and post-placement communication when workers need guidance.",
    },
  ],
  placements: {
    eyebrow: "Where Freshmind Places Workers",
    title: "The company recruits across established destination markets and practical employment sectors.",
    description:
      "The attached company profile positions Freshmind around demand-led sectors where Ugandan workers can move through structured recruitment rather than informal speculation.",
  } satisfies SectionCopy,
  protections: {
    eyebrow: "What Freshmind Protects",
    title: "Worker protection is described as part of the process, not added after the fact.",
    description:
      "The company profile emphasizes legal documentation, work visas, pre-departure briefings, contract clarity, and continued welfare support as part of credible recruitment.",
    quote:
      "Freshmind International follows a zero-exploitation policy, ensuring that all workers receive fair treatment, transparent contracts, and secure job placements.",
  },
  protectionPoints: [
    "Employers are verified before workers are matched and deployed.",
    "Contracts set out job responsibilities, salary, and benefits before travel.",
    "Workers receive pre-departure training covering rights, culture, and safety.",
    "The company states that it remains in communication with workers after placement and offers dispute guidance where needed.",
  ],
  nextStep: {
    eyebrow: "Take the Next Step",
    title: "Start with a verified opening or speak to Freshmind directly.",
    description:
      "The simplest route forward is still the clearest one: review the current openings, confirm fit, and use Freshmind's published contact channels when you need clarification.",
  } satisfies SectionCopy,
} as const

export const aboutPageCopy = {
  metadata: {
    title: "About Freshmind",
    description:
      "Read Freshmind International's company profile, mission, regulatory standing, destination markets, and worker-support model.",
  },
  hero: {
    eyebrow: "About Freshmind",
    title: "A Ugandan recruitment company built around compliance, employer verification, and worker support.",
    description:
      "Freshmind International Ltd presents itself as a licensed and accredited labor recruitment agency connecting Ugandan workers to reputable employers across the Middle East and Europe through a structured, documented process.",
    image: "trustDesk",
  } satisfies HeroCopy,
  background: {
    eyebrow: "Company Background",
    title: "Freshmind was established to bridge Ugandan job seekers and reputable employers abroad.",
    description:
      "The company profile describes Freshmind as a professional recruitment agency responding to demand for skilled and unskilled labor in overseas markets while keeping the process legal, structured, and regulated.",
  } satisfies SectionCopy,
  mission:
    "To empower Ugandan job seekers with safe, reliable, and well-structured employment opportunities abroad, ensuring dignity, fair wages, and career growth in compliance with global labor standards.",
  vision:
    "To become the leading recruitment agency in Uganda and East Africa, recognized for ethical labor migration, professionalism, and strong partnerships with reputable international employers.",
  services: {
    eyebrow: "What Freshmind Provides",
    title: "The company profile frames recruitment as a full process, not a single transaction.",
    description:
      "Freshmind's public service model combines international placement, documentation support, training, travel preparation, and welfare follow-up rather than stopping at interview coordination.",
  } satisfies SectionCopy,
  servicePoints: [
    "International job placement with verified employers.",
    "Visa and documentation processing support.",
    "Pre-departure training and workplace orientation.",
    "Travel and relocation preparation.",
    "Worker welfare follow-up and dispute guidance.",
  ],
  growth: {
    eyebrow: "Regulatory Standing",
    title: "Licensing, partnerships, and worker protection are presented as the company's operating foundation.",
    description:
      "The company profile ties Freshmind's credibility to MGLSD licensing, UAERA alignment, destination-market partnerships, and continued efforts to modernize worker management and fraud prevention.",
  } satisfies SectionCopy,
} as const

export const whyFreshmindPageCopy = {
  metadata: {
    title: "Why Freshmind",
    description:
      "See how Freshmind positions its recruitment process around compliance, employer verification, documented contracts, and worker support.",
  },
  hero: {
    eyebrow: "Why Freshmind",
    title: "The difference is meant to be visible in the process, not hidden in slogans.",
    description:
      "Freshmind's company profile makes the case through regulation, employer verification, transparent contracts, training, and worker follow-up rather than broad brand language alone.",
    image: "trustDesk",
  } satisfies HeroCopy,
  credibility: {
    eyebrow: "What Makes the Process Credible",
    title: "Freshmind's strongest proof points are concrete and checkable.",
    description:
      "The site should lead with the signals candidates and families can actually evaluate: licensing, official channels, documented requirements, and visible steps.",
  } satisfies SectionCopy,
  credibilityPoints: [
    {
      title: "Licensed and accredited",
      body:
        "Freshmind states that it operates under MGLSD License No. E24050019 and follows UAERA guidance.",
    },
    {
      title: "Verified employer relationships",
      body:
        "The company profile emphasizes agreements with reputable employers across the Middle East and Europe before worker placement.",
    },
    {
      title: "Work-visa-only approach",
      body:
        "The regulatory section makes lawful travel documentation part of the public standard, not a back-office detail.",
    },
    {
      title: "Training before departure",
      body:
        "Pre-departure briefings cover labor rights, workplace culture, safety, and the expectations attached to each role.",
    },
  ],
  signals: {
    eyebrow: "What Candidates Can Verify",
    title: "Freshmind should be legible to candidates before they commit to a next step.",
    description:
      "The strongest trust pattern is public information: official office channels, licensing references, destination-market clarity, and role requirements that do not need a middleman to explain.",
  } satisfies SectionCopy,
  publicSignals: [
    "Official office lines and a physical office location in Kampala.",
    "MGLSD licensing and government verification pathways.",
    "Published destination markets and employment sectors.",
    "A documented route from screening to contract to departure.",
  ],
} as const

export const safetyPageCopy = {
  metadata: {
    title: "Safety and Anti-Scam Guide",
    description:
      "Verify Freshmind's official channels, employer checks, work-visa process, and worker-protection standards before you act.",
  },
  hero: {
    eyebrow: "Safety and verification",
    title: "Verify the process before you commit to it.",
    description:
      "Freshmind's public safety guidance should help candidates and families confirm what is official, reject what is suspicious, and understand how ethical recruitment is supposed to work.",
    image: "trustDesk",
  } satisfies HeroCopy,
  checklist: {
    eyebrow: "Before You Respond to Any Offer",
    title: "A credible recruitment route should stand up to basic checks.",
    description:
      "The company profile gives enough operational detail to build a simple candidate checklist before documents are shared or travel is discussed.",
  } satisfies SectionCopy,
  checklistSteps: [
    "Confirm that the message matches Freshmind's published office numbers, email, or location.",
    "Check that the role, destination, and employer details are consistent with Freshmind's stated sectors and markets.",
    "Ask whether the process includes documented screening, contract signing, and pre-departure training.",
    "Confirm that travel will happen on a valid work visa, not a visitor or tourist visa.",
  ],
  redFlags: [
    "Messages from unofficial numbers, email addresses, or brokers claiming to act on Freshmind's behalf.",
    "Pressure to move forward without documented screening, contract review, or role verification.",
    "Instructions to travel on a visitor or tourist visa instead of a work visa.",
    "Requests to surrender original documents to an unverified middleman.",
    "Unexplained payment demands that are not part of a documented company process.",
  ],
  safeguards: [
    "Employer verification before placement is approved.",
    "Transparent contracts outlining job role, salary, and benefits.",
    "Pre-departure briefings on labor rights, expectations, and workplace culture.",
    "Ongoing communication and dispute guidance after deployment where needed.",
    "Advice for workers to register with the Ugandan Embassy in the host country for added support.",
  ],
} as const

export const contactPageCopy = {
  metadata: {
    title: "Contact",
    description:
      "Reach Freshmind through its published office lines, email, and address, and know what to prepare before you call or visit.",
  },
  hero: {
    eyebrow: "Contact Freshmind",
    title: "Official channels, official office, clear next step.",
    description:
      "Candidates and families should be able to verify who they are speaking to, why they are calling, and what information will make the conversation useful.",
    image: "trustDesk",
  } satisfies HeroCopy,
  intro: {
    eyebrow: "Office Access",
    title: "The contact page should function like a checkpoint, not a decorative footer link.",
    description:
      "Freshmind's published numbers, office address, and email are part of the trust system. They help candidates compare any message they receive against the agency's actual public information.",
  } satisfies SectionCopy,
  contactReasons: [
    "Candidates confirming whether a role fits their documents or experience.",
    "Families verifying whether a message, schedule, or instruction is official.",
    "Registered applicants following up with a reference number after screening.",
    "Workers or relatives needing support on documentation, placement, or next steps.",
  ],
  preparation: [
    "The opening title or destination you are calling about.",
    "Your registration reference, if you already completed a booking.",
    "Your current document status, including passport readiness.",
    "Any specific question about screening, contracts, travel preparation, or welfare support.",
  ],
} as const

export const opportunitiesPageCopy = {
  metadata: {
    title: "Active Opportunities",
    description:
      "Browse verified Freshmind openings with clear destination, requirements, and interview routes before you register.",
  },
  hero: {
    eyebrow: "Active opportunities",
    title: "Choose a verified opening and then follow the published process.",
    description:
      "Each role should help candidates understand where the job is, what documents are expected, and how the screening route works before registration begins.",
    image: "travelReadiness",
  } satisfies HeroCopy,
  intro: {
    eyebrow: "How to Use This Page",
    title: "Read the role, confirm the route, then act.",
    description:
      "The opportunities page should stay factual: destination, job category, requirements, schedule, and next step. Candidates should not need extra marketing language to know whether a role is relevant.",
  } satisfies SectionCopy,
  guidePoints: [
    "Check the destination and job category first.",
    "Review document and experience requirements before registering.",
    "Use only the published screening route tied to the opening.",
    "Contact Freshmind if any instruction around the role feels unclear.",
  ],
} as const
