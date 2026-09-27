import { site } from "@/lib/site";
import { telHref, waHref } from "@/lib/utils";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const defaultMessage = "Hi Groovestreet Design — I'd like to talk about a website.";

const channels = [
  {
    name: "Call",
    value: site.phoneDisplay,
    href: telHref(),
    note: "Mon–Fri, 9:00–18:00 EAT",
    Icon: PhoneIcon,
  },
  {
    name: "WhatsApp",
    value: site.whatsappDisplay,
    href: waHref(defaultMessage),
    note: "Fastest reply",
    Icon: WhatsAppIcon,
    external: true,
  },
  {
    name: "Email",
    value: site.email,
    href: `mailto:${site.email}?subject=${encodeURIComponent("Website enquiry")}`,
    note: "Replies within one business day",
    Icon: MailIcon,
  },
];

/** The three first-class contact actions (§10): call · WhatsApp · email. */
export function ContactChannels({ className }: { className?: string }) {
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-3", className)}>
      {channels.map(({ name, value, href, note, Icon, external }) => (
        <li key={name} className="card group transition-colors duration-[var(--dur-fast)] hover:border-ink">
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener" : undefined}
            className="flex h-full flex-col gap-3"
            aria-label={`${name}: ${value}`}
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-brand-tint text-brand-dark">
              <Icon size={20} />
            </span>
            <span>
              <span className="eyebrow block text-muted">{name}</span>
              <span className="mt-1.5 block font-display text-h4 font-semibold break-all">
                {value}
              </span>
            </span>
            <span className="mt-auto text-sm text-muted">{note}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Compact inline trio for heroes: "Call · WhatsApp · Email" with dividers. */
export function ContactTrio({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-4 gap-y-2 text-sm", className)}>
      <a href={telHref()} className={cn("inline-flex items-center gap-2 font-medium hover:underline", dark ? "text-paper" : "text-ink")}>
        <PhoneIcon size={16} /> {site.phoneDisplay}
      </a>
      <span aria-hidden="true" className={dark ? "text-paper/40" : "text-muted"}>·</span>
      <a
        href={waHref(defaultMessage)}
        target="_blank"
        rel="noopener"
        className={cn("inline-flex items-center gap-2 font-medium hover:underline", dark ? "text-paper" : "text-ink")}
      >
        <WhatsAppIcon size={16} /> WhatsApp
      </a>
      <span aria-hidden="true" className={dark ? "text-paper/40" : "text-muted"}>·</span>
      <a href={`mailto:${site.email}`} className={cn("inline-flex items-center gap-2 font-medium hover:underline", dark ? "text-paper" : "text-ink")}>
        <MailIcon size={16} /> {site.email}
      </a>
    </p>
  );
}
