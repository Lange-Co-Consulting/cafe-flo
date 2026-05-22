import { menu } from "@/lib/content";
import { MicroLabel } from "@/components/micro-label";
import { Reveal } from "@/components/motion-reveal";
import { SectionHead } from "@/components/section-head";
import { cn } from "@/lib/utils";

function MarkerPill({ marker }: { marker?: "Beliebt" | "Signature" | "Vegetarisch" }) {
  if (!marker) return null;
  const tone =
    marker === "Signature"
      ? "text-warm border-warm/55"
      : marker === "Vegetarisch"
        ? "text-accent border-accent/55"
        : "text-ink/70 border-line";
  return (
    <span
      className={cn(
        "ml-2 align-[0.1em] inline-flex items-center text-[0.58rem] uppercase tracking-[0.18em] px-1.5 py-[2px] border rounded-sm font-sans",
        tone,
      )}
    >
      {marker}
    </span>
  );
}

export function MenuSection() {
  return (
    <section
      id="karte"
      className="bg-surface py-20 md:py-32 border-t border-line"
      aria-label="Karte"
    >
      <div className="container mx-auto">
        <SectionHead
          kicker="Karte"
          title={<>Le Menu.</>}
          lead="Eine kleine Karte, die mit dem Tag wandert. Croissant und Café crème am Morgen, Quiche zum Mittag, Käsekuchen zur goldenen Stunde, Wein zur blauen."
          size="large"
          align="split"
          className="mb-14 md:mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16 md:gap-y-20">
          {menu.map((cat, idx) => (
            <Reveal
              as="article"
              key={cat.id}
              delay={(idx % 2) * 0.08}
              id={cat.id}
              className={cn(
                "flex flex-col scroll-mt-32",
                cat.id === "abend" && "md:col-span-2",
              )}
            >
              <header className="border-b border-line pb-5 mb-6 md:mb-8">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[0.68rem] tracking-[0.24em] text-sub">
                    {cat.number}
                  </span>
                  {cat.french && (
                    <MicroLabel className="text-accent">{cat.french}</MicroLabel>
                  )}
                </div>
                <h3 className="mt-3 font-display text-[clamp(1.9rem,6vw,2.65rem)] leading-[1] tracking-[-0.015em] text-ink">
                  {cat.title}
                </h3>
                {cat.intro && (
                  <p className="mt-3 italic font-display text-ink/65 text-base md:text-lg leading-snug">
                    {cat.intro}
                  </p>
                )}
              </header>

              <ul
                className={cn(
                  cat.id === "abend"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-x-12"
                    : "",
                )}
              >
                {cat.items.map((it, i) => (
                  <li
                    key={`${cat.id}-${i}`}
                    className="py-4 border-b border-line last:border-b-0"
                  >
                    <div className="flex items-baseline gap-x-3">
                      <h4 className="font-display text-[1.1rem] md:text-[1.22rem] leading-[1.2] text-ink min-w-0">
                        {it.name}
                        <MarkerPill marker={it.marker} />
                      </h4>
                      <span
                        className="hidden sm:block flex-1 mt-[0.55em] border-b border-dotted border-ink/20"
                        aria-hidden
                      />
                      <span className="ml-auto sm:ml-0 font-mono text-[0.88rem] md:text-[0.92rem] text-ink/85 whitespace-nowrap tabular-nums">
                        {it.price}&nbsp;€
                      </span>
                    </div>
                    {it.description && (
                      <p className="mt-1.5 text-[0.92rem] md:text-[0.95rem] text-sub leading-relaxed max-w-[58ch]">
                        {it.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} as="div" className="mt-20 md:mt-24 pt-6 border-t border-line">
          <p className="text-label uppercase text-sub">
            Preise inkl. MwSt. · Karte saisonal. Anpassungen vorbehalten.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
