export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  /** Icon key — resolved by ServiceIcon; content files never import components. */
  icon: "monitor" | "target" | "palette" | "search" | "pen" | "refresh";
  deliverables: string[];
  forWho: string[];
  outcomes: { value: string; label: string }[];
  timeline: string;
  priceFrom: string;
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "website-design",
    name: "Website Design & Build",
    tagline: "A website that brings you calls and messages.",
    description: [
      "Your website works for you day and night. It meets every customer before you do. We design simple, beautiful websites for service businesses that load fast on phones and show up on Google.",
      "Every project starts with your message, not colours. We get clear on what you sell, who it is for, and what the visitor should do next — then design around that.",
    ],
    icon: "monitor",
    deliverables: [
      "A made-for-you homepage plus inner pages",
      "Works beautifully on phones, tablets and computers",
      "We polish the words on every page",
      "Set up so Google can find you (titles, map listing, sitemap)",
      "Contact form plus WhatsApp button",
      "A simple video showing you how to update things",
    ],
    forWho: ["Coaches & consultants", "Clinics & wellness studios", "Lawyers, accountants & agencies", "Safari & hotel brands"],
    outcomes: [
      { value: "3–6", label: "weeks from our first chat to launch" },
      { value: "Fast", label: "loads quickly, even on slower phones" },
      { value: "2", label: "rounds of changes included" },
    ],
    timeline: "3–6 weeks",
    priceFrom: "from $950",
    faqs: [
      {
        question: "Will I be able to update the site myself?",
        answer:
          "Yes. You get a short video showing how, plus a simple setup anyone can use. And we stay close for two free weeks after launch for anything that confuses you.",
      },
      {
        question: "Do you write the words too?",
        answer:
          "We polish the words on every page as standard. If you want us to write everything from scratch, that is a separate service.",
      },
    ],
  },
  {
    slug: "landing-pages",
    name: "Landing Pages & Campaign Pages",
    tagline: "One page. One offer. One clear next step.",
    description: [
      "Running adverts, a launch, or a special offer without its own page wastes money. We build focused pages that match your advert and push visitors to one action: book, call, or buy.",
      "One page, live in three to five days, with headlines that match your message and a form or WhatsApp button wired to your phone.",
    ],
    icon: "target",
    deliverables: [
      "One page built to bring enquiries",
      "Headline and offer that match your advert",
      "Form, call and WhatsApp buttons",
      "Built to open fast on phones",
      "A simple counter showing how many people visit",
    ],
    forWho: ["Paid adverts", "Product & course launches", "Event sign-ups", "Seasonal offers"],
    outcomes: [
      { value: "3–5", label: "days from payment to live page" },
      { value: "1", label: "clear goal for the page" },
      { value: "3", label: "headline ideas to test" },
    ],
    timeline: "3–5 days",
    priceFrom: "from UGX 200,000",
    faqs: [
      {
        question: "Can you match what my advert promises?",
        answer:
          "That is the whole point. Send us your adverts and offer details and the page will say the same thing that earned the click.",
      },
      {
        question: "How much does a landing page cost?",
        answer:
          "A single landing or campaign page is UGX 200,000, live within 3–5 days. That covers the page, the words on it, and the call and WhatsApp buttons wired to your phone. Multi-page campaigns are quoted per page before any work starts.",
      },
    ],
  },
  {
    slug: "brand-identity",
    name: "Brand Identity",
    tagline: "Look like the business you are becoming.",
    description: [
      "Clients judge you in seconds. We create logo systems, color palettes, typography and usage rules that make a small studio look established — and keep every future designer honest.",
      "You receive everything in editable files with a one-page brand sheet your whole team can follow.",
    ],
    icon: "palette",
    deliverables: [
      "Logo system (primary, mark, mono)",
      "Color + typography system",
      "One-page brand guidelines",
      "Social profile kit",
      "Editable source files",
    ],
    forWho: ["New businesses", "Rebrands after growth", "Professionals going independent", "Product launches"],
    outcomes: [
      { value: "2–3", label: "weeks turnaround" },
      { value: "3", label: "logo concepts to choose from" },
      { value: "1", label: "guideline sheet for your team" },
    ],
    timeline: "2–3 weeks",
    priceFrom: "from $650",
    faqs: [
      {
        question: "Do I own the files?",
        answer:
          "Completely. Editable source files plus exported assets, with full usage rights, are handed over at the end.",
      },
    ],
  },
  {
    slug: "seo-performance",
    name: "SEO & Performance",
    tagline: "Get found by people already looking for you.",
    description: [
      "A beautiful site nobody finds is a billboard in the desert. We fix what hides you and what slows you down — your page structure, loading speed and Google Maps listing — so your business shows up when Kampala, and the world, searches for what you do.",
      "Start with a one-time audit and fixes, or keep us on a monthly plan that compounds: content, visibility and a report you can read in five minutes.",
    ],
    icon: "search",
    deliverables: [
      "A plain-English report of what is holding your site back",
      "Speed fixes so pages open fast on phones",
      "Your Google Maps listing set up and polished",
      "The words your clients actually search for, plus what to publish",
      "A monthly report you can read in five minutes",
    ],
    forWho: ["Local service businesses", "Clinics & hospitality", "Online stores", "Anyone invisible on Google"],
    outcomes: [
      { value: "30", label: "days to first measurable movement" },
      { value: "5-min", label: "monthly report, zero jargon" },
      { value: "1", label: "search plan you can keep" },
    ],
    timeline: "Audit in 2 weeks · plans ongoing",
    priceFrom: "audit from $300 · plans from $250/mo",
    faqs: [
      {
        question: "How fast will I rank?",
        answer:
          "Honest answer: local searches usually move within 30–90 days, and tougher ones take longer. We report your positions every month so you see exactly what is happening.",
      },
    ],
  },
  {
    slug: "copy-messaging",
    name: "Copy & Messaging",
    tagline: "Say it so simply they cannot misunderstand you.",
    description: [
      "Most websites fail on words, not pixels. Visitors leave when they cannot tell what you do in five seconds. We rewrite your homepage and service pages around a clear story: the problem, the plan, the proof, the action.",
      "You answer a structured questionnaire; we do the writing, and you approve every line.",
    ],
    icon: "pen",
    deliverables: [
      "Homepage rewrite (headline to footer)",
      "Up to 5 service-page rewrites",
      "Call-to-action wording throughout",
      "Tone-of-voice notes for your team",
    ],
    forWho: ["Experts who hate writing", "Sites with traffic but no enquiries", "Rebrands and relaunches", "Non-native English teams"],
    outcomes: [
      { value: "5-sec", label: "clarity test every headline passes" },
      { value: "2", label: "review rounds included" },
      { value: "1", label: "questionnaire — that is all we need" },
    ],
    timeline: "1–2 weeks",
    priceFrom: "from $400",
    faqs: [
      {
        question: "What do you need from me?",
        answer:
          "One questionnaire about your clients, services and proof — about an hour of your time. Follow-up calls are optional.",
      },
    ],
  },
  {
    slug: "care-plan",
    name: "Care & Growth Plan",
    tagline: "Your website, maintained and improving monthly.",
    description: [
      "Websites rot: software ages, content goes stale, small breaks go unnoticed. Our monthly care plan keeps your site fast, backed up and secure — and reserves design hours for the improvements that compound.",
      "One flat monthly fee. Pause or cancel with 30 days' notice. No contracts that outlive their usefulness.",
    ],
    icon: "refresh",
    deliverables: [
      "Updates, backups & security monitoring",
      "Uptime checks with same-day response",
      "Monthly design + content hours",
      "Quarterly performance report",
      "Priority booking for bigger projects",
    ],
    forWho: ["Sites we built", "WordPress & Next.js sites", "Businesses without an in-house team", "Seasonal content needs"],
    outcomes: [
      { value: "24h", label: "response on urgent issues" },
      { value: "30-day", label: "cancel-anytime notice" },
      { value: "0", label: "surprise invoices — one flat fee" },
    ],
    timeline: "Starts the day your site launches",
    priceFrom: "from $95/mo",
    faqs: [
      {
        question: "Can you maintain a site you did not build?",
        answer:
          "Usually yes, after a one-time health audit ($150, credited toward your first quarter). If the site is beyond saving we will tell you straight.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
