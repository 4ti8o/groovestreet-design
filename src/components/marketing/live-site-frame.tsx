import { ArrowUpRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/**
 * A real, deployed site rendered in place (design.md §9).
 *
 * `loading="lazy"` is the whole performance story here: the browser defers the
 * fetch until the frame is near the viewport, so this costs nothing on first
 * paint and the page's LCP is still decided by our own markup. It is a plain
 * server component — an iframe needs no client JavaScript at all.
 *
 * Two caveats worth knowing, both handled rather than hidden:
 *  - A site that sends `X-Frame-Options: DENY` or a `frame-ancestors` CSP will
 *    refuse to render here, and the browser shows a blank frame with no error.
 *    The "Open the live site" link is therefore always present, so a blocked
 *    embed is never a dead end.
 *  - design.md §13 caps first-visit JS at 140KB. An embedded site is a second
 *    site — its own JS, fonts and images all land in the tab. If Lighthouse
 *    regresses, the fix is a click-to-load poster, not removing the embed.
 */
export function LiveSiteFrame({
  url,
  title,
  className,
  tone = "light",
}: {
  url: string;
  /** Accessible name for the frame. Describes the site, never "iframe". */
  title: string;
  className?: string;
  /** `dark` for ink sections. */
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-lg border",
        dark ? "border-line-invert bg-ink-2" : "border-line bg-surface",
        className,
      )}
    >
      {/* Browser chrome, so the embed reads as "a site in a window". */}
      <div
        className={cn(
          "flex items-center gap-3 border-b px-4 py-3",
          dark ? "border-line-invert" : "border-line",
        )}
      >
        <span aria-hidden="true" className="flex shrink-0 gap-1.5">
          <span className="size-2.5 rounded-full bg-accent" />
          <span className="size-2.5 rounded-full bg-muted opacity-40" />
          <span className="size-2.5 rounded-full bg-muted opacity-40" />
        </span>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener"
            className={cn(
              "inline-flex min-w-0 items-center gap-1.5 truncate rounded-sm font-mono text-xs",
              dark
                ? "text-muted-invert underline-offset-4 hover:underline"
                : "text-muted underline-offset-4 hover:underline",
            )}
          >
            <span className="truncate">{url.replace(/^https?:\/\//, "")}</span>
            <ArrowUpRightIcon size={12} aria-hidden="true" className="shrink-0" />
            <span className="sr-only">(opens the live site in a new tab)</span>
          </a>
        ) : (
          <span
            className={cn("truncate font-mono text-xs", dark ? "text-muted-invert" : "text-muted")}
          >
            No live URL configured
          </span>
        )}
      </div>

      {url ? (
        <iframe
          src={url}
          title={title}
          loading="lazy"
          // allow-same-origin + allow-scripts is what a normal site needs to
          // run at all; allow-popups keeps its own links openable.
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          referrerPolicy="no-referrer"
          className="block aspect-[16/10] w-full border-0"
        />
      ) : (
        // Setup state. Only reachable until NEXT_PUBLIC_LIVE_SAMPLE_URL is set.
        <div
          className={cn(
            "flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 p-6 text-center",
            dark ? "text-muted-invert" : "text-muted",
          )}
        >
          <p className="text-sm">
            Set <code className="font-mono text-xs">NEXT_PUBLIC_LIVE_SAMPLE_URL</code> to render a
            live site here.
          </p>
        </div>
      )}

      <figcaption className="sr-only">{title}</figcaption>
    </figure>
  );
}
