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
    "Licensed ethical recruitment connecting Ugandan job seekers and international employers through verified opportunities, documented process controls, and worker protection.",
  menuDescription:
    "Two clear routes: apply for verified opportunities or partner with Freshmind for workforce sourcing.",
  footerLead:
    "Freshmind's public platform is designed to reduce uncertainty: official channels, verified opportunities, documented process steps, and practical support before and after deployment.",
  footerSummary:
    "Freshmind helps candidates pursue legal overseas opportunities while helping employers access screened Ugandan talent through a compliance-led recruitment model.",
  footerTrustLine:
    "Official channels. Documented contracts. Work-visa process. Receipted fees only.",
  opengraphSupport:
    "Licensed recruitment. Verified openings. Candidate and employer pathways.",
} as const

export const homePageCopy = {
  metadata: {
    title: "Jobs Abroad for Ugandans | Licensed Recruitment Agency in Uganda",
    description:
      "Find verified jobs abroad for Ugandans in the UAE, Qatar, Saudi Arabia, Jordan, and Poland. Freshmind International is a licensed recruitment agency in Uganda with interview booking, candidate support, and documented recruitment steps.",
  },
  hero: {
    eyebrow: "",
    title: "Verified Jobs Abroad for Ugandans",
    description:
      "Freshmind International is a licensed recruitment agency in Uganda helping job seekers apply for verified overseas opportunities through clear screening, interview booking, and worker-first recruitment.",
    image: "heroRecruitment",
    proofLine: `MGLSD Licensed • UAERA Aligned • License No. ${siteConfig.licenseNumber}`,
    candidateCta: {
      label: "View Opportunities",
      href: "/opportunities",
    },
    employerCta: {
      label: "About Freshmind",
      href: "/about",
    },
  } satisfies HeroCopy & {
    candidateCta: { label: string; href: string }
    employerCta: { label: string; href: string }
  },
  trustSection: {
    eyebrow: "Trust Signals",
    title: "Proof should be visible before anyone commits documents, money, or travel.",
    description:
      "Freshmind prioritizes public signals that candidates, families, and hiring partners can verify independently.",
  } satisfies SectionCopy,
  trustBadges: [
    {
      label: "Licensing",
      value: "MGLSD licensed",
      detail: `Operations are presented under License No. ${siteConfig.licenseNumber}.`,
    },
    {
      label: "Industry standards",
      value: "UAERA aligned",
      detail:
        "Recruitment process language is aligned to ethical labor migration principles.",
    },
    {
      label: "Safety model",
      value: "Work-visa-first",
      detail:
        "Travel is framed around legal work documentation and pre-departure readiness.",
    },
    {
      label: "Fee language",
      value: "Documented and receipted",
      detail:
        "Any required charge is communicated through official channels and should be formally receipted.",
    },
  ],
  process: {
    eyebrow: "How the Process Works",
    title: "A professional route should feel structured at every stage.",
    description:
      "Each step exists to reduce guesswork for candidates and improve fit quality for employers.",
  } satisfies SectionCopy,
  processSteps: [
    {
      title: "Review role and eligibility",
      body:
        "Candidates begin with a published role, destination, requirements, and interview pathway.",
    },
    {
      title: "Register and submit profile",
      body:
        "Applicants choose a slot, provide details, and receive a reference for official follow-up.",
    },
    {
      title: "Screening and document checks",
      body:
        "Freshmind verifies candidate readiness before shortlist decisions and employer matching.",
    },
    {
      title: "Contract briefing and preparation",
      body:
        "Selected candidates are guided through contract terms, expectations, and pre-departure preparation.",
    },
    {
      title: "Deployment and welfare follow-up",
      body:
        "Post-placement support channels remain available for clarification and case escalation.",
    },
  ],
  featuredOpenings: {
    eyebrow: "Featured Opportunities",
    title: "Apply through live openings with visible screening routes.",
    description:
      "Each opening includes destination, requirements, schedule logic, and safety reminders before registration.",
  } satisfies SectionCopy,
  salarySnapshot: {
    eyebrow: "Salary and Benefits Snapshot",
    title: "Compensation should be discussed early, with role and market context.",
    description:
      "Ranges vary by role, destination, and employer contract. Published figures are directional, not guarantees.",
    salaryBands: [
      { sector: "General placements", range: "UGX 1.2M - UGX 2.9M equivalent" },
      { sector: "Security services", range: "UGX 1.5M - UGX 2.5M equivalent" },
      { sector: "Transport and logistics", range: "UGX 1.8M - UGX 2.9M equivalent" },
      { sector: "Hospitality and support", range: "UGX 1.2M - UGX 2.0M equivalent" },
    ],
    benefits: [
      "Work-visa processing support and documented contracts.",
      "Accommodation and transport support based on employer terms.",
      "Medical coverage framework aligned to host-country requirements.",
      "Pre-departure briefings on rights, safety, and workplace expectations.",
    ],
    disclaimer:
      "Final compensation and benefits depend on specific role, employer contract, and host-country labor rules.",
  },
  antiScam: {
    eyebrow: "Anti-Scam Essentials",
    title: "Verify first. Act second.",
    description:
      "Use official channels, check ministry verification links, and avoid rushed instructions from unofficial agents.",
    points: [
      "Confirm communication against Freshmind's published phone numbers and email.",
      "Reject instructions to travel on visitor or tourist visas for work placement.",
      "Do not hand over original documents to brokers or unverified middlemen.",
      "Treat payment requests as valid only when documented and receipted through official process.",
    ],
    ctaLabel: "Open Safety Guide",
    ctaHref: "/why-freshmind",
  },
  employerBlock: {
    eyebrow: "For Employers",
    title: "Source screened Ugandan talent through a compliance-led recruitment partner.",
    description:
      "Freshmind supports employers with role scoping, candidate sourcing, screening coordination, documentation pathways, and pre-departure readiness.",
    points: [
      "Sector-focused sourcing across security, transport, hospitality, construction, and support roles.",
      "Structured shortlisting and candidate preparation before deployment decisions.",
      "Documentation-aware workflow designed to reduce onboarding risk.",
    ],
    primaryCta: {
      label: "Contact Employer Desk",
      href: "/contact",
    },
    secondaryCta: {
      label: "About Freshmind",
      href: "/about",
    },
  },
  nextStep: {
    eyebrow: "Take the Next Step",
    title: "Apply for a verified opening or contact the team through official channels.",
    description:
      "If you are a job seeker, start with active opportunities. If you are an employer, use the employer pathway for hiring support.",
  } satisfies SectionCopy,
} as const

