export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  service: string;
  /** Per-axis ratings, the Duck.design pattern (design.md §10). 5.0 max. */
  ratings: { quality: number; schedule: number; cost: number; referral: number };
};

/**
 * Client reviews from work we have delivered, published with each client's
 * permission. Never invent a review, and never edit one into something better
 * than what the client actually said.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "They asked about our patients before they asked about colors. The new site books appointments while we sleep — our front desk finally stopped apologizing for the old one.",
    name: "Dr. Sarah Namono",
    role: "Founder",
    company: "Pearl Dental Studio",
    service: "Website Design & Build",
    ratings: { quality: 5.0, schedule: 5.0, cost: 5.0, referral: 5.0 },
  },
  {
    quote:
      "Guests now message us on WhatsApp straight from the site and our direct bookings have taken off. The design makes the lodge look exactly as good as it feels in person.",
    name: "Brian Okello",
    role: "General Manager",
    company: "Kidepo Trails Lodge",
    service: "Website Design & Build",
    ratings: { quality: 5.0, schedule: 4.5, cost: 5.0, referral: 5.0 },
  },
  {
    quote:
      "I sent a questionnaire on a Monday and had a homepage I actually liked by Friday. My discovery calls doubled within a month — the words finally sound like me.",
    name: "Grace Achieng",
    role: "Executive Coach",
    company: "Achieng Coaching",
    service: "Website Design & Build",
    ratings: { quality: 5.0, schedule: 5.0, cost: 4.5, referral: 5.0 },
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "2–4", label: "weeks from kickoff to a live website" },
  { value: "100+", label: "websites built" },
  { value: "40+", label: "5-star reviews" },
  { value: "20+", label: "years of combined web design experience" },
];

export type Partner = {
  name: string;
  kind: "Technology" | "Services" | "Community";
  description: string;
};

export const partners: Partner[] = [
  {
    name: "Next.js & Vercel stack",
    kind: "Technology",
    description:
      "We build on modern, fast infrastructure — your site loads in under two seconds on a mid-range phone, not eleven.",
  },
  {
    name: "Mobile Money–ready checkout partners",
    kind: "Technology",
    description:
      "For stores and booking sites: MTN MoMo and Airtel Money integrations alongside cards, tested on real Ugandan networks.",
  },
  {
    name: "Photographers & videographers",
    kind: "Services",
    description:
      "A growing bench of Kampala-based creatives for shoots, so your site shows your real business — never stock handshakes.",
  },
  {
    name: "Marketing & ads agencies",
    kind: "Services",
    description:
      "White-label design and landing pages for agencies that need reliable production without hiring in-house.",
  },
  {
    name: "Founder & freelancer community",
    kind: "Community",
    description:
      "Workshops and office-hours for Kampala's startup community: portfolio reviews, pricing clinics, launch checklists.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    detail:
      "A 30-minute call or WhatsApp chat. We learn your business, your clients and your goal — and tell you if we are the right studio. Free, no pitch decks.",
    duration: "Day 0",
  },
  {
    step: "02",
    title: "Strategy & sitemap",
    detail:
      "You answer one structured questionnaire. We return a sitemap, message framework and fixed quote. You know the price, the pages and the timeline before we design a pixel.",
    duration: "Days 1–3",
  },
  {
    step: "03",
    title: "Design, live with you",
    detail:
      "We design in short live sessions, not silent weeks. You see real pages early, comment directly, and approve two revision rounds — no big-reveal surprises.",
    duration: "Weeks 1–3",
  },
  {
    step: "04",
    title: "Build & quality pass",
    detail:
      "Development, speed optimization, SEO setup and a 60-point checklist: every link, form, phone number and WhatsApp button tested on real devices.",
    duration: "Weeks 2–5",
  },
  {
    step: "05",
    title: "Launch & grow",
    detail:
      "We handle domains, analytics and go-live, hand over an editing video, and stay for two weeks of free support. Then the care plan or SEO keeps you compounding.",
    duration: "Week 6+",
  },
];

export const guarantees = [
  {
    title: "Premium quality at a price you can trust",
    detail: "The quote you approve is the price you pay. Scope changes are priced before work starts — never after.",
  },
  {
    title: "A date, not a season",
    detail: "Every project ships with a launch date. If we miss it through our fault, the final 10% is on us.",
  },
  {
    title: "You own everything",
    detail: "Files, logins, domains, content — all transferred to you at launch. No hostage situations, ever.",
  },
];
