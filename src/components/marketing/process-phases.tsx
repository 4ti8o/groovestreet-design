import { processPhases } from "@/content/proof";
import { ProcessIcon } from "@/components/marketing/process-icon";
import { Reveal } from "@/components/ui/reveal";

/**
 * The three phases a project moves through, summarising the six detailed steps
 * on the process page. Same open-step treatment as ProcessGrid — ghost numeral,
 * icon, title — so the template's layout reads identically on both pages, but
 * three across rather than six, and each carries the stages it folds together.
 *
 * Palette: strictly three tokens — brand for the icon (via ProcessIcon),
 * accent/15 for the ghost numeral, muted for supporting text. Raw hex is a
 * lint error (eslint.config.mjs, design.md §3.1), so this section cannot drift
 * off-palette. Colour comes from the token with an alpha modifier rather than
 * a new hex: the numeral is a watermark, and orange at 15% over paper lands on
 * the same visual weight as the pale green it replaces, without shouting.
 */
export function ProcessPhases() {
  return (
    <ol className="mt-10 grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-3">
      {processPhases.map((phase, index) => (
        <Reveal key={phase.step} delay={index * 60}>
          <li className="relative min-h-[170px]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-2.5 top-[45px] select-none font-display text-[72px] font-bold leading-none text-accent/15"
            >
              {phase.step}
            </span>
            <span className="relative z-10 flex size-11 items-center justify-center">
              <ProcessIcon icon={phase.icon} />
            </span>
            <div className="relative z-10 mt-4">
              <h3 className="text-h4 font-semibold">{phase.title}</h3>
              <p className="mt-2 text-sm text-muted">{phase.summary}</p>
              <p className="eyebrow mt-3 text-muted">
                {phase.covers} · {phase.duration}
              </p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
