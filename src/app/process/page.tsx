import { pageMetadata } from "@/lib/seo";
import { guarantees } from "@/content/proof";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProcessGrid } from "@/components/marketing/process-grid";
import { DuckIcon, type DuckIconName } from "@/components/marketing/duck-icon";
import { CtaBand } from "@/components/marketing/cta-band";

/** duck.design illustrations for the three guarantees. */
const guaranteeIcons: DuckIconName[] = ["moneyback", "revisions", "coin"];
const guaranteeTones = ["brand", "accent", "tan"] as const;

export const metadata = pageMetadata({
  title: "Our Process",
  description:
    "From discovery call to launch and growth in six steps: strategy, live design sessions, build, quality pass, go-live and ongoing support. A launch date, not a season.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <Section ariaLabel="How working with us works">
        <SectionHeading
          eyebrow="Process"
          title="First call to launch in six steps"
          lede="No black boxes. You always know what happens next, what we need from you, and when your site goes live."
        />
        <ProcessGrid />
      </Section>

      <Section tone="surface" ariaLabel="What you can hold us to">
        <SectionHeading
          eyebrow="Guarantees"
          title="What you can hold us to"
          lede="Three promises that hold on every project we take on."
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {guarantees.map((guarantee, index) => (
            <Reveal as="li" key={guarantee.title} delay={index * 60} className="card h-full">
              <DuckIcon
                name={guaranteeIcons[index % guaranteeIcons.length]}
                tone={guaranteeTones[index % guaranteeTones.length]}
                size="lg"
              />
              <h3 className="mt-4 text-h4 font-semibold">{guarantee.title}</h3>
              <p className="mt-2 text-sm text-muted">{guarantee.detail}</p>
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
