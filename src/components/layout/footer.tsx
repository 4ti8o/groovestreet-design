import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { telHref } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { waHref } from "@/lib/utils";

/** Ink footer per design.md §7.4: 4 columns → 1, contact trio, legal row. */
export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo className="text-paper" suffixClassName="text-accent" />
            <p className="mt-4 max-w-[32ch] text-sm text-muted-invert">
              {site.tagline} {site.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={telHref()} className="inline-flex items-center gap-2.5 hover:underline">
                  <PhoneIcon size={18} aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 hover:underline"
                >
                  <MailIcon size={18} aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={waHref("Hi Groovestreet Design — I'd like to talk about a website.")}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2.5 hover:underline"
                >
                  <WhatsAppIcon size={18} aria-hidden="true" />
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-invert">
                <MapPinIcon size={18} aria-hidden="true" />
                {site.location}
              </li>
            </ul>
          </div>

          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={`Footer — ${group.heading}`}>
              <p className="eyebrow text-paper/70">{group.heading}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-paper/90 hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line-invert pt-6 text-sm text-muted-invert sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener" className="hover:text-accent">
                  {social.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-accent">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-accent">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
