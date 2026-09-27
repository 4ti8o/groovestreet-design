import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { projects } from "@/content/projects";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectThumb } from "@/components/marketing/project-thumb";
import { CtaBand } from "@/components/marketing/cta-band";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "Work & Case Studies",
  description:
    "Case studies from Kampala and beyond: bookings tripled, direct stays up 40%, discovery calls doubled.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Section ariaLabel="Case studies">
        <SectionHeading
          eyebrow="Work"
          title="Results, not screenshots"
          lede="Every case study states the problem, what we did, and the number that moved."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index, 3) * 60}>
              <article className="card group flex h-full flex-col overflow-hidden p-0">
                <Link
                  href={`/work/${project.slug}`}
                  aria-label={`Read the ${project.client} case study`}
                  className="block"
                >
                  <ProjectThumb project={project} className="aspect-[4/3] w-full" />
                </Link>
                <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
                  <p className="eyebrow text-muted">
                    {project.client} · {project.location}
                  </p>
                  <h3 className="text-h3 font-semibold">{project.title}</h3>
                  <p className="text-muted">{project.outcome}</p>
                  <Link
                    href={`/work/${project.slug}`}
                    className="mt-auto inline-flex min-h-[44px] items-center gap-2 pt-2 font-medium text-brand"
                  >
                    Read the case study
                    <ArrowUpRightIcon
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-[var(--dur-fast)] group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand
        eyebrow="Your project here"
        title="Become our next case study"
        lede="Tell us where you are and where you want to be. We'll map the fastest route between the two."
      />
    </>
  );
}
