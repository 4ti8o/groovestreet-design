import { processSteps } from "@/content/proof";
import { ProcessIcon } from "@/components/marketing/process-icon";
import { Reveal } from "@/components/ui/reveal";

/**
 * Process steps, ported from process-template.html: open steps in a three-up
 * grid with an oversized ghost numeral set behind each icon. One column on
 * phones, two from sm, three from lg — the template's 550px and 800px breaks —
 * and the wide column/row gaps (55px) that give the layout its air.
 *
 * Used by the process page for the full six steps; the home page summarises
 * the same work as three phases via ProcessPhases.
 *
 * Palette: strictly three tokens — brand for the icon (via ProcessIcon),
 * accent/25 for the ghost numeral, muted for supporting text. Raw hex is a
 * lint error (eslint.config.mjs, design.md §3.1), so this section cannot drift
 * off-palette. Colour comes from the token with an alpha modifier rather than
 * a new hex: 25% keeps the numeral clearly legible as a number while still
 * reading as a watermark behind the title rather than competing with it.
 */
export function ProcessGrid() {
  return (
    <ol className="mt-10 grid grid-cols-1 gap-x-14 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {processSteps.map((step, index) => (
        <Reveal key={step.step} delay={Math.min(index, 5) * 60}>
          <li className="relative min-h-[170px]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-2.5 top-[45px] select-none font-display text-[72px] font-bold leading-none text-accent/25"
            >
              {step.step}
            </span>
            <span className="relative z-10 flex size-11 items-center justify-center">
              <ProcessIcon icon={step.icon} />
            </span>
            <div className="relative z-10 mt-4">
              <h3 className="text-h4 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.detail}</p>
              <p className="eyebrow mt-3 text-muted">{step.duration}</p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
