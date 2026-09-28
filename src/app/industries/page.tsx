import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { industries } from "@/content/industries";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/marketing/cta-band";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "Websites for coaches, clinics, law and finance, home services, SaaS, safari and hospitality, retail and NGOs — built for how your clients buy.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <Section ariaLabel="Industries we serve">
        <SectionHeading
          eyebrow="Industries"
          title="Built for the way your clients buy"
          lede="Eight sectors, one pattern: visitors who need to trust you fast, on a phone, before they call."
        />
        <ul className="mt-12 space-y-4">
          {industries.map((industry, index) => (
            <Reveal as="li" key={industry.slug} delay={Math.min(index, 4) * 60}>
              <Link
                href={`/industries/${industry.slug}`}
                className="card group grid gap-4 transition-colors duration-[var(--dur-fast)] hover:border-ink md:grid-cols-[1fr_auto] md:items-center"
              >
                <span>
                  <span className="text-h3 font-semibold">{industry.name}</span>
                  <span className="mt-1.5 block text-muted">{industry.headline}</span>
                </span>
                <span className="inline-flex min-h-[48px] items-center gap-2 font-medium text-brand">
                  {industry.cta}
                  <ArrowRightIcon size={18} aria-hidden="true" className="transition-transform duration-[var(--dur-fast)] group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>
      <CtaBand
        eyebrow="Don't see your sector?"
        title="If your clients Google you first, we can help"
        lede="The pattern is the same across industries: clarify the message, prove it fast, make the next step obvious."
      />
    </>
  );
}