export const aboutPageCopy = {
  metadata: {
    title: "About Freshmind",
    description:
      "Learn how Freshmind International operates as a licensed recruitment agency in Uganda for verified jobs abroad, candidate screening, employer partnerships, and worker support.",
  },
  hero: {
    eyebrow: "About Freshmind",
    title: "A licensed Ugandan recruitment company focused on verified overseas placement.",
    description:
      "Freshmind International Ltd connects skilled and unskilled Ugandan workers to reputable employers across the Middle East and selected European markets. Its company profile centers on legal migration pathways, documented process, and worker protection from screening through deployment.",
    image: "trustDesk",
  } satisfies HeroCopy,
  heroMetrics: [
    {
      label: "License",
      value: siteConfig.licenseNumber,
      detail: "Presented as Freshmind's published MGLSD labor recruitment license.",
    },
    {
      label: "Destination markets",
      value: "5+",
      detail: "UAE, Qatar, Saudi Arabia, Jordan, and Poland are named in the profile.",
    },
    {
      label: "Employment sectors",
      value: "7",
      detail: "Security, transport, hospitality, cleaning, construction, retail, and healthcare.",
    },
  ],
  overview: {
    eyebrow: "Company Overview",
    title: "Freshmind was set up to connect Ugandan talent and international demand more responsibly.",
    description:
      "The company profile presents Freshmind as a recruitment business built around lawful documentation, verified employers, and practical preparation before travel. The model goes beyond matching a worker to a vacancy. It includes screening, contract clarity, pre-departure orientation, and post-placement support.",
  } satisfies SectionCopy,
  overviewPoints: [
    "Uganda-based labor recruitment agency serving overseas employers.",
    "Focused on both skilled and unskilled workforce placement.",
    "Recruitment routes emphasize fair wages, legal contracts, and safe working conditions.",
    "Operations are framed around compliance, transparency, and worker welfare.",
  ],
  mission:
    "To empower Ugandan job seekers with safe, reliable, and well-structured employment opportunities abroad, ensuring dignity, fair wages, and career growth in compliance with global labor standards.",
  vision:
    "To become the leading recruitment agency in Uganda and East Africa, recognized for ethical labor migration, professionalism, and strong partnerships with reputable international employers.",
  operatingFacts: [
    {
      label: "Support model",
      value: "End-to-end",
      detail: "Freshmind describes support from document review to deployment and worker follow-up.",
    },
    {
      label: "Migration stance",
      value: "Work-visa-first",
      detail: "Travel and placement are framed around legal work documentation rather than informal routes.",
    },
    {
      label: "Candidate preparation",
      value: "Structured screening",
      detail: "Document checks, interviews, contract briefings, and orientation are built into the process.",
    },
    {
      label: "Employer network",
      value: "Sector based",
      detail: "Partnerships are grouped by industry demand across security, transport, hospitality, construction, and care.",
    },
  ],
  services: {
    eyebrow: "Core Services",
    title: "The business model combines recruitment, preparation, and worker support.",
    description:
      "Freshmind's profile describes a full recruitment lifecycle for overseas employment, not just vacancy advertising.",
  } satisfies SectionCopy,
  servicePillars: [
    {
      title: "International job placement",
      description:
        "Matching Ugandan candidates with verified employers across multiple overseas sectors.",
    },
    {
      title: "Document review and screening",
      description:
        "Checking candidate readiness, supporting authenticity review, and improving fit before shortlisting.",
    },
    {
      title: "Pre-departure training",
      description:
        "Preparing workers for workplace culture, safety expectations, and labor-rights awareness.",
    },
    {
      title: "Visa and contract processing",
      description:
        "Supporting work visa documentation and formal contracts that clarify role, salary, and benefits.",
    },
    {
      title: "Travel and relocation support",
      description:
        "Coordinating deployment steps such as flights, transfers, and settlement guidance where contracts require it.",
    },
    {
      title: "Worker welfare support",
      description:
        "Maintaining communication after placement and helping address disputes or welfare concerns when needed.",
    },
  ],
  process: {
    eyebrow: "Recruitment Path",
    title: "The company profile describes a structured route from application to deployment.",
    description:
      "Freshmind positions process clarity as a protection tool for both workers and employers.",
  } satisfies SectionCopy,
  processSteps: [
    "Review the opening, destination, and eligibility requirements before proceeding.",
    "Submit candidate details and supporting documents for verification.",
    "Attend screening, interviews, or technical assessments where the role requires them.",
    "Receive contract briefing, pre-departure training, and role expectation guidance.",
    "Complete work-visa and travel steps before deployment and follow up through official support channels.",
  ],
  markets: {
    eyebrow: "Markets and Sectors",
    title: "Freshmind's published focus stays clear about where it recruits and what roles it supports.",
    description:
      "The profile names destination markets and job families so candidates and employers can understand the shape of the recruitment business early.",
  } satisfies SectionCopy,
  compliance: {
    eyebrow: "Compliance and Protection",
    title: "Regulation and worker safety are presented as operating rules, not decorative claims.",
    description:
      "Freshmind states that overseas placement should stay lawful, documented, and aligned to worker-protection standards at every stage.",
  } satisfies SectionCopy,
  compliancePoints: [
    `Freshmind operates under MGLSD License No. ${siteConfig.licenseNumber}.`,
    "The company profile aligns operations with UAERA expectations for responsible labor recruitment.",
    "Employers are meant to be vetted before workers move into deployment stages.",
    "Candidates are expected to travel on valid work visas, not visitor or tourist visas.",
    "Contracts are used to define salary, benefits, responsibilities, and key employment terms.",
    "Pre-departure training and worker follow-up are treated as part of the support model.",
  ],
  partnerships: {
    eyebrow: "Partnership Model",
    title: "Employer relationships are grouped by sector and destination demand.",
    description:
      "The company profile lists employer and industry relationships across security, facilities, transport, hospitality, construction, retail, and healthcare. Active hiring still depends on current employer demand and signed contracts.",
  } satisfies SectionCopy,
  partnerGroups: [
    {
      title: "Security and facilities",
      partners: ["G4S", "AMNCO Security", "Certis Security", "Rangers Security Services", "Ejadah Facilities Management"],
    },
    {
      title: "Hospitality and cleaning",
      partners: ["Power International Facilities Management", "Duserv Facilities Management", "Al Bilad Company for Recruitment", "Musaned"],
    },
    {
      title: "Transport and logistics",
      partners: ["Emirates Taxi", "Mowasalat Qatar", "Elitzam Group"],
    },
    {
      title: "Construction, retail, and care",
      partners: ["Infracare", "QatarGas", "Etisalat", "Trust Bridge Recruitment", "Hospitals and private clinics"],
    },
  ],
  nextStep: {
    eyebrow: "Take the Next Step",
    title: "Explore live opportunities or speak to the team through official channels.",
    description:
      "If you are considering overseas work, start with published openings and role requirements. If you need clarification on the company, contact Freshmind directly using the public phone lines and email.",
    primaryCta: {
      label: "View opportunities",
      href: "/opportunities",
    },
    secondaryCta: {
      label: "Contact Freshmind",
      href: "/contact",
    },
  },
} as const

