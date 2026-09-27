import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { getProject, projects } from "@/content/projects";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { PlaceholderBadge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ProjectThumb } from "@/components/marketing/project-thumb";
import { CtaBand } from "@/components/marketing/cta-band";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.client} — ${project.title}`,
    description: project.outcome,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Section ariaLabel={`${project.client} case study`}>
        <Eyebrow>
          Work · {project.industry} · {project.year}
        </Eyebrow>
        <h1 className="mt-4 max-w-[20ch] text-display font-bold">{project.title}</h1>
        <p className="mt-4 text-xl text-muted">
          {project.client} — {project.location}
        </p>
        <p className="mt-2 text-lg font-semibold">{project.outcome}</p>
        {project.isPlaceholder ? (
          <p className="mt-4">
            <PlaceholderBadge />
          </p>
        ) : null}
        <Reveal className="mt-10">
          <ProjectThumb project={project} className="aspect-[16/10] w-full rounded-lg border border-line" />
        </Reveal>
        <div className="mt-10 space-y-5 text-lg leading-[1.7] text-muted">
          {project.description.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="card">
              <dd className="font-display text-h2 font-bold tabular">{metric.value}</dd>
              <dt className="mt-2 text-sm text-muted">{metric.label}</dt>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="surface" ariaLabel="How we delivered it">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Approach" title="How we got there" />
            <ol className="mt-8 space-y-4">
              {project.approach.map((item) => (
                <li key={item.step} className="card">
                  <h3 className="text-h4 font-semibold">{item.step}</h3>
                  <p className="mt-1.5 text-sm text-muted">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="Scope" title="Services on this project" />
            <ul className="mt-8 space-y-2.5">
              {project.services.map((name) => (
                <li key={name} className="flex items-start gap-2.5">
                  <CheckIcon size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-success" />
                  {name}
                </li>
              ))}
            </ul>
            <Button href="/book" variant="primary" className="mt-8">
              Start your project
              <ArrowRightIcon size={18} />
            </Button>
          </div>
        </div>
        <Reveal className="mt-10">
          <p className="text-sm text-muted">
            <Link href="/work" className="font-medium text-brand underline underline-offset-4">
              All case studies
            </Link>
          </p>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow={project.client}
        title="Want results like these?"
        lede="Tell us where you are and where you want to be. We'll map the fastest honest route between the two."
      />
    </>
  );
}
