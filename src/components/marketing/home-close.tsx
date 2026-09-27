import Link from "next/link";
import { packages, homeFaqs } from "@/content/packages";
import { partners } from "@/content/proof";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";

export function HomePricing() {
  const featured = packages.find((p) => p.featured) ?? packages[0];
  if (!featured) return null;
  return (
    <Section ariaLabel="Pricing">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Pricing"
          title="Fixed prices, stated up front"
          lede="No hourly meters, no surprise invoices. The price is in writing before we start."
        />
        <Reveal>
          <article className="card border-ink">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-h3 font-semibold">{featured.name}</h3>
              <Badge>Most popular</Badge>
            </div>
            <p className="mt-2 text-sm text-muted">{featured.tagline}</p>
            <p className="mt-4 font-display text-h1 font-bold tabular">{featured.price}</p>
            <p className="eyebrow mt-1 text-muted">{featured.cadence}</p>
            <ul className="mt-6 space-y-2.5">
              {featured.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <CheckIcon size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-success" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/pricing" variant="primary">See all pricing</Button>
              <Button href="/book" variant="outline">Get a fixed quote</Button>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}

export function HomePartners() {
  return (
    <Section tone="surface" ariaLabel="Partners">
      <SectionHeading
        eyebrow="Partners"
        title="Stronger with the right people"
        lede="Technology we trust, services we recommend, and a community we show up for."
      />
      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {partners.slice(0, 3).map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <li className="card h-full">
              <div className="flex items-center justify-between gap-3">
                <Badge tone="neutral">{p.kind}</Badge>
              </div>
              <h3 className="mt-4 text-h4 font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted">{p.description}</p>
            </li>
          </Reveal>
        ))}
      </ul>
      <Reveal className="mt-6">
        <Button href="/partners" variant="outline">
          Meet our partners
          <ArrowRightIcon size={18} />
        </Button>
      </Reveal>
    </Section>
  );
}

export function HomeFaq() {
  return (
    <Section ariaLabel="Frequently asked questions">
      <div className="grid gap-10 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Questions"
          title="Asked on every first call"
          lede="Straight answers on price, timelines and time zones."
        />
        <Reveal>
          <Accordion items={homeFaqs} />
          <p className="mt-6 text-sm text-muted">
            More answers on the{" "}
            <Link href="/faq" className="font-medium text-brand underline underline-offset-4">
              FAQ page
            </Link>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
