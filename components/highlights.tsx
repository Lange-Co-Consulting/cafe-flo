import { highlights } from "@/lib/content";
import { MicroLabel } from "@/components/micro-label";
import { Reveal } from "@/components/motion-reveal";
import { Columns3, Croissant, Wine } from "lucide-react";

const icons = [Columns3, Croissant, Wine] as const;

export function Highlights() {
  return (
    <section
      id="haus"
      className="bg-card border-y border-line"
      aria-label="Was uns ausmacht"
    >
      <div className="container mx-auto py-24 md:py-32">
        <Reveal className="mb-14 md:mb-20 max-w-3xl">
          <MicroLabel>Charakter</MicroLabel>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,4.4vw,3.5rem)] leading-[1.02] tracking-tight text-ink">
            Drei Dinge, für die man wiederkommt.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
          {highlights.map((h, i) => {
            const Icon = icons[i] ?? Columns3;
            return (
              <Reveal
                as="article"
                key={h.kicker}
                delay={i * 0.08}
                className="bg-card p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-center justify-between mb-10">
                  <MicroLabel className="text-accent">{h.kicker}</MicroLabel>
                  <Icon
                    className="h-5 w-5 text-accent/70"
                    strokeWidth={1.2}
                    aria-hidden
                  />
                </div>
                <h3 className="font-display text-[1.65rem] md:text-[1.85rem] leading-[1.05] tracking-tight text-ink">
                  {h.title}
                </h3>
                <p className="mt-4 text-ink/75 leading-relaxed text-[0.98rem]">
                  {h.body}
                </p>
                <span
                  aria-hidden
                  className="mt-10 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-sub"
                >
                  0{i + 1} · 03
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
