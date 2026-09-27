"use client";

import { useState } from "react";
import { submitContact } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/ui/icons";

const services = [
  "Website Design",
  "Landing Page",
  "Graphic Design",
  "SEO & Performance",
  "Care plan",
  "Something else",
];

const budgets = ["Under UGX 200,000", "UGX 500,000", "UGX 1,300,000", "UGX 3,000,000+", "Graphics", "Care plan / monthly"];

const inputCls =
  "min-h-[48px] w-full rounded-md border border-line bg-paper px-4 text-base text-ink placeholder:text-muted/70 focus:border-ink focus:outline-none";

type State =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "handoff"; emailHref: string; whatsappHref: string }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setState({ kind: "sending" });
    const result = await submitContact({
      name: data.get("name"),
      contact: data.get("contact"),
      service: data.get("service"),
      budget: data.get("budget"),
      message: data.get("message"),
      company: data.get("company"),
    });
    if (result.status === "sent") {
      setState({ kind: "sent" });
      form.reset();
    } else if (result.status === "handoff") {
      setState({ kind: "handoff", emailHref: result.emailHref, whatsappHref: result.whatsappHref });
    } else {
      setState({ kind: "error", message: result.message });
    }
  }

  if (state.kind === "sent") {
    return (
      <div role="status" className="card flex flex-col items-start gap-3">
        <span className="flex size-11 items-center justify-center rounded-full bg-success-tint text-success">
          <CheckIcon size={20} />
        </span>
        <h2 className="text-h3 font-semibold">Message sent</h2>
        <p className="text-muted">
          Thanks — we reply within one business day. Need us sooner? Call{" "}
          <a href="tel:+256774778164" className="font-medium text-brand underline underline-offset-4">
            +256 774 778 164
          </a>
          .
        </p>
      </div>
    );
  }

  if (state.kind === "handoff") {
    return (
      <div role="status" className="card flex flex-col items-start gap-3">
        <span className="flex size-11 items-center justify-center rounded-full bg-success-tint text-success">
          <CheckIcon size={20} />
        </span>
        <h2 className="text-h3 font-semibold">Almost there — pick a channel</h2>
        <p className="text-muted">
          Tap one button and your message opens prefilled. Just press send.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button href={state.whatsappHref}>Send via WhatsApp</Button>
          <Button href={state.emailHref} variant="outline">
            Send via email
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium">
            Your name
          </label>
          <input id="cf-name" name="name" required autoComplete="name" placeholder="Jane Doe" className={inputCls} />
        </div>
        <div>
          <label htmlFor="cf-contact" className="mb-1.5 block text-sm font-medium">
            Email or phone
          </label>
          <input id="cf-contact" name="contact" required placeholder="jane@company.com" className={inputCls} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-service" className="mb-1.5 block text-sm font-medium">
            Service <span className="font-normal text-muted">(optional)</span>
          </label>
          <select id="cf-service" name="service" defaultValue="" className={inputCls}>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-budget" className="mb-1.5 block text-sm font-medium">
            Budget <span className="font-normal text-muted">(optional)</span>
          </label>
          <select id="cf-budget" name="budget" defaultValue="" className={inputCls}>
            <option value="">Prefer to discuss</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium">
          Your project
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          minLength={20}
          rows={5}
          placeholder="What do you sell, who is it for, what should the site do?"
          className="w-full rounded-md border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-ink focus:outline-none"
        />
      </div>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div aria-live="polite">
        {state.kind === "error" ? (
          <p role="alert" className="rounded-md bg-danger-tint px-4 py-3 text-sm text-danger">
            {state.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" disabled={state.kind === "sending"} className="sm:justify-self-start">
        {state.kind === "sending" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
