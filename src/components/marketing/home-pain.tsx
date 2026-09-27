import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRightIcon } from "@/components/ui/icons";

const painPoints = [
  {
    pain: "\u201cYou built it yourself and it shows.\u201d",
    fix: "A DIY site tells prospects you cut corners before they meet you. We replace it with design that looks like the business you are becoming.",
  },
  {
    pain: "\u201cNobody finds us on Google.\u201d",
    fix: "Page four is invisible. We fix technical SEO, speed and your Google Business Profile so the right searches land on you.",
  },
  {
    pain: "\u201cVisitors look, then leave.\u201d",
    fix: "Traffic without enquiries is a messaging problem. We rewrite pages around one action: call, book, or message.",
  },
  {
    pain: "\u201cOur last designer disappeared.\u201d",
    fix: "Fixed price in writing, a launch date in the agreement, handover where you own everything. No hostage situations.",
  },
];

export function HomePain() {
  return (
    <Section ariaLabel="Common website problems we fix">
      <SectionHeading
        eyebrow="Sound familiar?"
        title="Your website should win clients"
        lede="The four sentences we hear on almost every first call. Each has a fix smaller than you fear."
      />
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {painPoints.map((item, index) => (
          <Reveal key={item.pain} delay={Math.min(index, 3) * 60}>
            <li className="card h-full">
              <p className="font-display text-h3 font-semibold">{item.pain}</p>
              <p className="mt-3 text-muted">{item.fix}</p>
            </li>
          </Reveal>
        ))}
      </ul>
      <Reveal className="mt-6">
        <Button href="/contact" variant="outline">
          Tell us which one is you
          <ArrowRightIcon size={18} />
        </Button>
      </Reveal>
      <p className="mt-4 text-sm text-muted">
        Prefer to browse?{" "}
        <Link href="/services" className="font-medium text-brand underline underline-offset-4">
          See services
        </Link>
      </p>
    </Section>
  );
}
