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
  /**
   * Public URL, set only for work that is genuinely live and cleared to publish.
   * A case study without one is a write-up; one with it is something the visitor
   * can open. The link is never the place a promise is made — it has to hold up.
   */
  liveUrl?: string;
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
    services: ["Website Design & Build", "SEO & Performance"],
    approach: [
      {
        step: "Clarify",
        detail: "Patient interviews + search data → one booking-focused sitemap.",
      },
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
  },
  {
    slug: "hotel-groovestreet",
    client: "Hotel GrooveStreet",
    industry: "Hotels & Hospitality",
    location: "Los Angeles, CA",
    title: "A six-page hotel site, live on a real host",
    outcome: "Every page, room type and rate is live and reachable right now.",
    description: [
      "Hotel GrooveStreet needed more than a landing page. The brief was a full site — home, about, services, rooms, news and contact — that could sell the rooms and take a reservation without the guest picking up a phone.",
      "We built and deployed all six pages with a booking flow that takes check-in and check-out dates, adults and children, plus published nightly rates on three room types so a guest can price and reserve without leaving the page.",
    ],
    services: ["Website Design & Build"],
    approach: [
      {
        step: "Clarify",
        detail: "Six pages and one booking path. Structure agreed before a pixel was designed.",
      },
      {
        step: "Design",
        detail:
          "Editorial hotel layout — full-bleed imagery, room cards with rates, amenities grid.",
      },
      {
        step: "Launch",
        detail: "Built, deployed and verified on a live host. Every page loads from the real URL.",
      },
    ],
    // Verifiable facts about the build, not business results. There is no
    // traffic, conversion or revenue data behind this site yet, so the numbers
    // here count what a visitor can go and check (design.md §1.5, §15).
    metrics: [
      { value: "6", label: "pages live, from home to contact" },
      { value: "3", label: "room types, each with a published rate" },
      { value: "1", label: "booking flow taking dates and guest counts" },
    ],
    palette: "orange",
    year: "2026",
    liveUrl: "https://hotel-groovestreet.netlify.app/",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/* MORE-PROJECTS */
