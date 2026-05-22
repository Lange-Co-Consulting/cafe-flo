import { menu } from "@/lib/content";
import { MicroLabel } from "@/components/micro-label";
import { Reveal } from "@/components/motion-reveal";
import { cn } from "@/lib/utils";

function MarkerPill({ marker }: { marker?: "Beliebt" | "Signature" | "Vegetarisch" }) {
  if (!marker) return null;
  const tone =
    marker === "Signature"
      ? "text-warm border-warm/60"
      : marker === "Vegetarisch"
        ? "text-accent border-accent/60"
        : "text-ink/70 border-line";
  return (
    <span
      className={cn(
        "ml-2 align-middle inline-flex items-center text-[0.6rem] uppercase tracking-[0.18em] px-1.5 py-[2px] border rounded-sm",
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
        <div className="grid grid-cols-12 gap-y-6 gap-x-6 mb-14 md:mb-24">
          <Reveal className="col-span-12 md:col-span-4">
            <MicroLabel>Karte</MicroLabel>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.98] tracking-tightest text-ink">
              Le Menu.
            </h2>
          </Reveal>
          <Reveal
            delay={0.08}
            className="col-span-12 md:col-span-7 lg:col-span-6 md:col-start-6 self-end"
          >
            <p className="text-lead text-ink/80 max-w-prose">
              Eine kleine Karte, die mit dem Tag wandert. Croissant und
              Café crème am Morgen, Quiche zum Mittag, Käsekuchen zur
              goldenen Stunde, Wein zur blauen.
            </p>
          </Reveal>
        </div>

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
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-[0.7rem] tracking-[0.18em] text-sub">
                  {cat.number}
                </span>
                {cat.french && (
                  <MicroLabel className="text-accent">{cat.french}</MicroLabel>
                )}
              </div>
              <h3 className="font-display text-[clamp(1.75rem,5.5vw,2.5rem)] leading-[1] tracking-tight text-ink">
                {cat.title}
              </h3>
              {cat.intro && (
                <p className="mt-3 italic font-display text-ink/70 text-base md:text-lg">
                  {cat.intro}
                </p>
              )}

              <ul
                className={cn(
                  "mt-6 md:mt-8",
                  cat.id === "abend"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0"
                    : "",
                )}
              >
                {cat.items.map((it, i) => (
                  <li
                    key={`${cat.id}-${i}`}
                    className="py-4 border-t border-line"
                  >
                    <div className="flex items-baseline gap-x-3">
                      <h4 className="font-display text-[1.05rem] md:text-[1.18rem] leading-tight text-ink min-w-0">
                        {it.name}
                        <MarkerPill marker={it.marker} />
                      </h4>
                      <span
                        className="hidden sm:block flex-1 mt-2 h-px bg-line opacity-70"
                        aria-hidden
                      />
                      <span className="ml-auto sm:ml-0 font-mono text-[0.88rem] md:text-[0.92rem] text-ink/90 whitespace-nowrap tabular-nums">
                        {it.price}&nbsp;€
                      </span>
                    </div>
                    {it.description && (
                      <p className="mt-1.5 text-[0.9rem] md:text-[0.93rem] text-sub leading-snug max-w-[58ch]">
                        {it.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} as="div" className="mt-24 pt-6 border-t border-line">
          <p className="text-label uppercase text-sub">
            Preise inkl. MwSt. · Karte saisonal. Anpassungen vorbehalten.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