export const whyFreshmindPageCopy = {
  metadata: {
    title: "Why Freshmind",
    description:
      "Verify Freshmind's license, office contacts, recruitment process, and anti-scam checks before applying for jobs abroad from Uganda.",
  },
  hero: {
    eyebrow: "Why Freshmind",
    title: "Process clarity is the main trust signal.",
    description:
      "Freshmind's strongest differentiator is a visible process framework: official channels, documented screening, and worker-protection safeguards.",
    image: "trustDesk",
  } satisfies HeroCopy,
  credibility: {
    eyebrow: "What Makes the Process Credible",
    title: "Trust grows when candidates can check claims themselves.",
    description:
      "Freshmind's public proof points are designed to be checkable before anyone proceeds.",
  } satisfies SectionCopy,
  credibilityPoints: [
    {
      title: "Licensed operation",
      body:
        `Freshmind cites MGLSD License No. ${siteConfig.licenseNumber} and aligns process language with recognized recruitment guidance.`,
    },
    {
      title: "Verified opportunity model",
      body:
        "Role publication, requirements, and screening flow are displayed before registration.",
    },
    {
      title: "Work-visa-focused pathway",
      body:
        "The public process emphasizes legal employment documentation over informal travel routes.",
    },
    {
      title: "Preparation and follow-up",
      body:
        "Candidate readiness, contract briefing, and post-placement support are treated as part of core operations.",
    },
  ],
  signals: {
    eyebrow: "What Candidates Can Verify",
    title: "You should not need a middleman to understand a legitimate process.",
    description:
      "The site keeps critical signals visible: office channels, licensing references, process steps, and verification guidance.",
  } satisfies SectionCopy,
  publicSignals: [
    "Published office phone numbers, email, and location.",
    "Government verification links for agency and recruitment checks.",
    "Role-level requirements and interview routes.",
    "Verification guidance on fraud, payments, and documentation handling.",
  ],
} as const

