import {
  GaugeIcon,
  MonitorIcon,
  PaletteIcon,
  RefreshIcon,
  ShieldIcon,
  SparkleIcon,
  TargetIcon,
} from "@/components/ui/icons";

/**
 * One icon chip per tier — flat stroke set on brand tint (design.md §9).
 * Shared by the pricing cards and the care plan page so both stay in step.
 */
export function planIcon(name: string) {
  const Icon =
    name === "Landing Page"
      ? MonitorIcon
      : name === "Launchpad"
        ? TargetIcon
        : name === "Signature"
          ? PaletteIcon
          : name === "Authority"
            ? GaugeIcon
            : name === "Care · Launchpad"
              ? ShieldIcon
              : name === "Care · Signature"
                ? RefreshIcon
                : SparkleIcon;
  return <Icon size={20} aria-hidden="true" />;
}
