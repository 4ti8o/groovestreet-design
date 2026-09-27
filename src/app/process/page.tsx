import { pageMetadata } from "@/lib/seo";
import { processSteps, guarantees } from "@/content/proof";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/marketing/cta-band";
import { CheckIcon } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "Our Process",
  description:
    "From discovery call to launch and growth in five steps: strategy, live design sessions, build, quality pass and ongoing support. A launch date, not a season.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <Section ariaLabel="How working with us works">
        <SectionHeading
          eyebrow="Process"
          title="First call to launch in five steps"
          lede="No black boxes. You always know what happens next, what we need from you, and when your site goes live."
        />
        <ol className="mt-12 space-y-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={Math.min(index, 4) * 60}>
              <li className="card grid gap-4 md:grid-cols-[100px_1fr_auto] md:items-start">
                <p className="font-display text-h1 font-bold tabular text-accent-text">{step.step}</p>
                <div>
                  <h3 className="text-h3 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted">{step.detail}</p>
                </div>
                <p className="eyebrow text-muted md:pt-2">{step.duration}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="surface" ariaLabel="What you can hold us to">
        <SectionHeading
          eyebrow="Guarantees"
          title="What you can hold us to"
          lede="Three promises that hold on every project we take on."
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {guarantees.map((guarantee, index) => (
            <Reveal key={guarantee.title} delay={index * 60}>
              <li className="card h-full">
                <span className="flex size-11 items-center justify-center rounded-full bg-success-tint text-success">
                  <CheckIcon size={20} />
                </span>
                <h3 className="mt-4 text-h4 font-semibold">{guarantee.title}</h3>
                <p className="mt-2 text-sm text-muted">{guarantee.detail}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBand
        eyebrow="Start at step one"
        title="The discovery call is free"
        lede="Thirty minutes on call or WhatsApp. We'll tell you if we're the right studio — and if we're not, we'll say who is."
      />
    </>
  );
}
