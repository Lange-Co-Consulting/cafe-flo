"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { nav as navLinks, business } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border] duration-500 ease-ed",
        scrolled
          ? "bg-surface/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-4 md:py-5">
        <a
          href="#top"
          className="font-display text-2xl md:text-[1.65rem] leading-none tracking-tightest text-ink"
          aria-label="Café Flo — zur Startseite"
        >
          {business.wordmark}
          <span className="ml-1 align-baseline text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Sektionen">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-[0.93rem] text-ink/85 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${business.phone.tel}`}
            className="hidden md:inline-flex items-center gap-2 text-label uppercase text-ink/80 hover:text-accent transition-colors"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {business.phone.display}
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-line text-ink hover:bg-card transition-colors"
            aria-label="Menü öffnen"
            aria-expanded={open}
          >
            <Menu className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-surface"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="container mx-auto flex items-center justify-between py-4">
            <span className="font-display text-2xl tracking-tightest">
              {business.wordmark}
              <span className="ml-1 text-accent">.</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-line text-ink"
              aria-label="Menü schließen"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <nav
            className="container mx-auto mt-10 flex flex-col gap-6"
            aria-label="Sektionen"
          >
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl tracking-tighter leading-[0.95] text-ink"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${business.phone.tel}`}
              className="mt-6 inline-flex items-center gap-3 text-ink"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden />
              <span className="font-display text-2xl tracking-tight">
                {business.phone.display}
              </span>
            </a>
            <p className="mt-8 text-label uppercase text-sub">
              Friedrichsplatz 15 · Mannheim
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
