import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";

/** Friendly 404 per design.md §12: never a dead end — always a next step. */
export default function NotFound() {
  return (
    <Container className="py-24 text-center md:py-36">
      <p className="eyebrow justify-center text-accent-text">
        <span aria-hidden="true" className="inline-block size-2 bg-accent" />
        Page not found
      </p>
      <h1 className="mx-auto mt-5 max-w-[20ch] text-display font-bold">
        This page wandered off the map.
      </h1>
      <p className="mx-auto mt-5 max-w-[48ch] text-lg text-muted">
        The link may be old, or the address mistyped. Here is where most visitors
        were heading:
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/services" variant="outline">
          Browse services
          <ArrowRightIcon size={18} />
        </Button>
      </div>
    </Container>
  );
}
