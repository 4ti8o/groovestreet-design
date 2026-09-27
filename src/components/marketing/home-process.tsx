import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProcessGrid } from "@/components/marketing/process-grid";
import { ArrowRightIcon } from "@/components/ui/icons";

export function HomeProcess() {
  return (
    <Section ariaLabel="How working with us works">
      <SectionHeading
        eyebrow="How it works"
        title="First call to launch in six steps"
        lede="No black boxes. You always know what happens next, what we need from you, and when your site goes live."
      />
      <ProcessGrid />
      <Reveal className="mt-10">
        <Button href="/process" variant="outline">
          See the full process
          <ArrowRightIcon size={18} />
        </Button>
      </Reveal>
    </Section>
  );
}
