import type {
  CategoryContent,
  FaqItem,
  Opportunity,
  RepositoryStore,
  ServiceContent,
  SuccessStory,
  Testimonial,
  TrustSignal,
  Venue,
} from "@/lib/freshmind/types"

export const categoryContent: Record<string, CategoryContent> = {
  security: {
    slug: "security",
    label: "Security services",
    eyebrow: "Trusted deployment",
    description:
      "Structured security roles with formal contracts, verified shifts, and organized deployment support.",
    examples: ["Security guards", "CCTV operators", "Gate access staff"],
    destinations: ["UAE", "Qatar", "Saudi Arabia"],
    heroMetric: "1,800 current screening seats",
  },
  transport: {
    slug: "transport",
    label: "Transport and logistics",
    eyebrow: "Driver and logistics hiring",
    description:
      "Driving, baggage handling, and logistics roles for candidates with clean records and practical experience.",
    examples: ["Taxi drivers", "Bus drivers", "Baggage handlers"],
    destinations: ["UAE", "Qatar", "Jordan"],
    heroMetric: "3 live interview regions",
  },
  hospitality: {
    slug: "hospitality",
    label: "Hospitality and cleaning",
    eyebrow: "Service roles abroad",
    description:
      "Hotel, facility management, and guest-service opportunities with accommodation and welfare guidance.",
    examples: ["Housekeepers", "Waiters", "Facility cleaners"],
    destinations: ["UAE", "Saudi Arabia", "Qatar"],
    heroMetric: "72-hour screening feedback",
  },
  construction: {
    slug: "construction",
    label: "Construction and skilled work",
    eyebrow: "Skilled trades",
    description:
      "Skilled and semi-skilled openings for workers ready for structured site environments and compliance training.",
    examples: ["Electricians", "Masons", "Plumbers"],
    destinations: ["Saudi Arabia", "UAE", "Qatar"],
    heroMetric: "Pre-departure safety briefs included",
  },
  healthcare: {
    slug: "healthcare",
    label: "Healthcare support",
    eyebrow: "Care-focused roles",
    description:
      "Caregiver and support roles requiring empathy, documentation readiness, and interview preparation.",
    examples: ["Caregivers", "Patient aides", "Support assistants"],
    destinations: ["Saudi Arabia", "UAE", "Qatar"],
    heroMetric: "Document checks before interview day",
  },
  retail: {
    slug: "retail",
    label: "Retail and customer service",
    eyebrow: "Frontline commercial roles",
    description:
      "Customer-facing placements for candidates with communication skills, presentation, and service discipline.",
    examples: ["Cashiers", "Store assistants", "Sales staff"],
    destinations: ["UAE", "Qatar", "Poland"],
    heroMetric: "English-readiness coaching available",
  },
}

export const serviceContent: ServiceContent[] = [
  {
    slug: "job-placements",
    title: "Verified job placements",
    summary:
      "We source active openings through formal employer relationships and publish only roles that have clear interview and deployment pathways.",
    highlights: [
      "Screened demand from destination employers",
      "Region-based interview scheduling for candidates",
      "Transparent role, salary, and document expectations",
    ],
  },
  {
    slug: "training",
    title: "Interview and pre-departure readiness",
    summary:
      "Candidates receive guidance on interview conduct, destination expectations, documentation, and safe migration practices.",
    highlights: [
      "Interview briefing and preparation support",
      "Pre-departure orientation for selected candidates",
      "Plain-language contract and expectations review",
    ],
  },
  {
    slug: "support",
    title: "Worker welfare and case handling",
    summary:
      "Freshmind maintains support channels for complaints, clarification, grievance escalation, and welfare follow-up.",
    highlights: [
      "Escalation path for worker complaints",
      "Family and candidate guidance before travel",
      "Referral to official verification and reporting channels",
    ],
  },
]

export const venues: Venue[] = [
  {
    id: "venue-kampala",
    name: "Freshmind Kampala Office",
    city: "Kampala",
    region: "Central",
    address: "Mengo, Behind Sir Apollo Kaggwa Primary School",
    mapUrl: "https://maps.google.com/?q=Mengo+Kampala+Uganda",
    notes: "Bring originals for ID and document checks.",
  },
  {
    id: "venue-mbarara",
    name: "Western Region Interview Hub",
    city: "Mbarara",
    region: "Western",
    address: "Town Centre partner venue, Mbarara City",
    mapUrl: "https://maps.google.com/?q=Mbarara+City+Uganda",
    notes: "Venue address is confirmed on your registration slip.",
  },
  {
    id: "venue-gulu",
    name: "Northern Region Interview Hub",
    city: "Gulu",
    region: "Northern",
    address: "Central business district partner venue, Gulu",
    mapUrl: "https://maps.google.com/?q=Gulu+Uganda",
    notes: "Arrive 30 minutes before your assigned slot.",
  },
]

