import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRightIcon,
  PaletteIcon,
  SearchIcon,
  ShieldIcon,
  TargetIcon,
} from "@/components/ui/icons";

const painPoints = [
  {
    pain: "\u201cYou built it yourself and it shows.\u201d",
    fix: "A DIY website tells visitors that you cut corners before they meet you. We transform it into a professional design that looks like the business you are becoming.",
    Icon: PaletteIcon,
  },
  {
    pain: "\u201cNobody finds us on Google.\u201d",
    fix: "We fix technical SEO, speed and your Google Business Profile so the right searches land on you instantly.",
    Icon: SearchIcon,
  },
  {
    pain: "\u201cVisitors look, then leave.\u201d",
    fix: "Traffic without enquiries is a messaging problem. We rewrite pages around one action: call, book, or message.",
    Icon: TargetIcon,
  },
  {
    pain: "\u201cOur last designer disappeared.\u201d",
    fix: "We offer standard pricing, a clear timeline to launch and handover everything you own. No hostage situations.",
    Icon: ShieldIcon,
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
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {painPoints.map((item, index) => (
          <Reveal as="li" key={item.pain} delay={Math.min(index, 3) * 60} className="card h-full">
            <span className="flex size-11 items-center justify-center rounded-full bg-brand-tint text-brand-dark">
              <item.Icon size={20} />
            </span>
            <p className="mt-4 font-display text-h3 font-semibold">{item.pain}</p>
            <p className="mt-3 text-muted">{item.fix}</p>
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
