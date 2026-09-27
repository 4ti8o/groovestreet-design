import { site } from "@/lib/site";
import { contactDefaults, telHref, waHref } from "@/lib/utils";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

/**
 * Fixed bottom action bar < 768px: call · WhatsApp · email (§5, §10).
 * `body` reserves 76px at this breakpoint (globals.css).
 */
export function MobileActionBar() {
  const wa = waHref("Hi Groovestreet Design — I'd like to talk about a website.");
  const items = [
    { label: `Call ${site.phoneDisplay}`, href: telHref(), Icon: PhoneIcon },
    { label: `WhatsApp ${site.whatsappDisplay}`, href: contactDefaults.whatsapp || wa, Icon: WhatsAppIcon },
    { label: `Email ${site.email}`, href: `mailto:${site.email}`, Icon: MailIcon },
  ];
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur md:hidden"
    >
      <ul className="grid grid-cols-3">
        {items.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener" : undefined}
              className="flex min-h-[64px] flex-col items-center justify-center gap-1 text-label font-medium uppercase tracking-[0.12em] text-ink"
              aria-label={label}
            >
              <Icon size={20} aria-hidden="true" />
              <span className="sr-only">{label}</span>
              <span aria-hidden="true">{href.startsWith("tel:") ? "Call" : href.startsWith("mailto:") ? "Email" : "WhatsApp"}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
