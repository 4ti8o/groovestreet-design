import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { getIndustry, industries } from "@/content/industries";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/marketing/cta-band";
import { ContactChannels } from "@/components/marketing/contact-channels";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    title: `Web Design for ${industry.name}`,
    description: `${industry.headline} ${industry.description}`,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <Section ariaLabel={industry.name}>
        <Eyebrow>Industries · {industry.name}</Eyebrow>
        <h1 className="mt-4 max-w-[18ch] text-display font-bold">{industry.headline}</h1>
        <p className="mt-5 max-w-[56ch] text-xl text-muted">{industry.description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="primary">Get in Touch</Button>
          <Button href="/work" variant="outline">See related work</Button>
        </div>
      </Section>

      <Section tone="surface" ariaLabel="Typical projects">
        <SectionHeading eyebrow="Typical projects" title={`What ${industry.name.toLowerCase()} usually need`} />
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {industry.typicalProjects.map((project, index) => (
            <Reveal key={project} delay={index * 60}>
              <li className="card flex h-full items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-success-tint text-success">
                  <CheckIcon size={18} />
                </span>
                <span className="font-semibold">{project}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section ariaLabel="Contact about your project">
        <SectionHeading eyebrow="Next step" title={industry.cta} />
        <ContactChannels className="mt-10" />
        <Reveal className="mt-8">
          <p className="text-sm text-muted">
            Browsing other sectors?{" "}
            <Link href="/industries" className="font-medium text-brand underline underline-offset-4">
              All industries
            </Link>{" "}
            <ArrowRightIcon size={14} aria-hidden="true" className="inline" />
          </p>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow={industry.name}
        title={industry.cta}
        lede="One call or message starts it. We'll tell you whether a new site, a landing page, or better words will move the needle most."
      />
    </>
  );
}
