import Link from "next/link";
import { pageMetadata, faqJsonLd } from "@/lib/seo";
import { carePlans } from "@/content/packages";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/marketing/cta-band";
import { planIcon } from "@/components/marketing/plan-icon";
import { CountUp } from "@/components/ui/count-up";
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  GaugeIcon,
  MonitorIcon,
  RefreshIcon,
  ShieldIcon,
} from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "Care Plan",
  description:
    "Monthly care plans for your website: daily backups, managed hosting, security monitoring and reserved design hours. Launchpad UGX 50,000/mo, Signature UGX 120,000/mo, Authority UGX 200,000/mo — cancel with 30 days' notice.",
  path: "/care-plan",
  keywords: ["website care plan Uganda", "website maintenance Kampala", "monthly website support"],
});

/** Which builds each care tier is built for — tiers mirror the packages. */
const coveredBuilds: Record<string, string> = {
  "Care · Launchpad": "Landing Page and Launchpad sites",
  "Care · Signature": "Signature sites",
  "Care · Authority": "Authority builds and online stores",
};

/** Included at every tier, so nobody has to ask what the monthly fee buys. */
const inEveryPlan = [
  {
    icon: ShieldIcon,
    title: "Daily backups, tested monthly",
    detail:
      "We restore from them on a schedule, so a backup is never a hopeful file you have never tried.",
  },
  {
    icon: MonitorIcon,
    title: "Managed hosting & SSL kept current",
    detail:
      "Certificates renew on time, servers stay patched, and nothing quietly expires on a Sunday night.",
  },
  {
    icon: RefreshIcon,
    title: "Updates applied safely",
    detail: "Core, plugin and content updates staged and tested, then shipped — never blind.",
  },
  {
    icon: GaugeIcon,
    title: "Uptime, form and checkout checks",
    detail:
      "We check the things that earn money: is it up, does the form send, does checkout complete.",
  },
  {
    icon: ClockIcon,
    title: "Response times from 48 hours to same-day",
    detail: "The higher the tier, the faster we answer when something breaks.",
  },
  {
    icon: CalendarIcon,
    title: "Cancel or pause with 30 days' notice",
    detail: "No exit fee, no lock-in. Your files, domains and logins stay in your name either way.",
  },
];

const careFaqs = [
  {
    question: "Which care plan matches my site?",
    answer:
      "Care tiers mirror the build tiers: Care · Launchpad for landing pages and Launchpad sites, Care · Signature for Signature sites, and Care · Authority for Authority builds and online stores. Each tier includes everything in the tier below it. Not sure which you are? Send us the URL and we will tell you in one line.",
  },
  {
    question: "What are the reserved hours for?",
    answer:
      "Design and content hours for work that compounds: new pages, landing pages, copy edits, graphics and small feature changes. Unused hours do not roll over, so we schedule them in the first week of the month and get them used.",
  },
  {
    question: "Can I take a care plan on a site you did not build?",
    answer:
      "Usually yes, after a one-time health audit of UGX 550,000 which is credited toward your first quarter. If the site is beyond saving, we will tell you straight instead of taking the money.",
  },
  {
    question: "Is hosting and the domain included?",
    answer:
      "Managed hosting and SSL are covered for as long as the plan runs. First-year hosting setup is included with every build; after that, renewals are billed by the host directly to you at cost, with no markup from us. Domains always stay registered in your name.",
  },
  {
    question: "Do I get free support after launch?",
    answer:
      "Yes. Two weeks of post-launch support come with every build, and Signature and Authority builds include 30 days of priority support. Start a care plan on day one and that free window runs alongside it — nothing is lost.",
  },
];

export default function CarePlanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(careFaqs)) }}
      />
      <Section ariaLabel="Care plan pricing">
        <SectionHeading
          eyebrow="Care plan"
          title="Looked after, every month"
          lede="Websites rot: software ages, content goes stale, small breaks go unnoticed. A care plan keeps your site fast, backed up and secure — and reserves design hours for the improvements that compound. One flat monthly fee, cancel with 30 days' notice."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {carePlans.map((plan, index) => (
            <Reveal key={plan.name} delay={Math.min(index, 3) * 60}>
              <article className="card flex h-full flex-col">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand-dark">
                  {planIcon(plan.name)}
                </span>
                <h3 className="mt-4 text-h3 font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted">{plan.tagline}</p>
                <p className="mt-4 font-display text-h2 font-bold tabular">
                  <CountUp value={plan.price} />
                </p>
                <p className="eyebrow mt-1 text-muted">{plan.cadence}</p>
                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <CheckIcon
                        size={16}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-success"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
                  <span className="font-medium text-ink">Suits:</span> {coveredBuilds[plan.name]}
                </p>
                <div className="mt-auto pt-6">
                  <Button href="/contact" variant="outline">
                    {plan.cta}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="text-sm text-muted">
            Building something new? Care plans attach to any build —{" "}
            <Link href="/pricing" className="font-medium text-brand underline underline-offset-4">
              compare with the build packages
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <Section tone="surface" ariaLabel="What every care plan includes">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="In every plan"
            title="The boring things that protect the work"
            lede="Every tier carries the same foundation. Higher tiers add faster response times, more reserved hours and growth reviews."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {inEveryPlan.map((item, index) => (
              <Reveal as="li" key={item.title} delay={Math.min(index, 5) * 60} className="card h-full">
                <span className="flex size-10 items-center justify-center rounded-full bg-brand-tint text-brand-dark">
                  <item.icon size={18} aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section ariaLabel="How care plans work">
        <SectionHeading
          eyebrow="The rhythm"
          title="How a care month actually works"
          lede="No mystery invoices and no surprise calls. The month runs on a simple loop."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "First weeks free",
              detail:
                "Every build includes free post-launch support: two weeks standard, and 30 days of priority support on Signature and Authority. Start the plan on day one and that window runs alongside it.",
            },
            {
              step: "02",
              title: "Work scheduled early",
              detail:
                "We book the month's reserved hours in the first week, apply updates after testing them, and run uptime, form and checkout checks on a schedule you can see in the report.",
            },
            {
              step: "03",
              title: "Report, review, exit",
              detail:
                "A five-minute monthly report goes out every month, plus a quarterly growth review on Authority. Pause or cancel with 30 days' notice and everything stays yours.",
            },
          ].map((item, index) => (
            <Reveal as="li" key={item.step} delay={index * 60} className="card h-full">
              <span className="font-mono text-sm text-muted">{item.step}</span>
              <h3 className="mt-3 text-h4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.detail}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="surface" ariaLabel="Care plan questions">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="Care plan questions" title="Answered before you ask" />
          <Reveal>
            <Accordion items={careFaqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Start a care plan"
        title="Tell us the URL. We'll tell you the tier."
        lede="Send your site's address and what has been bugging you — we will recommend the right plan, or tell you honestly that you do not need one yet."
      />
    </>
  );
}
