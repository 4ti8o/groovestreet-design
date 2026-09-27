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
  kind: "Corporate" | "Services" | "Community";
  description: string;
  /** Optional brand logo with intrinsic dimensions for next/image. */
  logo?: { src: string; width: number; height: number };
};

/**
 * Partner logos are trademarks of their respective owners, shown here to depict
 * working relationships. Assets were sourced from Wikimedia Commons (public
 * domain), seeklogo and the companies' own sites — swap in partner-supplied
 * files before launch.
 */
export const partners: Partner[] = [
  {
    name: "MTN Uganda",
    kind: "Corporate",
    description:
      "Uganda's largest mobile network — voice, data and MoMo money services across the country.",
    logo: { src: "/images/partners/mtn.png", width: 960, height: 480 },
  },
  {
    name: "Airtel Uganda",
    kind: "Corporate",
    description:
      "National mobile network and Airtel Money provider, connecting millions of Ugandans.",
    logo: { src: "/images/partners/airtel.png", width: 960, height: 966 },
  },
  {
    name: "Stanbic Bank Uganda",
    kind: "Corporate",
    description:
      "One of Uganda's largest commercial banks, serving individuals, SMEs and corporates nationwide.",
    logo: { src: "/images/partners/stanbic.png", width: 320, height: 320 },
  },
  {
    name: "Uganda Airlines",
    kind: "Corporate",
    description:
      "The national carrier, flying from Entebbe to destinations across Africa and beyond.",
    logo: { src: "/images/partners/uganda-airlines.png", width: 960, height: 224 },
  },
  {
    name: "Uganda Breweries",
    kind: "Corporate",
    description: "A leading beverages producer and part of the East African Breweries group.",
    logo: { src: "/images/partners/uganda-breweries.png", width: 129, height: 39 },
  },
  {
    name: "Coca-Cola Beverages Uganda",
    kind: "Corporate",
    description:
      "Bottler of Coca-Cola and a wide range of sparkling and still brands for the Ugandan market.",
    logo: { src: "/images/partners/coca-cola.png", width: 600, height: 600 },
  },
  {
    name: "Roofings Group",
    kind: "Corporate",
    description:
      "Uganda's leading steel and building-materials manufacturer, rolling products for construction across East Africa.",
    logo: { src: "/images/partners/roofings.png", width: 180, height: 180 },
  },
  {
    name: "Umeme",
    kind: "Corporate",
    description: "A Ugandan power company with two decades of keeping the central grid lit.",
    logo: { src: "/images/partners/umeme.png", width: 320, height: 320 },
  },
  {
    name: "SafeBoda",
    kind: "Corporate",
    description:
      "Uganda's leading boda-boda mobility platform, moving riders and passengers safely across cities.",
    logo: { src: "/images/partners/safeboda.png", width: 842, height: 170 },
  },
  {
    name: "Movit Products",
    kind: "Corporate",
    description:
      "A Ugandan manufacturer of adhesives, paints and home-care products, made for East African homes.",
    logo: { src: "/images/partners/movit.png", width: 960, height: 232 },
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

export type ProcessStep = {
  step: string;
  /** Icon key — resolved by ProcessIcon; content files never import components. */
  icon: "call" | "plan" | "design" | "build" | "launch" | "grow";
  title: string;
  detail: string;
  /** When this step happens on the calendar, e.g. "Days 1–3". */
  duration: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    icon: "call",
    title: "Discovery call",
    detail:
      "A 30-minute call or WhatsApp chat. We learn your business, your clients and your goal — and tell you if we are the right studio. Free, no pitch decks.",
    duration: "Day 0",
  },
  {
    step: "02",
    icon: "plan",
    title: "Strategy & sitemap",
    detail:
      "You answer one structured questionnaire. We return a sitemap, message framework and fixed quote. You know the price, the pages and the timeline before we design a pixel.",
    duration: "Days 1–3",
  },
  {
    step: "03",
    icon: "design",
    title: "Design, live with you",
    detail:
      "We design in short live sessions, not silent weeks. You see real pages early, comment directly, and approve two revision rounds — no big-reveal surprises.",
    duration: "Weeks 1–3",
  },
  {
    step: "04",
    icon: "build",
    title: "Build & quality pass",
    detail:
      "Development, speed optimization, SEO setup and a 60-point checklist: every link, form, phone number and WhatsApp button tested on real devices.",
    duration: "Weeks 2–5",
  },
  {
    step: "05",
    icon: "launch",
    title: "Launch day",
    detail:
      "Domains, analytics, forms and payments verified on real devices, then everything handed over to you. Two weeks of free support start the moment you go live.",
    duration: "Week 6",
  },
  {
    step: "06",
    icon: "grow",
    title: "Grow from there",
    detail:
      "Then the work that compounds: a care plan for maintenance and reserved design hours, or SEO for search growth. You choose, and we report what it actually did.",
    duration: "Month 2+",
  },
];

export const guarantees = [
  {
    title: "Premium quality at a price you can trust",
    detail:
      "The quote you approve is the price you pay. Scope changes are priced before work starts — never after.",
  },
  {
    title: "A date, not a season",
    detail:
      "Every project ships with a launch date. If we miss it through our fault, the final 10% is on us.",
  },
  {
    title: "You own everything",
    detail:
      "Files, logins, domains, content — all transferred to you at launch. No hostage situations, ever.",
  },
];
