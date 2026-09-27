import Link from "next/link";
import { processSteps } from "@/content/proof";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRightIcon } from "@/components/ui/icons";

export function HomeProcess() {
  return (
    <Section ariaLabel="How working with us works">
      <SectionHeading
        eyebrow="How it works"
        title="First call to launch in five steps"
        lede="No black boxes. You always know what happens next and when your site goes live."
      />
      <ol className="mt-10 grid gap-4 lg:grid-cols-3">
        {processSteps.slice(0, 3).map((step, index) => (
          <Reveal key={step.step} delay={index * 60}>
            <li className="card h-full">
              <p className="font-display text-h1 font-bold tabular text-accent-text">{step.step}</p>
              <h3 className="mt-3 text-h3 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.detail}</p>
              <p className="eyebrow mt-4 text-muted">{step.duration}</p>
            </li>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-6">
        <Button href="/process" variant="outline">
          See the full process
          <ArrowRightIcon size={18} />
        </Button>
      </Reveal>
      <p className="mt-4 text-sm text-muted">
        Steps 4 and 5?{" "}
        <Link href="/process" className="font-medium text-brand underline underline-offset-4">
          Build, launch and grow
        </Link>
      </p>
    </Section>
  );
}
