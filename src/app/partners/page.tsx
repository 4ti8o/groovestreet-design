import { pageMetadata } from "@/lib/seo";
import { partners } from "@/content/proof";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PartnerCard } from "@/components/marketing/partner-card";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata = pageMetadata({
  title: "Partners",
  description:
    "The technology, services and community behind GROOVESTREET DESIGN: modern hosting stacks, Mobile Money-ready checkout, Kampala creatives and agency white-label work.",
  path: "/partners",
});

export default function PartnersPage() {
  const groups = (["Technology", "Services", "Community"] as const).map((kind) => ({
    kind,
    items: partners.filter((partner) => partner.kind === kind),
  }));
  return (
    <>
      <Section ariaLabel="Our partners">
        <SectionHeading
          eyebrow="Partners"
          title="Stronger with the right people"
          lede="Technology we trust, services we recommend, and a community we show up for."
        />
        {groups.map((group) => (
          <div key={group.kind} className="mt-12">
            <h2 className="text-h3 font-semibold">{group.kind}</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((partner, index) => (
                <Reveal key={partner.name} delay={Math.min(index, 3) * 60}>
                  <PartnerCard partner={partner} />
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </Section>
      <CtaBand
        eyebrow="Partner with us"
        title="An agency that needs reliable production?"
        lede="We white-label design, landing pages and care plans for agencies and freelancers who need senior hands without hiring."
      />
    </>
  );
}