export const safetyPageCopy = {
  metadata: {
    title: "Safety and Anti-Scam Guide",
    description:
      "Verify channels, understand fee language, spot red flags, and follow official reporting paths before acting on any job instruction.",
  },
  hero: {
    eyebrow: "Safety and verification",
    title: "Protect your documents, money, and decisions with a verification-first approach.",
    description:
      "This guide helps candidates and families confirm what is official, identify suspicious behavior, and respond through the right channels.",
    image: "trustDesk",
  } satisfies HeroCopy,
  checklist: {
    eyebrow: "Before You Respond",
    title: "Every opportunity should pass basic legitimacy checks.",
    description:
      "Use these checks before sharing documents, sending money, or accepting travel instructions.",
  } satisfies SectionCopy,
  checklistSteps: [
    "Verify the message source against Freshmind's published phone numbers and email.",
    "Confirm the role and destination match the published opportunity details.",
    "Ask for documented process steps, including screening, contracts, and visa pathway.",
    "Confirm travel is linked to a valid work-visa process.",
  ],
  redFlags: [
    "Unofficial brokers claiming they can fast-track placement outside published process.",
    "Pressure to pay quickly without formal explanation or receipt.",
    "Requests to hand over original documents to unverified individuals.",
    "Promises of guaranteed placement or guaranteed income regardless of screening.",
    "Instructions to use visitor/tourist visas for employment.",
  ],
  safeguards: [
    "Employer and role verification before deployment stages proceed.",
    "Written contracts describing role, salary framework, and core benefits.",
    "Pre-departure briefings covering rights, safety, and culture.",
    "Ongoing communication and escalation support for worker concerns.",
    "Encouragement to register with Ugandan embassy contacts in host countries.",
  ],
  officialDomains: [
    "freshmindinternational.com",
    "eemis.mglsd.go.ug",
    "esmis.mglsd.go.ug",
    "ilo.org",
  ],
  feePolicy: {
    title: "Payment and fee policy",
    description:
      "Where charges apply, they should be explained clearly through official channels and supported by formal receipts. Avoid undocumented or rushed payment requests.",
  },
  reportingPath: [
    "Pause immediately if an instruction feels suspicious.",
    "Contact Freshmind through published office numbers for confirmation.",
    "Cross-check agency details through EEMIS and related ministry channels.",
    "Keep screenshots, receipts, and references for any follow-up review.",
  ],
} as const

