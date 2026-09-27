import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/content/services";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/marketing/service-icon";
import { CtaBand } from "@/components/marketing/cta-band";
import { ArrowRightIcon, ClockIcon } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Web design, landing pages, graphic design and flyers, SEO and care plans — fixed prices, clear launch dates, support that answers.",
  keywords: ["graphic designer Kampala", "web design Uganda", "website designer Kampala"],
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section ariaLabel="All services">
        <SectionHeading
          eyebrow="Services"
          title="One studio for the whole job"
          lede="Strategy, design, build and growth. Hire a single service or hand us everything from message to launch."
        />
        <ul className="mt-12 space-y-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={Math.min(index, 4) * 60}>
              <li>
                <Link
                  href={`/services/${service.slug}`}
                  className="card group grid gap-6 transition-colors duration-[var(--dur-fast)] hover:border-ink md:grid-cols-[auto_1fr_auto] md:items-center"
                >
                  <span className="flex size-14 items-center justify-center rounded-full bg-brand-tint text-brand-dark">
                    <ServiceIcon icon={service.icon} size={24} />
                  </span>
                  <span>
                    <span className="text-h3 font-semibold">{service.name}</span>
                    <span className="mt-1.5 block text-muted">{service.tagline}</span>
                    <span className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <ClockIcon size={15} aria-hidden="true" />
                        {service.timeline}
                      </span>
                      <span className="font-semibold text-ink">{service.priceFrom}</span>
                    </span>
                  </span>
                  <span className="inline-flex min-h-[48px] items-center gap-2 font-medium text-brand">
                    Explore
                    <ArrowRightIcon
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-[var(--dur-fast)] group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
      <CtaBand
        eyebrow="Not sure which you need?"
        title="Describe the problem. We'll prescribe the service."
        lede="Thirty minutes on a call and we'll tell you exactly what to buy — even if it's the cheapest option, or nothing at all."
      />
    </>
  );
}
