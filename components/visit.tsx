import { business, hours, services } from "@/lib/content";
import { MicroLabel } from "@/components/micro-label";
import { Reveal } from "@/components/motion-reveal";
import { Phone, MapPin } from "lucide-react";

export function Visit() {
  return (
    <section
      id="besuchen"
      className="bg-surface py-24 md:py-32 border-t border-line"
      aria-label="Besuchen"
    >
      <div className="container mx-auto">
        <Reveal className="mb-14 md:mb-20 max-w-3xl">
          <MicroLabel>Besuchen</MicroLabel>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5.4vw,4.5rem)] leading-[0.98] tracking-tightest text-ink">
            Friedrichsplatz 15,
            <br />
            <span className="italic text-accent">68165 Mannheim.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-12 gap-y-12 md:gap-x-12 lg:gap-x-16">
          <Reveal className="col-span-12 md:col-span-5" id="kontakt">
            <div className="space-y-10">
              <div>
                <MicroLabel>Öffnungszeiten</MicroLabel>
                <dl className="mt-5 grid grid-cols-[auto,1fr] gap-y-2 gap-x-8 max-w-sm">
                  {hours.map((h) => (
                    <div key={h.short} className="contents">
                      <dt className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-sub pt-1">
                        {h.day}
                      </dt>
                      <dd className="font-display text-lg text-ink">
                        {h.open} – {h.close}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-sm text-sub italic max-w-prose">
                  Tagsüber Café, abends bis Mitternacht geöffnet.
                  Reservierung für größere Tische gerne telefonisch.
                </p>
              </div>

              <div>
                <MicroLabel>Kontakt</MicroLabel>
                <div className="mt-5 space-y-4">
                  <a
                    href={`tel:${business.phone.tel}`}
                    className="group flex items-center gap-4"
                  >
                    <Phone
                      className="h-4 w-4 text-accent"
                      strokeWidth={1.3}
                      aria-hidden
                    />
                    <span className="font-display text-2xl tracking-tight border-b border-line group-hover:border-accent pb-1 transition-colors">
                      {business.phone.display}
                    </span>
                  </a>
                  <a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(business.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4"
                  >
                    <MapPin
                      className="h-4 w-4 text-accent mt-1"
                      strokeWidth={1.3}
                      aria-hidden
                    />
                    <span className="font-display text-2xl tracking-tight leading-tight border-b border-line group-hover:border-accent pb-1 transition-colors">
                      {business.address.street}
                      <br />
                      {business.address.postal}&nbsp;{business.address.city}
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <MicroLabel>Vor Ort</MicroLabel>
                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                  {services.map((s) => (
                    <li
                      key={s}
                      className="text-[0.78rem] uppercase tracking-[0.14em] text-ink/80 border border-line rounded-full px-3 py-1"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="col-span-12 md:col-span-7">
            <div className="map-frame relative w-full aspect-[4/5] md:aspect-[5/6] rounded-card overflow-hidden border border-line bg-muted">
              <iframe
                title={`Karte: ${business.name}, ${business.address.full}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(business.address.full)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: "saturate(0.85) contrast(0.98)" }}
              />
            </div>
            <p className="mt-4 text-label uppercase text-sub">
              Gegenüber dem Wasserturm · unter den Arkaden
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
