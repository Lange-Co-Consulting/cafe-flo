import { reviews, business } from "@/lib/content";
import { MicroLabel } from "@/components/micro-label";
import { RatingStars } from "@/components/rating-stars";
import { Reveal } from "@/components/motion-reveal";

export function Reviews() {
  return (
    <section
      id="stimmen"
      className="bg-surface py-20 md:py-32"
      aria-label="Gäste über Café Flo"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-y-8 gap-x-6 items-end mb-12 md:mb-20">
          <Reveal className="col-span-12 md:col-span-7">
            <MicroLabel>Stimmen</MicroLabel>
            <h2 className="mt-5 font-display text-[clamp(2rem,6vw,3.75rem)] leading-[1.02] tracking-[-0.015em] text-ink">
              Was Gäste sagen.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-5 md:text-right">
            <RatingStars
              score={business.rating.score}
              count={business.rating.count}
              source={business.rating.source}
              size="md"
              className="md:justify-end"
            />
            <p className="mt-3 text-label uppercase text-sub md:text-right">
              Google · TripAdvisor · golocal
            </p>
          </Reveal>
        </div>

        <ol className="divide-y divide-line">
          {reviews.map((r, i) => (
            <Reveal
              as="li"
              key={i}
              delay={(i % 3) * 0.05}
              className="grid grid-cols-12 gap-x-6 gap-y-3 py-10 md:py-14"
            >
              <div className="col-span-12 md:col-span-2">
                <span className="font-mono text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.22em] text-sub">
                  № {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <blockquote className="col-span-12 md:col-span-9 md:col-start-3">
                <p className="font-display italic text-[clamp(1.4rem,4.6vw,2.1rem)] leading-[1.3] tracking-[-0.01em] text-ink">
                  „{r.quote}“
                </p>
                <footer className="mt-4 md:mt-5 flex items-center gap-3 md:gap-4 flex-wrap">
                  <span className="text-label uppercase text-ink/85">
                    {r.author}
                  </span>
                  <span className="h-px w-6 bg-line" aria-hidden />
                  <span className="text-label uppercase text-sub">
                    {r.source}
                  </span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1} className="mt-12 md:mt-16 pt-6 border-t border-line">
          <p className="text-sm text-sub max-w-prose leading-relaxed">
            Zitate sinngemäß aus öffentlichen Bewertungen auf Google,
            TripAdvisor und golocal. Nicht jeder Tag im Café läuft gleich
            — die Auswahl spiegelt das ehrlich wider.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