export const contactPageCopy = {
  metadata: {
    title: "Contact Freshmind",
    description:
      "Contact Freshmind to verify job offers, follow up on interview booking, or discuss overseas hiring needs with a licensed recruitment agency in Uganda.",
  },
  hero: {
    eyebrow: "Contact Freshmind",
    title: "Official channels for candidate support and employer hiring needs.",
    description:
      "Use this page to verify communication, follow up on registrations, ask process questions, or discuss employer workforce requirements.",
    image: "trustDesk",
  } satisfies HeroCopy,
  intro: {
    eyebrow: "Office Access",
    title: "Contact details are part of the trust system.",
    description:
      "Candidates, families, and employers should be able to verify who they are speaking with and what next steps are valid.",
  } satisfies SectionCopy,
  candidateReasons: [
    "Confirm role fit, document readiness, or interview logistics.",
    "Follow up using a registration reference after submission.",
    "Clarify process steps, safety concerns, or communication authenticity.",
    "Request guidance on documentation, contracts, or deployment preparation.",
  ],
  employerReasons: [
    "Request workforce sourcing support for active hiring needs.",
    "Discuss role requirements, candidate profiles, and screening expectations.",
    "Align on compliance and deployment documentation workflows.",
  ],
  preparation: [
    "Opportunity title, destination, or category you are asking about.",
    "Your registration reference if you have already applied.",
    "Current document status, especially passport readiness.",
    "Any suspicious message or payment request you want verified.",
  ],
  officeHours: [
    "Monday - Friday: 8:00 AM - 6:00 PM",
    "Saturday: 9:00 AM - 3:00 PM",
    "Sunday and Public Holidays: Closed",
  ],
} as const

export const opportunitiesPageCopy = {
  metadata: {
    title: "Verified Jobs Abroad for Ugandans",
    description:
      "Browse verified jobs abroad for Ugandans with destination, salary context, requirements, and interview booking details for the UAE, Qatar, Saudi Arabia, Jordan, and Poland.",
  },
  hero: {
    eyebrow: "Active opportunities",
    title: "Verified jobs abroad for Ugandans",
    description:
      "Browse live openings with destination, role requirements, salary context, and interview booking guidance from a licensed recruitment agency in Uganda.",
    image: "travelReadiness",
  } satisfies HeroCopy,
  intro: {
    eyebrow: "How to Use This Page",
    title: "Read first, confirm fit, then register.",
    description:
      "Prioritize factual checks: destination, role requirements, interview route, and safety reminders before submitting your profile.",
  } satisfies SectionCopy,
  guidePoints: [
    "Start with destination and category fit.",
    "Check documents and experience requirements carefully.",
    "Register only through the published route linked to each opening.",
    "Use official contacts when any instruction feels unclear.",
  ],
  registrationGuidance: {
    eyebrow: "Before You Register",
    title: "Prepare once, apply confidently.",
    description:
      "A complete profile and document readiness reduce delays during screening and follow-up.",
    points: [
      "Select a slot you can attend on time with originals where required.",
      "Keep your phone active for official follow-up and reminders.",
      "Store your registration reference immediately after submission.",
      "Review the safety guide before responding to any payment request.",
    ],
  } satisfies SectionCopy & { points: string[] },
} as const