export const seededOpenings: Opportunity[] = [
  {
    id: "opening-security-uae",
    slug: "security-officers-uae",
    title: "Security Officers for UAE Facilities",
    category: "security",
    status: "active",
    featured: true,
    summary:
      "A high-volume intake for disciplined candidates ready for mall, residential, and facility security assignments in the UAE.",
    destinationCountry: "United Arab Emirates",
    destinationCity: "Dubai and Abu Dhabi",
    employer: "Verified Gulf facilities employer",
    openingsCount: 180,
    salaryRange: "UGX 1.8M - 2.6M equivalent",
    contractDuration: "24 months",
    closingDate: "2026-05-12",
    postedDate: "2026-04-15",
    benefits: [
      "Accommodation arranged by employer",
      "Transport to and from work site",
      "Pre-departure compliance briefing",
      "Medical coverage support",
    ],
    requirements: [
      "Age 21-35 preferred",
      "Good conduct and clean presentation",
      "Readable English and shift discipline",
      "Passport or proof of passport process",
    ],
    documents: [
      "National ID copy",
      "Passport copy or application proof",
      "Academic or training certificates",
      "Two recent passport photos",
    ],
    processHighlights: [
      "Interview shortlisting happens by slot confirmation",
      "Candidates receive venue reminders before screening",
      "Selected candidates move to document verification and briefing",
    ],
    interviewRegions: ["Kampala", "Mbarara", "Gulu"],
    visaSupport: "Visa processing begins after interview selection and employer approval.",
    accommodation:
      "Employer-provided accommodation or housing arrangement before deployment.",
    transport: "Transport support is employer-led and confirmed in the final brief.",
    feePolicy:
      "This intake follows published screening instructions, documented requirements, and official Freshmind follow-up.",
    trustNote:
      "This intake follows a verified schedule and all screening happens through Freshmind's listed channels only.",
  },
  {
    id: "opening-driver-qatar",
    slug: "professional-drivers-qatar",
    title: "Professional Drivers for Qatar Fleet Operations",
    category: "transport",
    status: "active",
    featured: true,
    summary:
      "Screening for experienced drivers and logistics candidates with documented experience and a strong safety record.",
    destinationCountry: "Qatar",
    destinationCity: "Doha",
    employer: "Verified transport operations partner",
    openingsCount: 96,
    salaryRange: "UGX 2.0M - 2.9M equivalent",
    contractDuration: "24 months",
    closingDate: "2026-05-09",
    postedDate: "2026-04-16",
    benefits: [
      "Employer onboarding and route orientation",
      "Housing or housing allowance",
      "Medical support package",
      "Performance-linked overtime options",
    ],
    requirements: [
      "Driving experience with references",
      "Valid permit or equivalent driving history",
      "Comfort with city and shift schedules",
      "Passport readiness preferred",
    ],
    documents: [
      "National ID",
      "Driving permit copy",
      "Employment reference or experience note",
      "Passport or receipt",
    ],
    processHighlights: [
      "Initial screening verifies driving history",
      "Shortlisted candidates receive role-specific briefings",
      "Deployment proceeds after contract review and documentation",
    ],
    interviewRegions: ["Kampala", "Mbarara"],
    visaSupport: "Freshmind coordinates the employer-side visa pathway after selection.",
    accommodation: "Accommodation terms are disclosed before contract acceptance.",
    transport: "Work transport arrangements are role-specific and confirmed after offer.",
    feePolicy:
      "Role requirements, interview route, and next steps are communicated through Freshmind's official channels for this intake.",
    trustNote:
      "Candidates should only respond to communication from Freshmind's published channels and office teams.",
  },
  {
    id: "opening-hospitality-saudi",
    slug: "hotel-support-teams-saudi-arabia",
    title: "Hotel Support Teams for Saudi Arabia",
    category: "hospitality",
    status: "active",
    featured: false,
    summary:
      "Hospitality and cleaning opportunities for candidates who present well and can follow structured service standards.",
    destinationCountry: "Saudi Arabia",
    destinationCity: "Riyadh and Jeddah",
    employer: "Verified hospitality management group",
    openingsCount: 140,
    salaryRange: "UGX 1.5M - 2.2M equivalent",
    contractDuration: "24 months",
    closingDate: "2026-05-20",
    postedDate: "2026-04-18",
    benefits: [
      "Accommodation and duty meals",
      "Team-based onboarding",
      "Medical support and welfare escalation",
      "Structured shift rosters",
    ],
    requirements: [
      "Service mindset and communication discipline",
      "Clean presentation",
      "Readiness for shift work",
      "Basic documentation readiness",
    ],
    documents: [
      "National ID copy",
      "Passport photos",
      "Any service or work reference",
      "Passport or application proof",
    ],
    processHighlights: [
      "Role fit is assessed during the interview day",
      "Selected candidates receive next-step guidance in writing",
      "Briefings cover service culture and candidate safety",
    ],
    interviewRegions: ["Kampala", "Gulu"],
    visaSupport: "Visa processing is handled after employer confirmation.",
    accommodation: "Accommodation is coordinated under employer terms.",
    transport: "Transport support is described in final employer briefings.",
    feePolicy:
      "Candidates move through written next-step guidance and official office communication for this intake.",
    trustNote:
      "Any request for payment outside Freshmind's official office process should be treated as suspicious.",
  },
  {
    id: "opening-construction-saudi",
    slug: "construction-trades-saudi-arabia",
    title: "Construction Trades for Saudi Arabia Projects",
    category: "construction",
    status: "upcoming",
    featured: false,
    summary:
      "Upcoming intake for skilled and semi-skilled site workers including electricians, masons, and general construction crew.",
    destinationCountry: "Saudi Arabia",
    destinationCity: "Riyadh",
    employer: "Verified infrastructure contractor",
    openingsCount: 120,
    salaryRange: "UGX 1.9M - 3.1M equivalent",
    contractDuration: "24 months",
    closingDate: "2026-06-02",
    postedDate: "2026-04-19",
    benefits: [
      "Trade-specific deployment briefings",
      "Accommodation support",
      "Structured site safety orientation",
      "Medical check coordination",
    ],
    requirements: [
      "Construction experience or demonstrable trade skill",
      "Physical readiness",
      "Safety-minded work record",
      "Passport readiness encouraged",
    ],
    documents: [
      "National ID",
      "Any trade certificate",
      "Employer or foreman reference",
      "Passport documentation",
    ],
    processHighlights: [
      "Interview slots open once the intake is activated",
      "Candidates are screened for trade fit",
      "Selected candidates move into documentation and briefing",
    ],
    interviewRegions: ["Kampala"],
    visaSupport: "Visa support starts after employer-side trade selection.",
    accommodation: "Accommodation terms are shared before contract acceptance.",
    transport: "Transport support depends on worksite allocation.",
    feePolicy:
      "Interview dates are announced only after the intake is activated and official screening instructions are published.",
    trustNote:
      "Freshmind will announce live interview dates on the site and through official numbers only.",
  },
]

