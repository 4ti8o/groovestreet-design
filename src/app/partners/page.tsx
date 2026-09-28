import { pageMetadata } from "@/lib/seo";
import { partners } from "@/content/proof";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PartnerCard } from "@/components/marketing/partner-card";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata = pageMetadata({
  title: "Partners",
  description:
    "Corporate partners, white-label production and community work: the Ugandan brands, studios and organisations GROOVESTREET DESIGN builds alongside — real relationships, not rented logos.",
  path: "/partners",
});

const groupLabels = {
  Corporate: "Corporate partners",
  Services: "Services",
  Community: "Community",
} as const;

export default function PartnersPage() {
  const groups = (["Corporate", "Services", "Community"] as const)
    .map((kind) => ({
      kind,
      items: partners.filter((partner) => partner.kind === kind),
    }))
    .filter((group) => group.items.length > 0);
  return (
    <>
      <Section ariaLabel="Our partners">
        <SectionHeading
          eyebrow="Partners"
          title="Stronger with the right people"
          lede="Uganda's leading brands plus the studios, creatives and communities we build alongside — real relationships, not rented logos."
        />
        <Reveal className="mt-8">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact#book" variant="primary">
              Become a Partner
            </Button>
            <Button href="/pricing" variant="outline">
              See our pricing
            </Button>
          </div>
        </Reveal>
        {groups.map((group) => (
          <div key={group.kind} className="mt-12">
            <h2 className="text-h3 font-semibold">{groupLabels[group.kind]}</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((partner, index) => (
                <Reveal as="li" key={partner.name} delay={Math.min(index, 3) * 60}>
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
