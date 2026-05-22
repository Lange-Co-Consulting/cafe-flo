import { Reveal } from "@/components/motion-reveal";
import { MicroLabel } from "@/components/micro-label";
import { intro } from "@/lib/content";

export function Intro() {
  return (
    <section
      id="intro"
      className="bg-surface py-24 md:py-32"
      aria-label="Über das Haus"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-4 lg:col-span-3">
            <MicroLabel>{intro.kicker}</MicroLabel>
            <div className="rule mt-5 max-w-[80px]" />
          </Reveal>

          <div className="col-span-12 md:col-span-8 lg:col-span-8 lg:col-start-5">
            <Reveal as="div">
              <p className="font-display text-[clamp(1.55rem,2.6vw,2.1rem)] leading-[1.25] tracking-tight text-ink">
                {intro.body}
              </p>
            </Reveal>
            <Reveal delay={0.1} as="div" className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                { k: "Vormittag", v: "Quiche & Café au Lait" },
                { k: "Nachmittag", v: "Käsekuchen, Tee aus der Kanne" },
                { k: "Abend", v: "Crémant, Wein, Charcuterie" },
              ].map((b) => (
                <div key={b.k} className="border-t border-line pt-4">
                  <MicroLabel>{b.k}</MicroLabel>
                  <p className="mt-2 font-display italic text-lg leading-snug">
                    {b.v}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
