export type Industry = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  typicalProjects: string[];
  cta: string;
};

export const industries: Industry[] = [
  {
    slug: "coaches-consultants",
    name: "Coaches & Consultants",
    headline: "Sell the outcome, not the hour.",
    description:
      "Your clients buy transformation, not sessions. We build authority sites with clear offers, proof and a booking path that turns readers into discovery calls.",
    typicalProjects: ["Authority website", "Booking funnel", "Lead-magnet landing page"],
    cta: "Book more discovery calls",
  },
  {
    slug: "professional-services",
    name: "Legal, Finance & Agencies",
    headline: "Look as credible as your advice.",
    description:
      "Trust is the product. We design restrained, corporate sites with team pages, service depth and contact paths that respect how professionals buy.",
    typicalProjects: ["Corporate website", "Practice-area pages", "Team & careers pages"],
    cta: "Win higher-value retainers",
  },
  {
    slug: "health-wellness",
    name: "Clinics & Wellness",
    headline: "Reassure before they arrive.",
    description:
      "Patients choose the clinic that feels safe online. Service pages, doctor profiles, hours, directions and one-tap calling and WhatsApp — plus the words and local search that lead them there.",
    typicalProjects: ["Clinic website", "Practitioner profiles", "Appointment funnel"],
    cta: "Fill your appointment book",
  },
  {
    slug: "home-services",
    name: "Home Services & Trades",
    headline: "Be the obvious call in an emergency.",
    description:
      "Plumbers, electricians, cleaners, movers: customers search on their phone and call the first credible result. We make that you — with local SEO baked in.",
    typicalProjects: ["Lead-gen website", "Service-area pages", "Google Business setup"],
    cta: "Own your service area",
  },
  {
    slug: "saas-startups",
    name: "SaaS & Startups",
    headline: "Explain it in five seconds.",
    description:
      "Investor decks and waitlists need a site that states the value prop instantly. Product-led pages, docs-ready structure and launch analytics included.",
    typicalProjects: ["Marketing site", "Waitlist landing page", "Docs & changelog setup"],
    cta: "Launch with a site that converts",
  },
  {
    slug: "hospitality-tourism",
    name: "Safari, Hotels & Hospitality",
    headline: "Sell the trip before the trip.",
    description:
      "Travelers book the experience they can picture. Galleries, itineraries, reviews and Mobile Money / card-ready booking paths for tours, lodges and restaurants.",
    typicalProjects: ["Booking website", "Tour & itinerary pages", "Review & gallery systems"],
    cta: "Take direct bookings",
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    headline: "Turn browsers into buyers.",
    description:
      "Product pages that answer every doubt, checkout with Mobile Money and cards, and post-purchase emails — built to convert on a mid-range Android phone.",
    typicalProjects: ["Storefront build", "Product page redesign", "Checkout optimization"],
    cta: "Sell online across Uganda",
  },
  {
    slug: "nonprofits-education",
    name: "NGOs & Education",
    headline: "Make donors and parents believe.",
    description:
      "Impact pages, transparent reporting, donation paths and admissions funnels — designed for trust and built to survive low bandwidth.",
    typicalProjects: ["NGO website", "Donation funnel", "School admissions site"],
    cta: "Fund your mission",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
