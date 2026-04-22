import type { OpportunityCategory, SuccessStory } from "@/lib/freshmind/types"

export type ImageAssetKey =
  | "heroRecruitment"
  | "interviewSuite"
  | "travelReadiness"
  | "trustDesk"
  | "nightShift"

export type SectionTheme = "light" | "dark" | "accent"

export type HeroMetric = {
  label: string
  value: string
  detail?: string
}

export type HeroConfig = {
  eyebrow: string
  title: string
  description: string
  image: ImageAssetKey
  metrics?: HeroMetric[]
}

export type PromoCardConfig = {
  eyebrow: string
  title: string
  description: string
  href: string
  cta: string
  image: ImageAssetKey
  theme: SectionTheme
}

export type ProofRailItem = {
  label: string
  value: string
  detail?: string
  href?: string
}

export type EditorialSplitConfig = {
  eyebrow: string
  title: string
  description: string
  image: ImageAssetKey
  theme?: SectionTheme
  reverse?: boolean
  points?: string[]
}

export const imageAssets: Record<
  ImageAssetKey,
  { src: string; alt: string; ratio: string }
> = {
  heroRecruitment: {
    src: "/editorial/recruitment-hero.svg",
    alt: "Editorial placeholder showing a premium recruitment and travel-readiness scene.",
    ratio: "aspect-[4/5]",
  },
  interviewSuite: {
    src: "/editorial/interview-suite.svg",
    alt: "Editorial placeholder showing a refined interview lounge and screening environment.",
    ratio: "aspect-[16/11]",
  },
  travelReadiness: {
    src: "/editorial/travel-readiness.svg",
    alt: "Editorial placeholder showing candidate travel-readiness and document preparation.",
    ratio: "aspect-[16/11]",
  },
  trustDesk: {
    src: "/editorial/trust-desk.svg",
    alt: "Editorial placeholder showing an office trust and verification environment.",
    ratio: "aspect-[16/11]",
  },
  nightShift: {
    src: "/editorial/night-shift.svg",
    alt: "Editorial placeholder showing destination skyline confidence and shift-readiness.",
    ratio: "aspect-[16/11]",
  },
}

export const categoryVisuals: Record<
  OpportunityCategory,
  { image: ImageAssetKey; accentLabel: string }
> = {
  security: { image: "nightShift", accentLabel: "Shielded placements" },
  transport: { image: "travelReadiness", accentLabel: "Route-ready screening" },
  hospitality: { image: "interviewSuite", accentLabel: "Service discipline" },
  construction: { image: "nightShift", accentLabel: "Site-ready talent" },
  healthcare: { image: "trustDesk", accentLabel: "Care-first vetting" },
  retail: { image: "travelReadiness", accentLabel: "Frontline readiness" },
}

export const homeHeroConfig: HeroConfig = {
  eyebrow: "Uganda-wide interview registration",
  title:
    "Freshmind now feels like the kind of recruitment company a family would trust immediately.",
  description:
    "Verified openings, disciplined interview booking, no-fee recruitment, and a calmer premium experience for Ugandan job seekers moving toward real overseas opportunities.",
  image: "heroRecruitment",
  metrics: [
    {
      label: "Placements",
      value: "7,000+",
      detail: "Workers placed across structured overseas pathways.",
    },
    {
      label: "License",
      value: "E24050019",
      detail: "Published ministry-linked verification for candidate confidence.",
    },
    {
      label: "Candidate fees",
      value: "No recruitment fees",
      detail: "Interview access and placement are not sold to job seekers.",
    },
  ],
}

export const homePromoCards: PromoCardConfig[] = [
  {
    eyebrow: "Interview scheduling",
    title: "Candidates book a real seat instead of chasing rumors.",
    description:
      "Every active campaign leads with regions, seat counts, and a visible route into screening.",
    href: "/opportunities",
    cta: "Browse live openings",
    image: "interviewSuite",
    theme: "dark",
  },
  {
    eyebrow: "Verification-first",
    title: "Freshmind teaches people how to confirm what is real before they comply.",
    description:
      "Public verification links, published office channels, and anti-scam education now sit inside the experience.",
    href: "/safety",
    cta: "See the safety guide",
    image: "trustDesk",
    theme: "accent",
  },
]

export const homeProofRail: ProofRailItem[] = [
  {
    label: "Interview regions",
    value: "Kampala, Mbarara, Gulu",
    detail: "Regional publishing reduces wasted travel and guesswork.",
  },
  {
    label: "Verification",
    value: "EEMIS and ESMIS linked",
    detail: "Candidates can confirm legitimacy independently.",
  },
  {
    label: "Candidate handling",
    value: "Reference-led follow-up",
    detail: "Every registration enters a more organized support flow.",
  },
  {
    label: "Protection stance",
    value: "No unofficial payments",
    detail: "The anti-scam language is explicit and repeated.",
  },
]

export const homeEditorialSplit: EditorialSplitConfig = {
  eyebrow: "How the process works now",
  title: "The site no longer asks candidates to trust a promise. It shows the process.",
  description:
    "The new public experience balances premium design with practical clarity: published openings, slot booking, references, follow-up, and visible safety education.",
  image: "interviewSuite",
  points: [
    "Browse a verified opportunity with destination, requirements, and seat availability.",
    "Pick the region, date, and interview slot that works for you.",
    "Submit your details once and receive a registration reference immediately.",
    "Continue only through Freshmind's official channels and published office lines.",
  ],
}

export const narrativeMedia = {
  howItWorks: "interviewSuite" as ImageAssetKey,
  whyFreshmind: "trustDesk" as ImageAssetKey,
  successStories: "nightShift" as ImageAssetKey,
  safety: "trustDesk" as ImageAssetKey,
  faq: "travelReadiness" as ImageAssetKey,
  contact: "trustDesk" as ImageAssetKey,
  services: "interviewSuite" as ImageAssetKey,
  jobCategories: "travelReadiness" as ImageAssetKey,
  archive: "travelReadiness" as ImageAssetKey,
}

export const verificationRail: ProofRailItem[] = [
  {
    label: "EEMIS",
    value: "Verify the agency",
    detail: "Government-linked verification for agency legitimacy.",
    href: "https://eemis.mglsd.go.ug/",
  },
  {
    label: "ESMIS",
    value: "Understand migration systems",
    detail: "Public reference point for ethical labor mobility.",
    href: "https://esmis.mglsd.go.ug/",
  },
  {
    label: "ILO principles",
    value: "Fair recruitment",
    detail: "Worker-paid recruitment fees are not the standard Freshmind is designing around.",
    href: "https://www.ilo.org/publications/general-principles-and-operational-guidelines-fair-recruitment-and",
  },
]

export const storyOutcomeThemes: Record<
  SuccessStory["outcome"],
  SectionTheme
> = {
  "Registered and interviewed within one week": "accent",
  "Shortlisted with complete documentation and briefing": "light",
  "Family confidence improved before deployment": "dark",
}
