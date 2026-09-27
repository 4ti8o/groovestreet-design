import { projects } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectThumb } from "@/components/marketing/project-thumb";
import { CountUp } from "@/components/ui/count-up";
import { ArrowRightIcon } from "@/components/ui/icons";

export function HomeProof() {
  const featured = projects[0];
  if (!featured) return null;
  return (
    <Section tone="ink" ariaLabel="Results our clients get">
      <SectionHeading
        dark
        eyebrow="Proof, not promises"
        title="Work that pays for itself"
        lede="Real projects, real numbers. Measurable results from local businesses we have worked with."
      />
      <Reveal className="mt-10">
        <article className="overflow-hidden rounded-lg border border-line-invert bg-ink-2">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 md:p-10">
              <p className="eyebrow text-accent">
                {featured.client} · {featured.location}
              </p>
              <h3 className="mt-3 text-h3 font-semibold">{featured.title}</h3>
              <p className="mt-2 text-lg text-muted-invert">{featured.outcome}</p>
              <ul className="mt-6 space-y-3">
                {featured.metrics.map((metric) => (
                  <li key={metric.label} className="flex items-baseline gap-3">
                    <span className="font-display text-h3 font-bold tabular text-accent">
                      <CountUp value={metric.value} />
                    </span>
                    <span className="text-sm text-muted-invert">{metric.label}</span>
                  </li>
                ))}
              </ul>
              <Button href={`/work/${featured.slug}`} variant="invert" className="mt-8">
                Read the case study
                <ArrowRightIcon size={18} />
              </Button>
            </div>
            <ProjectThumb project={featured} className="h-full min-h-[280px] w-full" />
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
