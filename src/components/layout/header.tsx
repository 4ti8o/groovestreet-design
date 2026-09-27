"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { contactNav, primaryNav } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { Logo } from "@/components/layout/logo";

const allNav = [...primaryNav, ...contactNav];

/** Sticky header per design.md §7.4: 72px, blur after scroll, mobile drawer. */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change (covers back/forward nav; link taps close via onClick).
  // Render-phase adjustment: the sanctioned alternative to setState-in-effect.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Esc closes + body scroll lock + focus management (§11).
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerRef.current?.querySelector("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open ]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur transition-shadow duration-[var(--dur-fast)]",
        scrolled && "shadow-header",
      )}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Logo />
          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {allNav.map((item) => {
              const href = item.href as string;
              const active =
                href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-sm text-ink/80 underline-offset-4 transition-colors duration-[var(--dur-fast)] hover:text-ink hover:underline",
                    active && "font-semibold text-ink underline decoration-accent decoration-2",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:block">
            <Button href="/book" variant="primary" size="sm">
              Book a discovery call
            </Button>
          </div>
          <button
            ref={triggerRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="flex size-11 items-center justify-center rounded-md border border-line lg:hidden"
          >
            {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <m.div
            id="mobile-nav"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-paper lg:hidden"
          >
            <Container className="flex h-full flex-col py-8">
              <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1">
                {allNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md py-3 font-display text-h4 font-semibold tracking-[-0.01em]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-line pt-6 pb-[calc(76px+24px)]">
                <Button href="/book" variant="accent" fullWidth>
                  Book a discovery call
                </Button>
                <Button href="/contact" variant="ghost" fullWidth className="mt-3">
                  Or send us a message
                </Button>
              </div>
            </Container>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
