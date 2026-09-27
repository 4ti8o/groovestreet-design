import type { ComponentType } from "react";
import { GaugeIcon, MonitorIcon, PaletteIcon, RefreshIcon, SearchIcon, TargetIcon } from "@/components/ui/icons";
import type { Service } from "@/content/services";

const iconMap: Record<Service["icon"], ComponentType<{ size?: number; className?: string }>> = {
  monitor: MonitorIcon,
  target: TargetIcon,
  palette: PaletteIcon,
  search: SearchIcon,
  refresh: RefreshIcon,
};

/** Resolves a content icon key to its stroke icon (icons.tsx set). */
export function ServiceIcon({ icon, size = 24, className }: { icon: Service["icon"]; size?: number; className?: string }) {
  const Icon = iconMap[icon];
  return <Icon size={size} className={className} />;
}

/** Star used by StatsIcon units. */
export { GaugeIcon as StatsIcon };
