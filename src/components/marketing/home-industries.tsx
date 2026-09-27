import Link from "next/link";
import { industries } from "@/content/industries";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export function HomeIndustries() {
  return (
    <Section tone="surface" ariaLabel="Who we help">
      <SectionHeading
        eyebrow="Who we help"
        title="Built for the way your clients buy"
        lede="Eight sectors, one pattern: visitors who need to trust you fast."
      />
      <ul className="mt-12 flex flex-wrap gap-3">
        {industries.map((industry, index) => (
          <Reveal key={industry.slug} delay={Math.min(index, 5) * 60}>
            <li>
              <Link
                href={`/industries/${industry.slug}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-pill border border-line bg-paper px-5 text-sm font-medium transition-colors duration-[var(--dur-fast)] hover:border-ink"
              >
                {industry.name}
                <ArrowUpRightIcon size={16} aria-hidden="true" />
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
