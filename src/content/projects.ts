export type Project = {
  slug: string;
  client: string;
  industry: string;
  location: string;
  title: string;
  outcome: string;
  description: string[];
  services: string[];
  approach: { step: string; detail: string }[];
  metrics: { value: string; label: string }[];
  /** Accent keyword for the generated thumbnail artwork. */
  palette: "green" | "orange" | "sand" | "ink";
  year: string;
  isPlaceholder: boolean;
};

export const projects: Project[] = [
  {
    slug: "kampala-dental-studio",
    client: "Pearl Dental Studio",
    industry: "Clinics & Wellness",
    location: "Kampala, Uganda",
    title: "From invisible to fully booked",
    outcome: "Online bookings tripled in 90 days.",
    description: [
      "Pearl Dental Studio had a five-year-old site that ranked on page four and took eleven seconds to load on a phone. New patients were finding competitors first.",
      "We rebuilt the site around one action — book an appointment — with dentist profiles, treatment pages in plain language, one-tap call and WhatsApp, and local SEO for Kampala searches.",
    ],
    services: ["Website Design & Build", "Copy & Messaging", "SEO & Performance"],
    approach: [
      { step: "Clarify", detail: "Patient interviews + search data → one booking-focused sitemap." },
      { step: "Design", detail: "Calm, clinical look with big tap targets and readable type." },
      { step: "Launch", detail: "Speed rebuild, local listings and a review engine for Google." },
    ],
    metrics: [
      { value: "3×", label: "online bookings in 90 days" },
      { value: "1.4s", label: "mobile load time, down from 11s" },
      { value: "#2", label: "Google Maps ranking for 'dentist Kampala'" },
    ],
    palette: "green",
    year: "2026",
    isPlaceholder: true,
  },
  {
    slug: "safari-lodge-bookings",
    client: "Kidepo Trails Lodge",
    industry: "Safari, Hotels & Hospitality",
    location: "Kidepo Valley, Uganda",
    title: "Direct bookings that bypass the middlemen",
    outcome: "40% of bookings now come direct, commission-free.",
    description: [
      "The lodge depended on booking platforms taking up to 20% per stay. Their own site showed tiny photos and a contact form nobody answered.",
      "We built a gallery-led site with room tours, seasonal rates, guest reviews and a WhatsApp-first booking path that the front desk can answer from a phone.",
    ],
    services: ["Website Design & Build", "Brand Identity", "Copy & Messaging"],
    approach: [
      { step: "Clarify", detail: "Guest survey: photos, price and availability decide everything." },
      { step: "Design", detail: "Full-bleed imagery, simple rates table, instant WhatsApp booking." },
      { step: "Launch", detail: "Staff training video so the lodge owns every update." },
    ],
    metrics: [
      { value: "40%", label: "of bookings now direct" },
      { value: "2.1×", label: "average session duration" },
      { value: "0", label: "commission paid on direct stays" },
    ],
    palette: "orange",
    year: "2026",
    isPlaceholder: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/* MORE-PROJECTS */
