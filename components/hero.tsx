"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { business } from "@/lib/content";
import { ease } from "@/lib/motion";
import { MicroLabel } from "@/components/micro-label";
import { RatingStars } from "@/components/rating-stars";

export function Hero() {
  const reduce = useReducedMotion();
  const initial = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section
      id="top"
      className="grain relative overflow-hidden bg-surface pt-24 md:pt-32 pb-14 md:pb-24"
      aria-label="Café Flo — Wasserturm Mannheim"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          {/* Headline column */}
          <div className="col-span-12 lg:col-span-7 lg:pr-6">
            <motion.div
              initial={initial}
              animate={animate}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              className="flex items-center gap-3"
            >
              <span
                className="h-px w-10 bg-ink/40"
                aria-hidden
              />
              <MicroLabel className="tracking-[0.18em]">
                Friedrichsplatz · Mannheim
              </MicroLabel>
            </motion.div>

            <motion.h1
              initial={initial}
              animate={animate}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
              className="mt-6 font-display text-[clamp(2.5rem,9.2vw,6.5rem)] leading-[1] tracking-[-0.02em] text-ink"
            >
              Vom Croissant
              <br />
              in den <span className="italic text-accent">Crémant.</span>
            </motion.h1>

            <motion.p
              initial={initial}
              animate={animate}
              transition={{ duration: 0.65, ease, delay: 0.24 }}
              className="mt-6 md:mt-7 max-w-prose text-lead md:text-lead-lg text-ink/85"
            >
              Französisches Café unter den Arkaden am Friedrichsplatz.
              Croissant und Café au&nbsp;Lait am Morgen, Crémant und Wein,
              wenn die Lichter über dem Wasserturm angehen.
            </motion.p>

            <motion.div
              initial={initial}
              animate={animate}
              transition={{ duration: 0.55, ease, delay: 0.36 }}
              className="mt-8 md:mt-9 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7"
            >
              <a
                href="#karte"
                className="group inline-flex items-center gap-3 text-ink"
              >
                <span className="font-display italic text-[1.35rem] leading-none border-b border-ink/40 pb-1 group-hover:border-accent transition-colors">
                  zur Karte
                </span>
                <svg
                  width="22"
                  height="10"
                  viewBox="0 0 22 10"
                  fill="none"
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1 ease-ed duration-300 text-accent"
                >
                  <path
                    d="M0 5h20m0 0L16 1m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </a>
              <RatingStars
                score={business.rating.score}
                count={business.rating.count}
                source={business.rating.source}
              />
            </motion.div>
          </div>

          {/* Image collage */}
          <div className="col-span-12 lg:col-span-5 relative">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.2 }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-card bg-muted"
            >
              <Image
                src="/photos/wasserturm-jugendstil.jpeg"
                alt="Mannheimer Wasserturm mit Jugendstil-Leuchte im Vordergrund, Sommer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 ring-1 ring-inset ring-ink/10"
                aria-hidden
              />
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2.2 }}
              transition={{ duration: 0.9, ease, delay: 0.4 }}
              className="absolute -bottom-10 -left-10 hidden lg:block w-[58%] max-w-[260px] aspect-[3/4] overflow-hidden rounded-card bg-muted shadow-[0_20px_50px_-22px_rgba(28,24,20,0.4)]"
            >
              <Image
                src="/photos/flo-2012.jpg"
                alt="Café-Flo-Interieur: Hirschgeweihe, Globe-Lichter und ein gerahmtes Portrait"
                fill
                sizes="(max-width: 1024px) 0px, 260px"
                className="object-cover"
              />
            </motion.div>

          </div>
        </div>

        {/* Bottom meta strip */}
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.6, ease, delay: 0.55 }}
          className="mt-16 md:mt-24 pt-6 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-5 md:gap-x-6"
        >
          {[
            { k: "Eröffnet täglich", v: "09:00 — 00:00" },
            { k: "Sonntag", v: "ab 15:00" },
            { k: "Profil", v: "Café & Bar" },
            { k: "Preis", v: business.priceNote },
          ].map((m) => (
            <div key={m.k}>
              <MicroLabel className="block text-[0.6rem] md:text-[0.65rem]">{m.k}</MicroLabel>
              <p className="mt-1.5 font-display text-base md:text-lg leading-tight text-ink">
                {m.v}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
