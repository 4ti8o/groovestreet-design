"use server";

import { z } from "zod";
import { site } from "@/lib/site";
import { mailtoHref, waHref } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name.").max(120),
  contact: z.string().trim().min(5, "Add an email or phone number so we can reply.").max(160),
  service: z.string().trim().max(120).optional(),
  budget: z.string().trim().max(120).optional(),
  message: z.string().trim().min(20, "Give us a little detail — 20 characters or more.").max(4000),
  // Honeypot: bots fill it, humans never see it.
  company: z.string().max(0, "Spam detected.").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactResult =
  | { status: "sent" }
  | {
      status: "handoff";
      emailHref: string;
      whatsappHref: string;
      prefilled: string;
    }
  | { status: "error"; message: string };

/**
 * Handles the contact form. When CONTACT_FORM_ENDPOINT is configured, the
 * enquiry is POSTed there as JSON (works with Formspree, Getform, Basin,
 * Make/Zapier or a custom API). Otherwise it returns prefilled email +
 * WhatsApp links so the visitor still completes the enquiry in one tap.
 */
export async function submitContact(raw: unknown): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0]?.message ?? "Please check the form." };
  }
  const data = parsed.data;

  const prefilled = [
    `Name: ${data.name}`,
    `Reply to: ${data.contact}`,
    data.service ? `Service: ${data.service}` : null,
    data.budget ? `Budget: ${data.budget}` : null,
    "",
    data.message,
    "",
    `— sent from ${site.url}`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (endpoint && endpoint.trim()) {
    try {
      const response = await fetch(endpoint.trim(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          replyTo: data.contact,
          service: data.service ?? "",
          budget: data.budget ?? "",
          message: data.message,
          source: site.url,
        }),
      });
      if (!response.ok) throw new Error(`Delivery failed (${response.status}).`);
      return { status: "sent" };
    } catch (error) {
      return {
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong sending your message. Please try WhatsApp instead.",
      };
    }
  }

  return {
    status: "handoff",
    emailHref: mailtoHref(site.email, `Website enquiry from ${data.name}`, prefilled),
    whatsappHref: waHref(prefilled),
    prefilled,
  };
}
