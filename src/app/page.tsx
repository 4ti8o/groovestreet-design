import { pageMetadata, faqJsonLd } from "@/lib/seo";
import { homeFaqs } from "@/content/packages";
import { graphics } from "@/content/industries";
import { HomeHero, HomePartnerLogos } from "@/components/marketing/home-hero";
import { HomeStats } from "@/components/marketing/home-stats";
import { HomePain } from "@/components/marketing/home-pain";
import { HomeProcess } from "@/components/marketing/home-process";
import { HomeProof } from "@/components/marketing/home-proof";
import { HomeServices } from "@/components/marketing/home-services";
import { HomeIndustries } from "@/components/marketing/home-industries";
import { HomeTestimonials, HomeGuarantees } from "@/components/marketing/home-proof-two";
import { HomePricing, HomeFaq } from "@/components/marketing/home-close";
import { CtaBand } from "@/components/marketing/cta-band";
import { Section, SectionHeading } from "@/components/ui/section";
import { GraphicMarquee } from "@/components/ui/graphic-marquee";
import { heroShowcase } from "@/content/industries";

export const metadata = pageMetadata({
  title: "Website Design Studio in Kampala",
  description:
    "Premium quality at affordable UGX rates. Websites designed, built and looked after for service businesses in Kampala, Uganda and worldwide. Fixed prices, clear launch dates, support that answers.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(homeFaqs)) }}
      />
      <HomeHero />
      <HomeServices />
      <HomeStats />
      <HomePain />
      <HomePricing />
      <HomeProcess />
      <HomeProof />

      {/* The duck.design graphic-design strip. It sits directly after the live
          sample so the page goes: real live build → the design work around it,
          which is the same order /work uses. */}
      <Section ariaLabel="Graphic design" className="py-14 md:py-16 lg:py-20">
        <SectionHeading
          eyebrow="Graphic design"
          title="Logos, flyers and the work around the website"
          lede="Most clients need more than a site. Brand marks, campaign pieces and print-ready artwork, delivered alongside the build."
          align="center"
        />
        <GraphicMarquee graphics={graphics} className="mt-10" />
      </Section>

      {/* The screen strip, directly under the graphic-design strip and drifting
          the opposite way — two rows in counter-movement read as depth rather
          than as one long belt. */}
      <div className="pb-14 md:pb-16 lg:pb-20">
        <GraphicMarquee
          graphics={heroShowcase}
          speed="animate-marquee-reverse"
        />
      </div>

      <HomeIndustries />
      <HomePartnerLogos />
      <HomeTestimonials />
      <HomeGuarantees />
      <HomeFaq />
      <CtaBand />
    </>
  );
}
