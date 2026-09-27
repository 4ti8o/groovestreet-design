import type { SVGProps } from "react";
import { suppressSubtree } from "@/lib/hydration";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

/** Single stroke set per design.md §9: 1.5px, currentColor, 24px grid. */
function Stroke({ size = 24, children, ...rest }: IconProps) {
  return (
    <svg
      suppressHydrationWarning
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {suppressSubtree(children)}
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </Stroke>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Stroke>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z" />
      <g transform="translate(7.6 7.6) scale(0.367)" fill="currentColor" stroke="none">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </g>
    </Stroke>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Stroke>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Stroke>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Stroke>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Stroke>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Stroke>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m6 9 6 6 6-6" />
    </Stroke>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </Stroke>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 21s7-5.8 7-11a7 7 0 1 0-14 0c0 5.2 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Stroke>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.5 2" />
    </Stroke>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.8-3.8" />
    </Stroke>
  );
}

export function MonitorIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path d="M9 20.5h6M12 16.5v4" />
    </Stroke>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </Stroke>
  );
}

export function PaletteIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.9 2-2 0-.5-.2-1-.6-1.3-.3-.3-.6-.7-.6-1.2 0-1 .8-1.8 1.8-1.8h1.7a4.7 4.7 0 0 0 4.7-4.7C21 6 17 3 12 3Z" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="8" r="1" fill="currentColor" stroke="none" />
    </Stroke>
  );
}

export function PenIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m4 20 1-4L16.5 4.5a1.4 1.4 0 0 1 2 0l1 1a1.4 1.4 0 0 1 0 2L8 19l-4 1Z" />
      <path d="m14.5 6.5 3 3" />
    </Stroke>
  );
}

export function GaugeIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4.5 17.5a9 9 0 1 1 15 0" />
      <path d="m12 13 4-4" />
      <circle cx="12" cy="13.5" r="1.2" fill="currentColor" stroke="none" />
    </Stroke>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3l7 2.8v5.4c0 4.4-2.9 7.6-7 9.8-4.1-2.2-7-5.4-7-9.8V5.8L12 3Z" />
      <path d="m9 11.5 2.2 2.2 4.3-4.7" />
    </Stroke>
  );
}

export function RefreshIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 3.5V8h-4.5" />
    </Stroke>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.2 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.2-3.8-8.5s1.3-6.2 3.8-8.5Z" />
    </Stroke>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M17.6 14.9c2 .8 3.4 2.6 3.4 5.1" />
    </Stroke>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M6 2.5h8L19 8v13.5H6V2.5Z" />
      <path d="M13.5 2.5V8H19M9 12.5h6M9 16h6" />
    </Stroke>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3c.6 4.5 2.5 6.4 7 7-4.5.6-6.4 2.5-7 7-.6-4.5-2.5-6.4-7-7 4.5-.6 6.4-2.5 7-7Z" />
    </Stroke>
  );
}

/** Price tag for price tiles on service pages and pricing cards. */
export function TagIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M3.5 12.7V4.5a1 1 0 0 1 1-1h8.2a1 1 0 0 1 .7.3l7 7a1 1 0 0 1 0 1.4l-8.2 8.2a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1-.3-.7Z" />
      <circle cx="8" cy="8" r="1.5" />
    </Stroke>
  );
}

export function StarIcon({
  filled = false,
  size = 24,
  ...rest
}: Omit<IconProps, "size"> & { size?: number; filled?: boolean }) {
  return (
    <svg
      suppressHydrationWarning
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path suppressHydrationWarning d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.9L12 3.5Z" />
    </svg>
  );
}

