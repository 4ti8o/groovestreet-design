import { cn } from "@/lib/utils";

/**
 * Service tile backdrop. Black and white at rest, warming to full colour on
 * hover, capped at 70% so the accent never overwhelms the copy. The artwork
 * is masked to the right edge, which keeps the tile text on a clean field even
 * at full strength, and the layer is inert for pointer and assistive tech.
 */
export function ServiceArtwork({
  src,
  mask = "linear-gradient(to left, black 0%, black 30%, transparent 72%)",
  className,
}: {
  src: string;
  mask?: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        // bg-right: the mask reveals the right edge, so the subject lands where
        // the artwork is actually visible — matters on the wide /services rows,
        // where bg-cover of a photo would otherwise show a thin central slice.
        "pointer-events-none absolute inset-0 bg-cover bg-right opacity-[0.16] grayscale transition-[opacity,filter] duration-500 ease-[var(--ease-groove)] group-hover:opacity-[0.7] group-hover:grayscale-0 motion-reduce:transition-none",
        className,
      )}
      style={{ backgroundImage: `url(${src})`, WebkitMaskImage: mask, maskImage: mask }}
    />
  );
}
