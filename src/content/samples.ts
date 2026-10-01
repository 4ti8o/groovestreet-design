export type Sample = {
  slug: string;
  /**
   * Public URL of the real, deployed site. The env var overrides the default so
   * swapping in a different build never means touching a component.
   */
  url: string;
  /** Short label for the eyebrow and the card heading. */
  name: string;
  /** What this build demonstrates, in plain words. */
  summary: string;
  features: string[];
};

const DEFAULT_LIVE_URL = "https://hotel-groovestreet.netlify.app/";

/**
 * The live build rendered on /work and in the home proof block. It is also the
 * `liveUrl` of the matching case study in `projects.ts` — one site, one source.
 *
 * design.md §15 bans inventing client names, metrics or awards, so this entry
 * describes only what a visitor can go and open and check. No performance
 * figures are claimed, because none have been measured.
 */
export const samples: Sample[] = [
  {
    slug: "hotel-groovestreet",
    url: process.env.NEXT_PUBLIC_LIVE_SAMPLE_URL || DEFAULT_LIVE_URL,
    name: "Hotel GrooveStreet",
    summary:
      "A live six-page hotel site on a public host. Scroll it, open the menu, walk the room pages.",
    features: [
      "Real deployed build, not a mockup",
      "Six pages plus a booking flow",
      "Published rates on every room type",
    ],
  },
];

export function getLiveSample(): Sample {
  return samples[0];
}
