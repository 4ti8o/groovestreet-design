import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GlobeIcon, PaletteIcon, UsersIcon } from "@/components/ui/icons";
import type { Partner } from "@/content/proof";

const kindIcons = {
  Corporate: GlobeIcon,
  Services: PaletteIcon,
  Community: UsersIcon,
} as const;

/**
 * Shared partner card (about, partners): flat icon chip + kind + text.
 *
 * Renders a <div> because every call site wraps it in <Reveal as="li">: the
 * reveal element is the list item, so a nested <li> here would break the
 * <ul>/<ol> structure (WCAG 1.3.1).
 */
export function PartnerCard({ partner }: { partner: Partner }) {
  const Icon = kindIcons[partner.kind];
  return (
    <div className="card h-full">
      <span className="flex h-11 items-center">
        {partner.logo ? (
          <Image
            src={partner.logo.src}
            alt={`${partner.name} logo`}
            width={partner.logo.width}
            height={partner.logo.height}
            className="h-10 w-auto max-w-[160px] object-contain"
          />
        ) : (
          <span className="flex size-11 items-center justify-center rounded-full bg-brand-tint text-brand-dark">
            <Icon size={20} />
          </span>
        )}
      </span>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge tone="neutral">{partner.kind}</Badge>
      </div>
      <h3 className="mt-3 text-h4 font-semibold">{partner.name}</h3>
      <p className="mt-2 text-sm text-muted">{partner.description}</p>
    </div>
  );
}
