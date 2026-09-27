import Link from "next/link";
import { services } from "@/content/services";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/marketing/service-icon";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export function HomeServices() {
  return (
    <Section tone="surface" ariaLabel="What we do">
      <SectionHeading
        eyebrow="Services"
        title="Everything your website needs"
        lede="Strategy, words, design, build and growth. Hire one service or hand us the whole job."
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={Math.min(index, 5) * 60}>
            <li className="h-full">
              <Link
                href={`/services/${service.slug}`}
                className="card group flex h-full flex-col gap-3 transition-colors duration-[var(--dur-fast)] hover:border-ink"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-brand-tint text-brand-dark">
                  <ServiceIcon icon={service.icon} size={20} />
                </span>
                <h3 className="text-h3 font-semibold">{service.name}</h3>
                <p className="text-sm text-muted">{service.tagline}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-brand">
                  {service.priceFrom}
                  <ArrowUpRightIcon
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-[var(--dur-fast)] group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
