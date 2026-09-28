export type Sample = {
  slug: string;
  /**
   * Public URL of the real, deployed site. Empty until it is configured, in
   * which case the embed renders its setup state instead of an iframe. The
   * URL is read from NEXT_PUBLIC_LIVE_SAMPLE_URL so swapping in a different
   * build never means touching a component.
   */
  url: string;
  /** Short label for the eyebrow and the card heading. */
  name: string;
  /** What this build demonstrates, in plain words. */
  summary: string;
  features: string[];
};

/**
 * The live build rendered on /work and in the home proof block.
 *
 * design.md §15 bans inventing client names, metrics or awards, so this entry
 * describes only the build itself — never a claim about who it was made for or
 * what it achieved. Put the real project's details here once they are cleared
 * for publication.
 */
export const samples: Sample[] = [
  {
    slug: "live-build",
    url: process.env.NEXT_PUBLIC_LIVE_SAMPLE_URL ?? "",
    name: "This site, live",
    summary:
      "The page you are reading, running on a real host. Scroll it, open the menu, resize the window.",
    features: [
      "Real deployed build, not a mockup",
      "Every breakpoint from 360px up",
      "Same tokens and components as this page",
    ],
  },
];

export function getLiveSample(): Sample {
  return samples[0];
}
