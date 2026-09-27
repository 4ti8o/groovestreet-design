import { pageMetadata } from "@/lib/seo";
import { packages, carePlans } from "@/content/packages";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/marketing/cta-band";
import {
  CheckIcon,
  GaugeIcon,
  MonitorIcon,
  PaletteIcon,
  RefreshIcon,
  ShieldIcon,
  SparkleIcon,
  TargetIcon,
} from "@/components/ui/icons";
import { CountUp } from "@/components/ui/count-up";
import { cn } from "@/lib/utils";

/** One icon chip per tier — flat stroke set on brand tint (design.md §9). */
function packageIcon(name: string) {
  const Icon =
    name === "Landing Page"
      ? MonitorIcon
      : name === "Launchpad"
        ? TargetIcon
        : name === "Signature"
          ? PaletteIcon
          : name === "Authority"
            ? GaugeIcon
            : name === "Care · Launchpad"
              ? ShieldIcon
              : name === "Care · Signature"
                ? RefreshIcon
                : SparkleIcon;
  return <Icon size={20} aria-hidden="true" />;
}

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Fixed website pricing: Landing pages from UGX 200,000, Launchpad UGX 500,000, Signature UGX 1,300,000, Authority from UGX 3,000,000, and care plans from UGX 50,000/mo. The quote you approve is the price you pay.",
  path: "/pricing",
});

const pricingFaqs = [
  {
    question: "Can I pay in UGX or Mobile Money?",
    answer:
      "Yes. We invoice in UGX and accept bank transfer, Mobile Money (MTN/Airtel) and cards. Projects are typically 50% to start and 50% at launch.",
  },
  {
    question: "What if I need more pages later?",
    answer:
      "Extra pages are priced per page before work starts (typically UGX 50,000–550,000 depending on complexity). Care-plan hours can also cover new pages.",
  },
  {
    question: "Is hosting included?",
    answer:
      "First-year hosting setup is included in every package — we configure fast, secure hosting in your name. Renewals (typically UGX 230,000–450,000/year) go directly to the host, never through us with a markup.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "All packages split 50/50 (start/launch). Authority builds can split across three milestones. Monthly plans (care, SEO) bill monthly with 30 days' cancel-anytime notice.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Section ariaLabel="Website pricing">
        <SectionHeading
          eyebrow="Pricing"
          title="Fixed prices, stated up front"
          lede="Premium design and build at fixed UGX rates. Every package lists exact pages, revision count and launch date. No hourly meters, no surprise invoices."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={Math.min(index, 3) * 60}>
              <article
                className={cn("card flex h-full flex-col", pkg.featured && "border-ink shadow-header")}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand-dark">
                      {packageIcon(pkg.name)}
                    </span>
                    <h3 className="text-h3 font-semibold">{pkg.name}</h3>
                  </span>
                  {pkg.featured ? <Badge>Most popular</Badge> : null}
                </div>
                <p className="mt-2 text-sm text-muted">{pkg.tagline}</p>
                <p className="mt-4 font-display text-h1 font-bold tabular">
                  <CountUp value={pkg.price} />
                </p>
                <p className="eyebrow mt-1 text-muted">{pkg.cadence}</p>
                <ul className="mt-6 space-y-2.5">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <CheckIcon size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact" variant={pkg.featured ? "primary" : "outline"}>
                    {pkg.cta}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Care plans"
            title="Looked after, every month"
            lede="Maintenance, backups, security and reserved design hours. Same tiers as the builds — each plan includes everything below it."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {carePlans.map((plan, index) => (
              <Reveal key={plan.name} delay={Math.min(index, 3) * 60}>
                <article className="card flex h-full flex-col">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand-dark">
                    {packageIcon(plan.name)}
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
                        <CheckIcon size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <Button href="/contact" variant="outline">
                      {plan.cta}
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-8">
          <p className="text-sm text-muted">
            Something custom — a store, a portal, a multilingual site?{" "}
            <a href="/contact" className="font-medium text-brand underline underline-offset-4">
              Tell us what you need
            </a>{" "}
            and we will quote it on one page.
          </p>
        </Reveal>
      </Section>

      <Section tone="surface" ariaLabel="Pricing questions">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Fine print, in large print"
            title="Pricing questions, answered"
          />
          <Reveal>
            <Accordion items={pricingFaqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Get your fixed quote"
        title="One call. One page. One price."
        lede="Tell us about your project and we'll return a fixed quote — pages, revisions and launch date included."
      />
    </>
  );
}
