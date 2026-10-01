import { TeamPortrait } from "@/components/marketing/team-portrait";
import { DuckIcon, type DuckIconName } from "@/components/marketing/duck-icon";
import { CheckIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import type { TeamMember } from "@/content/team";

/** A duck.design illustration per seat, so each profile is recognisable. */
const roleIcons: Record<TeamMember["id"], DuckIconName> = {
  "atigo-paul-odoch": "brand",
  "placeholder-graphics": "artdir",
  "placeholder-developer": "trello",
  "placeholder-support": "realtime",
};

/** Small pill used for interests, hobbies and focus areas. */
function Chip({ children }: { children: string }) {
  return (
    <li className="rounded-pill border border-line bg-paper px-3.5 py-1.5 text-sm">
      {children}
    </li>
  );
}

/**
 * A single team profile.
 *
 * Heading order inside the card is h3 (name) → h4 (each labelled block), which
 * keeps the page's h1 → h2 → h3 → h4 chain unbroken (design.md §4.2, §11).
 */
export function TeamCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card flex h-full flex-col p-0 overflow-hidden">
        <TeamPortrait member={member} className="aspect-[4/5] w-full object-cover" />

        <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
          <div>
            <div className="flex items-center gap-3">
              <DuckIcon name={roleIcons[member.id]} tone="accent" size="sm" />
              <p className="eyebrow text-brand">{member.role}</p>
            </div>
            <h3 className="mt-3 text-h3 font-semibold">{member.name}</h3>
            <p className="mt-3 text-lg text-ink">{member.tagline}</p>
          </div>

          <p className="text-muted">{member.bio}</p>

          <div>
            <h4 className="eyebrow text-muted">Owns on a project</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {member.focus.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ul>
          </div>

          <hr className="rule-dashed" />

          <div>
            <h4 className="eyebrow text-muted">Away from the studio</h4>
            <p className="mt-3 text-sm text-muted">
              <span className="font-semibold text-ink">Interested in:</span>{" "}
              {member.interests.join(", ")}.
            </p>
            <p className="mt-2 text-sm text-muted">
              <span className="font-semibold text-ink">Hobbies:</span>{" "}
              {member.hobbies.join("; ")}.
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-muted">What drives them</h4>
            <blockquote className="mt-3 font-display text-lg italic leading-snug text-ink">
              {member.motivation}
            </blockquote>
          </div>

          <hr className="rule-dashed" />

          <div className="mt-auto">
            <h4 className="eyebrow text-muted">Milestones</h4>
            <ul className="mt-3 space-y-2.5">
              {member.achievements.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <CheckIcon
                    size={16}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-success"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}