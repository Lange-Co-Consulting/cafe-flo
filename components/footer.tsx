import { business } from "@/lib/content";
import { MicroLabel } from "@/components/micro-label";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative bg-ink text-card pt-20 md:pt-24 pb-10 overflow-hidden"
      aria-label="Footer"
    >
      <div className="container mx-auto relative">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-12">
          <div className="col-span-12 md:col-span-7">
            <p
              aria-hidden
              className="font-display leading-[0.85] tracking-tightest text-[clamp(3.75rem,18vw,12rem)] text-card"
            >
              Café <span className="italic text-warm">Flo</span>
            </p>
            <p className="mt-5 md:mt-6 max-w-md text-card/75 text-[0.95rem] md:text-[0.98rem]">
              Französisches Café am Friedrichsplatz, vis-à-vis vom
              Mannheimer Wasserturm. Bis Mitternacht geöffnet.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2 md:col-start-9">
            <MicroLabel className="text-card/55">Adresse</MicroLabel>
            <address className="not-italic mt-4 text-card/90 leading-relaxed">
              {business.address.street}
              <br />
              {business.address.postal}&nbsp;{business.address.city}
            </address>
          </div>

          <div className="col-span-6 md:col-span-2">
            <MicroLabel className="text-card/55">Kontakt</MicroLabel>
            <ul className="mt-4 space-y-2 text-card/90">
              <li>
                <a href={`tel:${business.phone.tel}`} className="hover:text-warm transition-colors">
                  {business.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={business.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-warm transition-colors"
                >
                  <InstagramGlyph className="h-3.5 w-3.5" />
                  {business.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule mt-16 md:mt-20 mb-6 bg-card/15" />
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <p className="text-label uppercase text-card/50">
            © {year} {business.name} · Mannheim
          </p>
          <ul className="flex items-center gap-4 md:gap-6 text-label uppercase text-card/50 flex-wrap">
            <li>
              <a href="#impressum" className="hover:text-warm transition-colors">
                Impressum
              </a>
            </li>
            <li>
              <a href="#datenschutz" className="hover:text-warm transition-colors">
                Datenschutz
              </a>
            </li>
            <li>
              <a href="#top" className="hover:text-warm transition-colors">
                Nach oben ↑
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
