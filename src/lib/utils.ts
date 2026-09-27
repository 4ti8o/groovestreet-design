import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { site } from "@/lib/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** `tel:` href from an E.164 string (leading `+` is optional in the data). */
export function telHref(e164: string = site.phoneE164) {
  return `tel:+${e164.replace(/[^0-9]/g, "")}`;
}

export function mailtoHref(email: string, subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${email}${query ? `?${query}` : ""}`;
}

/** WhatsApp click-to-chat deep link with a prefilled message. */
export function waHref(message: string, number: string = site.whatsappE164) {
  const digits = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const contactDefaults = {
  tel: telHref(),
  email: mailtoHref(site.email),
  whatsapp: waHref("Hi Groovestreet Design — I'd like to talk about a website."),
  emailSubject: "Website enquiry from groovestreet.design",
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
