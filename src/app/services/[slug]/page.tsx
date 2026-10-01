import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata, faqJsonLd } from "@/lib/seo";
import { getService, services } from "@/content/services";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/marketing/service-icon";
import { CtaBand } from "@/components/marketing/cta-band";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon, ClockIcon, TagIcon } from "@/components/ui/icons";
import { CountUp } from "@/components/ui/count-up";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: `${service.tagline} ${service.priceFrom}, ${service.timeline}.`,
    keywords: service.keywords,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(service.faqs)) }}
      />
      <Section ariaLabel={service.name}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div>
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-4 max-w-[18ch] text-display font-bold">{service.name}</h1>
            <p className="mt-5 max-w-[52ch] text-xl text-muted">{service.tagline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary">Get in Touch</Button>
              <Button href="/contact" variant="outline">Ask about this service</Button>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted">
              <ClockIcon size={16} aria-hidden="true" />
              Typical timeline: {service.timeline}
            </p>
            <div className="mt-10 space-y-5 text-lg leading-[1.7] text-muted">
              {service.description.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <aside
              className="card border-ink"
              aria-label={`Price for ${service.name}`}
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-brand-tint text-brand-dark">
                <TagIcon size={20} />
              </span>
              <p className="eyebrow mt-4 text-muted">Starting at</p>
              <p className="mt-2 font-display text-h2 font-bold tabular">
                <CountUp value={service.priceFrom} />
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
                <ClockIcon size={16} aria-hidden="true" />
                {service.timeline}
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="primary" fullWidth>
                  Get a fixed quote
                </Button>
              </div>
              <p className="mt-3 text-sm text-muted">
                Fixed before we start — the price never moves without your approval.
              </p>
            </aside>
          </Reveal>
        </div>
        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {service.outcomes.map((outcome) => (
            <div key={outcome.label} className="card">
              <dd className="font-display text-h2 font-bold tabular">
                <CountUp value={outcome.value} />
              </dd>
              <dt className="mt-2 text-sm text-muted">{outcome.label}</dt>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="surface" ariaLabel="What you get">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Deliverables" title="What you get" />
            <ul className="mt-8 space-y-2.5">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckIcon size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Fit" title="Who this is for" />
            <ul className="mt-8 flex flex-wrap gap-3">
              {service.forWho.map((who) => (
                <li
                  key={who}
                  className="inline-flex min-h-[44px] items-center rounded-pill border border-line bg-paper px-5 text-sm font-medium"
                >
                  {who}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section ariaLabel={`${service.name} questions`}>
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="Questions" title={`About ${service.name.toLowerCase()}`} />
          <Reveal>
            <Accordion items={service.faqs} />
          </Reveal>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services
            .filter((other) => other.slug !== service.slug)
            .slice(0, 3)
            .map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="card group flex h-full items-center gap-4 transition-colors duration-[var(--dur-fast)] hover:border-ink"
                >
                  <ServiceIcon icon={other.icon} size={40} />
                  <span>
                    <span className="font-semibold">{other.name}</span>
                    <span className="mt-0.5 block text-sm text-muted">{other.priceFrom}</span>
                  </span>
                  <ArrowRightIcon size={18} aria-hidden="true" className="ml-auto text-brand transition-transform duration-[var(--dur-fast)] group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
        </ul>
      </Section>

      <CtaBand
        eyebrow={service.name}
        title={`Ready for ${service.name.toLowerCase()} that pays for itself?`}
        lede="One call or message starts it. Fixed quote, launch date and clear advice — within one business day."
      />
    </>
  );
}

