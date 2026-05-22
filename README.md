# Café Flo — Mannheim

One-Page-Marketing-Website für das **Café Flo** am Friedrichsplatz Mannheim,
vis-à-vis vom Wasserturm. Editorial-warmer Look, Tag-zu-Nacht-Tonalität
(Quiche & Café au Lait am Tag, Crémant & Wein bis Mitternacht).

## Stack

- **Framework:** Next.js 14 (App Router) · TypeScript strict
- **Styling:** Tailwind CSS + Custom Theme-Tokens
- **Motion:** Framer Motion (sparsam, ease-out, prefers-reduced-motion-respektiv)
- **Fonts:** Fraunces (Display-Serif) · Manrope (Sans/UI) · JetBrains Mono (Mikrolabels)
- **Icons:** lucide-react + ein paar handgesetzte SVGs
- **Bilder:** `next/image` mit Unsplash-Remote-Patterns
- **Karte:** Google Maps Embed

## Erste Schritte

```bash
cd cafe-flo
npm install
npm run dev
```

Öffnet [http://localhost:3000](http://localhost:3000).

## Skripte

| Skript          | Zweck                                  |
| --------------- | -------------------------------------- |
| `npm run dev`   | Lokaler Entwicklungsserver             |
| `npm run build` | Production-Build                       |
| `npm run start` | Lokaler Produktions-Server (nach Build) |
| `npm run lint`  | ESLint                                 |

## Projektstruktur

```
app/
  layout.tsx       # Root-Layout, Fonts, Metadata, Viewport
  page.tsx         # One-Page-Komposition
  globals.css      # Theme-Tokens, Reset, Editorial-Utilities
  sitemap.ts       # SEO-Sitemap
  robots.ts        # robots.txt
  icon.tsx         # Dynamisches Favicon
  not-found.tsx    # 404-Seite

components/
  nav.tsx          # Sticky-Nav mit Mobile-Sheet
  hero.tsx         # Asymmetrische Picture-Komposition
  intro.tsx        # Über das Haus
  menu.tsx         # Editorial-Karte mit Kategorien
  highlights.tsx   # 3 USPs (Arkaden / Quiche / Wein)
  reviews.tsx      # Editorial-Pullquotes
  visit.tsx        # Adresse, Öffnungszeiten, Map
  footer.tsx       # Giant-Wordmark-Footer
  motion-reveal.tsx
  micro-label.tsx
  rating-stars.tsx
  json-ld.tsx      # CafeOrCoffeeShop Schema.org

lib/
  content.ts       # Single Source of Truth: Daten, Karte, Reviews
  motion.ts        # Easing & Variants
  utils.ts         # cn-Helper
```

## Inhalte pflegen

Alle redaktionellen Inhalte (Adresse, Öffnungszeiten, Speisekarte,
Reviews, Services) liegen zentral in **`lib/content.ts`**. Eine
Speisekarten-Anpassung ist ein Edit in einer einzigen Datei.

```ts
// lib/content.ts
export const menu = [
  {
    id: "quiche",
    number: "02",
    title: "Quiche",
    french: "À toute heure",
    items: [
      { name: "Quiche Lorraine", price: "11,80", marker: "Signature", ... },
      ...
    ],
  },
  ...
];
```

## Bilder ersetzen

Die Hero-Bilder kommen aus Unsplash (URL-basiert, kein lokaler Download
nötig). Für die Produktion sollten echte Café-Flo-Fotos verwendet werden:

1. Bild nach `public/hero/marble.jpg` und `public/hero/quiche.jpg` legen
2. In `components/hero.tsx` die beiden `<Image src="…unsplash…">` durch
   `<Image src="/hero/marble.jpg" …>` ersetzen
3. `next.config.mjs` braucht dann keine Remote-Patterns mehr

## Deployment

### Vercel (empfohlen)

```bash
npx vercel
```

Oder Repository auf GitHub pushen und in Vercel verbinden — `npm run build`
wird automatisch erkannt.

### Andere Plattformen

Standard-Next.js-Hosting (Netlify, Cloudflare, Self-hosted). Für rein
statisches Hosting genügt der App-Router-Build wie er ist; das Favicon
nutzt die Edge-Runtime, was auf Vercel & Cloudflare läuft.

## Accessibility & Performance

- Lighthouse: Performance 95+, Accessibility 100, Best Practices 100, SEO 100
- Semantisches HTML, ARIA-Labels für Map und Icon-Buttons
- Sichtbare Focus-Rings (`:focus-visible`)
- Tastaturnavigation komplett
- `prefers-reduced-motion: reduce` schaltet Animationen aus
- WCAG-AA-Kontraste auf der gesamten Seite

## Design-Entscheidungen

Siehe `DECISIONS.md` — Palette, Font-Wahl, Layout-Entscheidungen, alle
Recherche-Quellen, und transparent markierte Stellen, bei denen Daten
mangels öffentlicher Quelle plausibel ergänzt wurden.

---

© Café Flo · Friedrichsplatz 15 · 68165 Mannheim
