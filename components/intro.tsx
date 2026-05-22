import { Reveal } from "@/components/motion-reveal";
import { MicroLabel } from "@/components/micro-label";
import { intro } from "@/lib/content";

export function Intro() {
  return (
    <section
      id="intro"
      className="bg-surface py-20 md:py-32"
      aria-label="Über das Haus"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-y-8 gap-x-6">
          <Reveal className="col-span-12 md:col-span-3">
            <MicroLabel>{intro.kicker}</MicroLabel>
          </Reveal>

          <div className="col-span-12 md:col-span-9 lg:col-span-8">
            <Reveal as="div">
              <p className="font-display text-[clamp(1.45rem,4.4vw,2.25rem)] leading-[1.32] md:leading-[1.28] tracking-[-0.01em] text-ink">
                {intro.body}
              </p>
            </Reveal>
            <Reveal
              delay={0.08}
              as="div"
              className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-6"
            >
              {[
                { k: "Vormittag", v: "Quiche & Café au Lait" },
                { k: "Nachmittag", v: "Käsekuchen, Tee aus der Kanne" },
                { k: "Abend", v: "Crémant, Wein, Charcuterie" },
              ].map((b) => (
                <div key={b.k} className="border-t border-line pt-4">
                  <MicroLabel>{b.k}</MicroLabel>
                  <p className="mt-2.5 font-display italic text-[1.1rem] md:text-[1.2rem] leading-snug">
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
