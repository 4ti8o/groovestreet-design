import {
  FileTextIcon,
  GaugeIcon,
  MonitorIcon,
  PaletteIcon,
  PhoneIcon,
  SparkleIcon,
} from "@/components/ui/icons";
import type { ProcessStep } from "@/content/proof";

const iconMap = {
  call: PhoneIcon,
  plan: FileTextIcon,
  design: PaletteIcon,
  build: MonitorIcon,
  launch: SparkleIcon,
  grow: GaugeIcon,
} as const;

/** Resolves a process step icon key to its stroke icon (icons.tsx set). */
export function ProcessIcon({ icon, size = 32 }: { icon: ProcessStep["icon"]; size?: number }) {
  const Icon = iconMap[icon];
  return <Icon size={size} className="text-brand" aria-hidden="true" />;
}
