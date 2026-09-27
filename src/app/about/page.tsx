import { pageMetadata } from "@/lib/seo";
import { stats, partners } from "@/content/proof";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { ContactChannels } from "@/components/marketing/contact-channels";
import { CtaBand } from "@/components/marketing/cta-band";
import { CheckIcon } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "About the Studio",
  description:
    "GROOVESTREET DESIGN is a website design studio in Kampala, Uganda. Fixed prices, clear launch timeline, and support that actually answers.",
  path: "/about",
});

const values = [
  {
    title: "Plain language, always",
    detail:
      "No jargon, no 40-page proposals. If a sentence needs explaining, it gets rewritten — in our quotes and on your website.",
  },
  {
    title: "Fixed means fixed",
    detail:
      "The price and the launch date go in the agreement. Scope changes are priced before work starts, never after.",
  },
  {
    title: "Built for the phone in your pocket",
    detail:
      "Most of your visitors arrive on a mid-range Android over mobile data. We design and test for that reality first.",
  },
  {
    title: "You own everything",
    detail:
      "Files, logins, domains and content transfer to you at launch. No hostage situations, ever.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section ariaLabel="About GROOVESTREET DESIGN">
        <SectionHeading
          eyebrow="About the studio"
          title="A small studio with strong opinions about websites"
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-lg leading-[1.7] text-muted">
              <p>
                GROOVESTREET DESIGN is a website design studio based in Kampala,
                Uganda. We craft clean, affordable, professional and intuitive websites 
                to bring your business online. Get ranked by search engines, 
                convert website traffic and grow.
              </p>
              <p>
                We started the studio after watching the same story repeat: a good
                business pays for a website, gets something slow, outdated and confusing, and
                the designer disappears before launch. So we built the studio we
                wished existed — fixed prices,  clear launch timeline, 
                words your clients understand, and support that answers.
              </p>
              <p>
                Every project gets senior attention, and
                every page ships only when it passes our 60-point checklist on real
                devices.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <dl className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="card">
                  <dd className="font-display text-h2 font-bold tabular">{stat.value}</dd>
                  <dt className="mt-2 text-sm text-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" ariaLabel="What we believe">
        <SectionHeading
          eyebrow="What we believe"
          title="Four rules behind every build"
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 60}>
              <li className="card h-full">
                <span className="flex size-11 items-center justify-center rounded-full bg-success-tint text-success">
                  <CheckIcon size={20} />
                </span>
                <h3 className="mt-4 text-h4 font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted">{value.detail}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section ariaLabel="Partners we work with">
        <SectionHeading
          eyebrow="Partners"
          title="Technology and people we trust"
          lede="The stack, services and community behind our builds — not logos we rented."
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={Math.min(index, 5) * 60}>
              <li className="card h-full">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="neutral">{partner.kind}</Badge>
                </div>
                <h3 className="mt-4 text-h4 font-semibold">{partner.name}</h3>
                <p className="mt-2 text-sm text-muted">{partner.description}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="surface" ariaLabel="Contact the studio">
        <SectionHeading
          eyebrow="Talk to us"
          title="Reach a human, not a form queue"
          lede="Call, WhatsApp or email — a real person replies within one business day."
        />
        <ContactChannels className="mt-10" />
      </Section>

      <CtaBand />
    </>
  );
}
