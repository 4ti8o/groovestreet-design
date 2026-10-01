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
  }, [open]);

  return (
    <>
      <header
        className={cn(
          // duck.design `.header` — transparent over the hero, then a solid
          // cream sheet with a soft warm shadow once you scroll. The template
          // uses `position: fixed`; sticky is kept here because every page
          // already reserves its own top spacing, and switching to fixed would
          // need that padding re-tuned on all fifteen routes.
          "sticky top-0 z-50 border-b border-transparent transition-[background-color,box-shadow,border-color] duration-300 ease-out",
          scrolled && "border-line bg-paper shadow-header",
        )}
      >
        <Container>
          <div className="flex h-[72px] items-center justify-between gap-6 lg:py-2">
            <Logo />
            {/* duck.design `.main__menu` — a flex row with a tight 0.8rem gap
                and plain 14px links. The template does not pill its nav items;
                the active page is marked by weight and colour, not a filled
                chip, so that treatment is dropped here too. */}
            <nav aria-label="Primary" className="hidden items-center gap-[0.8rem] lg:flex">
              {allNav.map((item) => {
                const href = item.href as string;
                const active =
                  href === "/"
                    ? pathname === "/"
                    : pathname === href || pathname.startsWith(`${href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "px-2 py-2.5 text-sm text-muted transition-colors duration-[var(--dur-fast)] hover:text-ink",
                      active && "font-bold text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="hidden lg:block">
              <Button href="/contact" variant="primary" size="sm">
                Book a Call
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
      </header>

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
                <Button href="/contact" variant="primary" fullWidth>
                  Book a Call
                </Button>
              </div>
            </Container>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
