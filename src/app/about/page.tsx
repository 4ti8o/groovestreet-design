import { pageMetadata } from "@/lib/seo";
import { stats, partners } from "@/content/proof";
import { team } from "@/content/team";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { Marquee } from "@/components/ui/marquee";
import { ContactChannels } from "@/components/marketing/contact-channels";
import { PartnerCard } from "@/components/marketing/partner-card";
import { TeamCard } from "@/components/marketing/team-card";
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
      "The price and the launch date are fixed before we start. Scope changes are priced before work starts, never after.",
  },
  {
    title: "Built for the phone in your pocket",
    detail:
      "Most of your visitors arrive on a mid-range Android over mobile data. We design and test for that reality first.",
  },
  {
    title: "Premium standard on every budget",
    detail:
      "A UGX 200,000 landing page gets the same senior designer and the same 60-point checklist as a UGX 3,000,000 build. We stay small on purpose, so the budget goes into your website.",
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
                GROOVESTREET DESIGN is a website design studio based in Kampala, Uganda. We craft
                clean, affordable, professional and intuitive websites to bring your business
                online. Get ranked by search engines, convert website traffic and grow.
              </p>
              <p>
                We started the studio after watching the same story repeat: a good business pays for
                a website, gets something slow, outdated and confusing, and the designer disappears
                before launch. So we built the studio we wished existed — fixed prices, clear launch
                timeline, words your clients understand, and support that answers.
              </p>
              <p>
                Every project gets senior attention, and every page ships only when it passes our
                60-point checklist on real devices.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <dl className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="card">
                  <dd className="font-display text-h2 font-bold tabular">
                    <CountUp value={stat.value} />
                  </dd>
                  <dt className="mt-2 text-sm text-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" ariaLabel="The people behind the studio">
        <SectionHeading
          eyebrow="The team"
          title="The people who will actually do the work"
          lede="No account managers, no hand-offs to a freelancer you never met. These are the people on your project, and you talk to them directly."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member, index) => (
            <Reveal as="li" key={member.id} delay={Math.min(index, 3) * 60} className="h-full">
              <TeamCard member={member} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section ariaLabel="What we believe">
        <SectionHeading eyebrow="What we believe" title="Five rules behind every build" />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {values.map((value, index) => (
            <Reveal as="li" key={value.title} delay={index * 60} className="card h-full">
              <span className="flex size-11 items-center justify-center rounded-full bg-success-tint text-success">
                <CheckIcon size={20} />
              </span>
              <h3 className="mt-4 text-h4 font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-muted">{value.detail}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section ariaLabel="Partners we work with">
        <SectionHeading
          eyebrow="Partners"
          title="The partners behind our work"
          lede="Uganda's leading brands plus the studios, creatives and communities we build alongside — real relationships, not rented logos."
        />
        <Marquee className="mt-10">
          {partners
            .filter((partner) => partner.kind === "Corporate")
            .map((partner) => (
              <span key={partner.name} className="font-display text-h4 font-semibold text-ink/70">
                {partner.name}
              </span>
            ))}
        </Marquee>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {partners
            .filter((partner) => partner.kind === "Corporate")
            .map((partner, index) => (
              <Reveal as="li" key={partner.name} delay={Math.min(index, 5) * 60}>
                <PartnerCard partner={partner} />
              </Reveal>
            ))}
        </ul>
      </Section>

      <Section tone="surface" ariaLabel="Contact the studio">
        <SectionHeading
          eyebrow="Talk to us"
          title="Reach a human, not a form queue"
          lede="Call, WhatsApp or email."
        />
        <ContactChannels className="mt-10" />
      </Section>

      <CtaBand />
    </>
  );
}