export const seededStore: RepositoryStore = {
  openings: seededOpenings,
  venues,
  slots: [
    {
      id: "slot-sec-kla-1",
      openingId: "opening-security-uae",
      venueId: "venue-kampala",
      date: "2026-04-24",
      startTime: "09:00",
      endTime: "11:00",
      capacity: 35,
      note: "Security screening and document triage",
      status: "open",
    },
    {
      id: "slot-sec-mba-1",
      openingId: "opening-security-uae",
      venueId: "venue-mbarara",
      date: "2026-04-26",
      startTime: "10:00",
      endTime: "12:00",
      capacity: 28,
      note: "Regional screening day",
      status: "open",
    },
    {
      id: "slot-sec-gulu-1",
      openingId: "opening-security-uae",
      venueId: "venue-gulu",
      date: "2026-04-29",
      startTime: "09:30",
      endTime: "11:30",
      capacity: 24,
      note: "Northern region interview day",
      status: "open",
    },
    {
      id: "slot-driver-kla-1",
      openingId: "opening-driver-qatar",
      venueId: "venue-kampala",
      date: "2026-04-25",
      startTime: "08:30",
      endTime: "10:30",
      capacity: 30,
      note: "Bring any driving records and references",
      status: "open",
    },
    {
      id: "slot-driver-mba-1",
      openingId: "opening-driver-qatar",
      venueId: "venue-mbarara",
      date: "2026-04-30",
      startTime: "11:00",
      endTime: "13:00",
      capacity: 18,
      note: "Driver intake screening",
      status: "open",
    },
    {
      id: "slot-hosp-kla-1",
      openingId: "opening-hospitality-saudi",
      venueId: "venue-kampala",
      date: "2026-04-27",
      startTime: "09:00",
      endTime: "11:00",
      capacity: 32,
      note: "Hospitality and cleaning screening",
      status: "open",
    },
    {
      id: "slot-hosp-gulu-1",
      openingId: "opening-hospitality-saudi",
      venueId: "venue-gulu",
      date: "2026-05-03",
      startTime: "10:00",
      endTime: "12:00",
      capacity: 20,
      note: "Northern region hospitality intake",
      status: "open",
    },
  ],
  registrations: [],
}

