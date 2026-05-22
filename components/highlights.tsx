import { highlights } from "@/lib/content";
import { MicroLabel } from "@/components/micro-label";
import { Reveal } from "@/components/motion-reveal";
import { SectionHead } from "@/components/section-head";
import { Columns3, Croissant, Wine } from "lucide-react";

const icons = [Columns3, Croissant, Wine] as const;

export function Highlights() {
  return (
    <section
      id="haus"
      className="bg-card border-y border-line"
      aria-label="Was uns ausmacht"
    >
      <div className="container mx-auto py-20 md:py-32">
        <SectionHead
          kicker="Charakter"
          title={<>Drei Dinge, für die man wiederkommt.</>}
          className="mb-12 md:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
          {highlights.map((h, i) => {
            const Icon = icons[i] ?? Columns3;
            return (
              <Reveal
                as="article"
                key={h.kicker}
                delay={i * 0.08}
                className="bg-card p-6 md:p-10 flex flex-col"
              >
                <div className="flex items-center justify-between mb-10 md:mb-12">
                  <MicroLabel className="text-accent">{h.kicker}</MicroLabel>
                  <Icon
                    className="h-5 w-5 text-accent/70"
                    strokeWidth={1.2}
                    aria-hidden
                  />
                </div>
                <h3 className="font-display text-[1.55rem] md:text-[1.95rem] leading-[1.05] tracking-[-0.01em] text-ink">
                  {h.title}
                </h3>
                <p className="mt-3 md:mt-4 text-ink/75 leading-relaxed text-[0.95rem] md:text-[0.98rem]">
                  {h.body}
                </p>
                <span
                  aria-hidden
                  className="mt-10 md:mt-12 font-mono text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-sub"
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
