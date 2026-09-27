import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { telHref } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import {
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/ui/icons";
import { waHref } from "@/lib/utils";

/** Footer social glyphs, keyed by site.socials[].icon. */
const socialIcons = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  x: XIcon,
  whatsapp: WhatsAppIcon,
} as const;

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
          <ul className="flex items-center gap-2.5">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-line-invert text-paper/80 transition-colors duration-[var(--dur-fast)] hover:border-accent hover:text-accent"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
            <li className="ml-2">
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