export const trustSignals: TrustSignal[] = [
  {
    title: "Placements delivered",
    value: "7,000+",
    detail: "Ugandan job seekers placed across the Gulf and broader Middle East pipeline.",
  },
  {
    title: "Regions activated",
    value: "3",
    detail: "Interview registration available across Central, Western, and Northern Uganda.",
  },
  {
    title: "Process clarity",
    value: "Published next steps",
    detail: "Candidates can see role requirements, screening routes, and official follow-up guidance.",
  },
  {
    title: "License verified",
    value: "MGLSD E24050019",
    detail: "Public verification guidance is included on the safety and trust pages.",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "story-1",
    name: "Sarah N.",
    district: "Wakiso",
    role: "Hospitality worker in Riyadh",
    quote:
      "Freshmind explained the process clearly, told me what documents mattered, and never sold me false promises. I knew when to show up, what to carry, and what the next step would be.",
  },
  {
    id: "story-2",
    name: "Moses O.",
    district: "Mbarara",
    role: "Driver in Doha",
    quote:
      "The interview registration was straightforward and the staff kept communication official and consistent. That made it easy to trust the process.",
  },
  {
    id: "story-3",
    name: "Patricia A.",
    district: "Gulu",
    role: "Security officer in Dubai",
    quote:
      "What helped most was the preparation. I understood the interview standards, the documentation checks, and how to verify any information before acting on it.",
  },
  {
    id: "story-4",
    name: "Brian K.",
    district: "Kampala",
    role: "Warehouse assistant in Abu Dhabi",
    quote:
      "I liked that the instructions were simple. I knew where to go, which documents to carry, and who to call when I needed to confirm something.",
  },
  {
    id: "story-5",
    name: "Joan T.",
    district: "Masaka",
    role: "Care worker in Riyadh",
    quote:
      "Freshmind did not rush me. They explained the interview process, the contract terms, and what I needed to sort out before travel.",
  },
  {
    id: "story-6",
    name: "Hassan M.",
    district: "Jinja",
    role: "Driver in Doha",
    quote:
      "Most agencies talk too much and explain too little. Here, the follow-up was clear, the screening date was clear, and I always knew the next step.",
  },
]

export const successStories: SuccessStory[] = [
  {
    id: "case-1",
    title: "From district screening to Gulf deployment",
    summary:
      "Freshmind now runs a more structured interview flow so candidates outside Kampala can register for verified slots instead of waiting for rumors and middlemen.",
    outcome: "Reduced travel uncertainty and faster screening coordination.",
  },
  {
    id: "case-2",
    title: "Worker protection starts before travel",
    summary:
      "Our interview and briefing process is designed to make expectations clear before any candidate commits time, documents, or travel arrangements.",
    outcome: "Stronger trust signals and better-prepared shortlisted candidates.",
  },
  {
    id: "case-3",
    title: "Verification-first communication",
    summary:
      "Freshmind points job seekers to official ministry verification channels so every candidate knows how to confirm the legitimacy of the agency and the opportunity.",
    outcome: "Safer decision-making and lower scam exposure.",
  },
]

export const faqItems: FaqItem[] = [
  {
    question: "How do I handle a payment request or extra charge?",
    answer:
      "Use Freshmind's published office channels to confirm whether any charge or third-party requirement is official before you act. Do not rely on brokers, personal numbers, or rushed instructions.",
  },
  {
    question: "Can I register if I do not yet have a passport?",
    answer:
      "Yes. Some openings allow passport-in-process candidates to register, but passport readiness may affect how fast you can move after shortlisting.",
  },
  {
    question: "How do I confirm an interview is genuine?",
    answer:
      "Use Freshmind's published numbers, verify the agency through the Ministry channels linked on this site, and ignore any unofficial request for payment, passport retention, or rushed promises.",
  },
  {
    question: "How will I know my registration went through?",
    answer:
      "After submitting the form, you receive a registration reference on-screen. Use that reference whenever you contact Freshmind about your interview slot.",
  },
  {
    question: "Can I book for a region outside Kampala?",
    answer:
      "Yes. Active openings show the currently published venues and dates. Seats are released per venue, and once full, that slot closes automatically.",
  },
]

export function createSeedStore(): RepositoryStore {
  return JSON.parse(JSON.stringify(seededStore)) as RepositoryStore
}