export const employersPageCopy = {
  metadata: {
    title: "For Employers",
    description:
      "Partner with Freshmind to source screened Ugandan talent through a documented, compliance-led recruitment process.",
  },
  hero: {
    eyebrow: "For Employers",
    title: "Build dependable workforce pipelines through a structured recruitment partner.",
    description:
      "Freshmind supports employers with sourcing, screening coordination, candidate preparation, and documentation-aware deployment workflows.",
    image: "interviewSuite",
  } satisfies HeroCopy,
  valueSection: {
    eyebrow: "Why Partner with Freshmind",
    title: "Hiring support should balance speed, fit, and compliance.",
    description:
      "Freshmind's employer pathway is designed to help partners reduce uncertainty while improving candidate readiness.",
  } satisfies SectionCopy,
  valuePoints: [
    {
      title: "Screened candidate pipeline",
      body:
        "Role-specific sourcing and shortlist support across high-demand sectors.",
    },
    {
      title: "Documented process controls",
      body:
        "Structured steps from job request to interview scheduling and deployment preparation.",
    },
    {
      title: "Compliance-aware delivery",
      body:
        "Process design emphasizes legal migration pathways and transparent documentation.",
    },
    {
      title: "Candidate readiness focus",
      body:
        "Briefings and pre-departure preparation support more stable onboarding outcomes.",
    },
  ],
  process: {
    eyebrow: "Vetting and Delivery Model",
    title: "A clear framework for employer demand and candidate supply.",
    description:
      "Each stage is visible to reduce mismatch risk and improve hiring reliability.",
  } satisfies SectionCopy,
  processSteps: [
    "Employer role scoping and requirements alignment.",
    "Candidate sourcing and preliminary fit screening.",
    "Interview coordination and shortlist communication.",
    "Contract and documentation readiness workflow.",
    "Pre-departure preparation and deployment support.",
  ],
  deliveryPoints: [
    "Sector-aligned hiring support across security, logistics, hospitality, construction, and support functions.",
    "Candidate communication and readiness standards designed to reduce no-shows and documentation delays.",
    "Official process communication that supports safer and more accountable recruitment.",
  ],
  cta: {
    eyebrow: "Start an Employer Conversation",
    title: "Share your hiring requirements and Freshmind will guide the next step.",
    description:
      "Use the contact pathway to discuss demand planning, candidate profile needs, and process timelines.",
    primaryLabel: "Contact Employer Desk",
    primaryHref: "/contact",
    secondaryLabel: "Browse Candidate Sectors",
    secondaryHref: "/job-categories",
  },
} as const

export const salaryBenefitsPageCopy = {
  metadata: {
    title: "Salary and Benefits",
    description:
      "Understand salary ranges, benefits frameworks, contract context, and worker safeguards across Freshmind recruitment pathways.",
  },
  hero: {
    eyebrow: "Salary and benefits",
    title: "Set clear expectations on compensation, benefits, and contract conditions.",
    description:
      "Compensation details vary by role, destination, and employer contract. This page provides directional guidance to help candidates ask informed questions.",
    image: "travelReadiness",
  } satisfies HeroCopy,
  salarySection: {
    eyebrow: "Indicative Salary Ranges",
    title: "Ranges are directional and role-dependent.",
    description:
      "Published figures are approximate equivalents and should be confirmed at contract stage.",
  } satisfies SectionCopy,
  salaryRows: [
    { role: "General placements", range: "UGX 1.2M - UGX 2.9M equivalent" },
    { role: "Security guards", range: "UGX 1.5M - UGX 2.5M equivalent" },
    { role: "Hospitality and hotel support", range: "UGX 1.2M - UGX 2.0M equivalent" },
    { role: "Drivers and logistics", range: "UGX 1.8M - UGX 2.9M equivalent" },
    { role: "Construction and skilled work", range: "UGX 1.5M - UGX 2.7M equivalent" },
  ],
  benefitsFramework: [
    "Employment visa and legal documentation support.",
    "Accommodation and transport support where provided under contract.",
    "Medical coverage arrangements under host-country frameworks.",
    "Meal or living support for eligible categories depending on terms.",
    "End-of-service and leave considerations where contractually applicable.",
  ],
  contractNotes: [
    "Salary, overtime, and allowances should be clearly documented before travel.",
    "Candidates should review role duties, contract duration, and benefits in writing.",
    "Any fees communicated should be documented and receipted through official channels.",
  ],
  safeguards: [
    "Pre-departure rights and safety briefing before deployment.",
    "Post-placement communication channels for welfare concerns.",
    "Escalation support for disputes through official pathways.",
  ],
  disclaimer:
    "Final compensation and benefits depend on employer contract, destination-country labor rules, and verified role conditions at the time of placement.",
} as const
