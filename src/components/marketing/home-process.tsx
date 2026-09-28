import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProcessPhases } from "@/components/marketing/process-phases";
import { ArrowRightIcon } from "@/components/ui/icons";

export function HomeProcess() {
  return (
    <Section ariaLabel="How working with us works">
      <SectionHeading
        eyebrow="How it works"
        title="Three stages from first call to launch"
        lede="The shape of every project. Each stage folds two steps together — the detail, timings and what we need from you are on the process page."
      />
      <ProcessPhases />
      <Reveal className="mt-10">
        <Button href="/process" variant="outline">
          See the full process
          <ArrowRightIcon size={18} />
        </Button>
      </Reveal>
    </Section>
  );
}
