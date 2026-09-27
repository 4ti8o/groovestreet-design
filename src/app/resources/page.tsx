import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { posts } from "@/content/posts";
import { Section, SectionHeading } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/marketing/cta-band";
import { ArrowUpRightIcon, ArrowRightIcon } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "Resources",
  description:
    "Practical guides on websites, SEO and getting clients: the 5-second homepage test, Google Business Profiles, WhatsApp-first design and buying a website without regret.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <Section ariaLabel="Guides and articles">
        <SectionHeading
          eyebrow="Resources"
          title="Guides worth your coffee break"
          lede="Short, practical reads on websites that win clients. No growth-hacking, no fluff."
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={Math.min(index, 3) * 60}>
              <li className="h-full">
                <Link
                  href={`/resources/${post.slug}`}
                  className="card group flex h-full flex-col gap-3 transition-colors duration-[var(--dur-fast)] hover:border-ink"
                >
                  <div className="flex items-center gap-2">
                    <Badge tone="accent">{post.category}</Badge>
                    <span className="text-sm text-muted">{post.readingMinutes}-min read</span>
                  </div>
                  <h3 className="text-h3 font-semibold">{post.title}</h3>
                  <p className="text-sm text-muted">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-brand">
                    Read the guide
                    <ArrowUpRightIcon
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-[var(--dur-fast)] group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-8">
          <Button href="/contact" variant="outline">
            Want a topic covered? Ask us
            <ArrowRightIcon size={18} />
          </Button>
        </Reveal>
      </Section>
      <CtaBand
        eyebrow="Put it into practice"
        title="Reading is good. A better website is better."
        lede="Bring what you learned on this page to a free discovery call — we'll audit your current site live."
      />
    </>
  );
}
