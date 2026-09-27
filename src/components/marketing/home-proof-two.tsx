import { testimonials, guarantees } from "@/content/proof";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { CheckIcon } from "@/components/ui/icons";

export function HomeTestimonials() {
  return (
    <Section ariaLabel="What clients say">
      <SectionHeading
        eyebrow="Client words"
        title="Rated on what actually matters"
        lede="Quality, schedule, cost and willingness to refer. Here is what business owners have to say."
      />
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.company} testimonial={t} delay={i * 60} />
        ))}
      </div>
    </Section>
  );
}

export function HomeGuarantees() {
  return (
    <Section tone="surface" ariaLabel="Our guarantees">
      <SectionHeading
        eyebrow="Guarantees"
        title="Promises you can hold us to"
        lede="Adjectives are cheap. These three terms sit in every agreement we sign."
      />
      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {guarantees.map((g, i) => (
          <Reveal key={g.title} delay={i * 60}>
            <li className="card h-full">
              <span className="flex size-11 items-center justify-center rounded-full bg-success-tint text-success">
                <CheckIcon size={20} />
              </span>
              <h3 className="mt-4 text-h4 font-semibold">{g.title}</h3>
              <p className="mt-2 text-sm text-muted">{g.detail}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
