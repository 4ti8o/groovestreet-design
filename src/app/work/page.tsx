import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { projects } from "@/content/projects";
import { graphics } from "@/content/industries";
import { getLiveSample } from "@/content/samples";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectThumb } from "@/components/marketing/project-thumb";
import { LiveSiteFrame } from "@/components/marketing/live-site-frame";
import { GraphicMarquee } from "@/components/ui/graphic-marquee";
import { CtaBand } from "@/components/marketing/cta-band";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "Work & Case Studies",
  description:
    "A live website build you can scroll, plus client case studies from Kampala and beyond: bookings tripled, direct stays up 40%, discovery calls doubled.",
  path: "/work",
});

export default function WorkPage() {
  const live = getLiveSample();
  return (
    <>
      <Section ariaLabel="Live website build and case studies">
        {/* Page hero. This page had no h1 until now — it opened straight on a
            section heading, which skipped a level (design.md §11). Same hero
            shape as services/[slug] and industries/[slug]. */}
        <Eyebrow>Work</Eyebrow>
        <h1 className="mt-4 max-w-[20ch] text-display font-bold">
          A real site you can scroll, and the numbers behind it
        </h1>
        <p className="mt-5 max-w-[56ch] text-xl text-muted">
          Start with a live build running on a real host. Then the client work, stated as the
          problem, what we did, and the number that moved.
        </p>

        {/* The live sample, on the 3/6 featured split from design.md §9. */}
        <Reveal className="mt-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="flex flex-col gap-4 lg:col-span-4">
              <p className="eyebrow text-muted">Live sample</p>
              <h2 className="text-h2 font-bold">{live.name}</h2>
              <p className="text-muted">{live.summary}</p>
              <ul className="space-y-2.5">
                {live.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 inline-block size-2 shrink-0 bg-accent"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8">
              <LiveSiteFrame
                url={live.url}
                title={`${live.name} — live website sample`}
                className="w-full"
              />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* duck.design's graphic-design strip. Full-bleed so the edge mask has
          room to dissolve the artwork, exactly as their hero does. */}
      <Section ariaLabel="Graphic design work" className="py-16 md:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Graphic design"
          title="Logos, flyers and the work around the website"
          lede="Most clients need more than a site. These are the brand marks, campaign pieces and printed designs that go out alongside the build."
          align="center"
        />
        <GraphicMarquee graphics={graphics} className="mt-12" />
        <p className="mt-8 text-center text-sm text-muted">
          Logos · Brand marks · Flyers and posters · Social packs · Print-ready artwork
        </p>
      </Section>

      <Section tone="surface" ariaLabel="Case studies">
        <SectionHeading
          eyebrow="Case studies"
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
                  <ProjectThumb
                    project={project}
                    index={index}
                    className="aspect-[4/3] w-full object-cover"
                  />
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
