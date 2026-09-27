import { pageMetadata, faqJsonLd } from "@/lib/seo";
import { homeFaqs } from "@/content/packages";
import { HomeHero, HomeStack } from "@/components/marketing/home-hero";
import { HomePain } from "@/components/marketing/home-pain";
import { HomeProcess } from "@/components/marketing/home-process";
import { HomeProof } from "@/components/marketing/home-proof";
import { HomeServices } from "@/components/marketing/home-services";
import { HomeIndustries } from "@/components/marketing/home-industries";
import { HomeTestimonials, HomeGuarantees } from "@/components/marketing/home-proof-two";
import { HomePricing, HomePartners, HomeFaq } from "@/components/marketing/home-close";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata = pageMetadata({
  title: "Website Design Studio in Kampala",
  description:
    "Websites designed, written, built and looked after for service businesses in Kampala, Uganda and worldwide. Fixed prices, launch dates in writing, support that answers.",
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
      <HomeStack />
      <HomePain />
      <HomeProcess />
      <HomeProof />
      <HomeServices />
      <HomeIndustries />
      <HomeTestimonials />
      <HomeGuarantees />
      <HomePricing />
      <HomePartners />
      <HomeFaq />
      <CtaBand />
    </>
  );
}
