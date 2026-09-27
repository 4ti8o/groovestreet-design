import { pageMetadata, faqJsonLd } from "@/lib/seo";
import { homeFaqs } from "@/content/packages";
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
      <HomeStats />
      <HomePartnerLogos />
      <HomePain />
      <HomeProcess />
      <HomeProof />
      <HomeServices />
      <HomePricing />
      <HomeIndustries />
      <HomeTestimonials />
      <HomeGuarantees />
      <HomeFaq />
      <CtaBand />
    </>
  );
}
