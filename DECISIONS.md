# Design- und Entscheidungslog

Café Flo · Friedrichsplatz 15 · 68165 Mannheim · One-Page-Marketing-Site

---

## 1. Stilreferenz: 19sieben.pages.dev

Vor Designstart per WebFetch analysiert. Übernommene Prinzipien:

1. **Editorial-Disziplin** — Serif-Display gegen humanistische Sans, große
   Größensprünge zwischen Headline und Fließtext, keine dekorativen
   Trennlinien außer feinen Editorial-Rules.
2. **Mikrolabels** mit hoher Tracking (≥ +0.14em), uppercase, kleine
   Schriftgröße — gesetzt als ruhige Bühne über jedem Sektionskopf.
3. **Numerische Kategorien** (01, 02, 03 …) als Rhythmus-Anker statt
   dekorativer Trenner.
4. **Asymmetrische Layouts** — Headlines linksbündig in 7/12-Spalten,
   Bilder mit Overflow-Versatz, ein kleines Akzentbild „angeschoben".
5. **Großzügiger Whitespace** — Sektionsabstand ≥ 96 px auf Desktop,
   Spalten-Gaps bewusst weit.
6. **Bild-zuerst** — Fotografie trägt Atmosphäre, nicht Farbe.
7. **Beschriftungs-Sprache** — Mikrokopf + lange Headline + 1–2 ruhige
   Sätze unter jedem Block.

Was bewusst **nicht** übernommen wurde: die exakte Farbpalette von
19sieben (helles Weiß-Off-White-Setup) — Café Flo bekommt eine eigene,
park- und sandstein-bezogene Identität, weil das Café ein anderes Setting
(Wasserturm-Park, Jugendstil-Arkaden) und einen anderen Tag-Nacht-Bogen hat.

---

## 2. Farbsystem

Eine warme, leicht gedämpfte Palette, die Wasserturm-Park-Setting
(Jugendstil-Sandstein, Park-Grün) und den Tag-Nacht-Bogen aufnimmt.

| Token              | Hex                       | Verwendung                                |
| ------------------ | ------------------------- | ----------------------------------------- |
| `--color-surface`  | `#f1eadc`                 | Hintergrund Sandstein-Cream               |
| `--color-card`     | `#faf5eb`                 | Karten, Highlight-Sektion                 |
| `--color-muted`    | `#e5d9c3`                 | Bildhintergrund / Section-Wechsel         |
| `--color-ink`      | `#1c1814`                 | Haupttext (warmes Anthrazit, kein #000)   |
| `--color-sub`      | `#5a4f43`                 | Sekundärtext, Mikrolabels                 |
| `--color-accent`   | `#455a3f`                 | Park-Grün — die Hauptakzentfarbe           |
| `--color-accent-soft` | `#6c8364`              | Hover-Ton, sanftere Akzentfälle           |
| `--color-warm`     | `#b8703a`                 | Sekundärakzent: Sterne, Abend-Akzent      |
| `--color-line`     | `rgba(28,24,20,.14)`      | Editorial-Rules                            |

**Begründung Akzent Park-Grün:** Die Brief-Optionen waren A) Park-Grün
B) Burgunder C) Terrakotta. Park-Grün gewinnt, weil:

- Direkter Bezug zum Friedrichsplatz-Park / Wasserturm-Setting
  (das Café sitzt im Park-Ensemble)
- Burgunder wäre der erwartbare Wein-Bar-Move; das wäre die generische
  Wahl, die jedes französische Café trifft
- Park-Grün ist ruhig, traut sich aber, anders zu sein —
  weniger Aufmerksamkeit, mehr Atmosphäre
- Lässt Raum für den **warmen Sekundärakzent** (Kupfer-Terrakotta
  `#b8703a`) für Sterne und Abend-Mood — kommuniziert den Tag-Nacht-Bogen

Keine Standard-Tailwind-Farbnamen im Code — alles über CSS-Tokens.

---

## 3. Typografie

- **Display: Fraunces** (Variable Serif, opsz-Achse)
  - Gewählt, weil charaktervoll, leicht spielerisch, mit weicher
    Eleganz — passt zum „kleines Stück Frankreich"-Tonfall
  - Italic nutzt eine kursive Form mit eigener Persönlichkeit
  - Banned-Liste (Playfair, Lora) explizit vermieden
- **Sans: Manrope**
  - Humanistisch, warm, mit deutlich mehr Persönlichkeit als Inter
  - Banned-Liste (Inter, Poppins, Montserrat) bewusst vermieden
  - Geist als Alternative wurde verworfen, weil zu „Tech-Mood"
- **Mono: JetBrains Mono** — nur als Mikro-Akzent für Preise,
  Sektionsnummern (01–05), seitliche Watermarks

Skala (variabel via `clamp()`):

```
hero h1          clamp(3rem,    8.4vw, 6.5rem)
section h2       clamp(2.5rem,  5vw,   4.25rem)
sub-h2           clamp(2.1rem,  4.4vw, 3.5rem)
quote            clamp(1.4rem,  2.4vw, 2rem)
intro            clamp(1.55rem, 2.6vw, 2.1rem)
body lead        1.125–1.3125rem
body             1rem
micro            0.6875rem, tracking 0.16em, uppercase
```

Tracking: Display tightest (-0.04em bis -0.02em), Mikrolabels +0.14–0.18em.
Leading: Display 0.95–1.05, Body 1.55–1.6.

---

## 4. Layout-Entscheidungen

- **Hero ist asymmetrisch**, nicht zentriert. Headline links (7/12),
  Bildkomposition rechts (5/12). Sekundärbild „angeschoben" links
  unten — nur ab `lg` sichtbar, weil es sonst mit der Texttypografie
  kollidiert.
- **Kein grüner Öffnungs-Dot, keine „heute geöffnet"-Pille im Hero.**
  Stattdessen: Mikrolabel „Friedrichsplatz · Mannheim", Sterne-Trust
  (4,0 · 1.072 Google) und ein bottom Meta-Strip mit den vier
  wichtigsten Daten (Öffnung / Sonntag / Profil / Preis).
- **Menüsektion zweispaltig**, fünfte Kategorie (Abend) volle Breite,
  weil Abend-Karte ein anderes Profil hat (Wein, Crémant, Käseteller).
- **Reviews** als zickzack-versetzte Pullquotes mit Nummerierung
  № 01–06 — editorial, kein „Card-Grid".
- **Visit-Sektion** zweispaltig: links Adresse/Öffnungszeiten/Kontakt
  im Editorial-Block, rechts Map-Embed in Editorial-Frame
  (Border + warmer Schatten).
- **Footer** mit Giant-Wordmark („Café Flo" im 12-vw-Grad) im
  dunklen Ink — der einzige dunkle Block der Seite, das beendet die
  Lese-Reise mit einem warmen Off-Beat.

---

## 5. Motion

- Hero: gestaffeltes Fade-Up (Stagger 80–120 ms je Element, Dauer 600–900 ms).
- Section-Reveal beim Scroll: `whileInView`, `once: true`, threshold 0.2,
  `opacity 0→1, y 18→0`, 600–700 ms, ease `cubic-bezier(.22,1,.36,1)`.
- Hover: Nav-Underline scaleX 0→1 in 320 ms; Border-Color-Shift bei
  CTAs.
- `prefers-reduced-motion: reduce` schaltet via Framer-Motion-Hook
  alle Animationen aus, zusätzlich Global-CSS-Override.
- **Bewusst weggelassen**: Parallax, Bouncing-Springs, animierte
  Gradients, Sticky-Scroll-Hijack.

---

## 6. SEO & Schema

- `metadataBase`, OpenGraph (de_DE), Twitter Card (summary_large_image)
- `sitemap.ts` und `robots.ts`
- **JSON-LD** `CafeOrCoffeeShop`-Schema mit:
  - `PostalAddress` Friedrichsplatz 15
  - `telephone` +496214182083
  - `geo` 49.4836, 8.4751 (Friedrichsplatz)
  - `openingHoursSpecification` für jeden Wochentag aus `content.ts`
  - `aggregateRating` 4.0 / 1.072 Bewertungen
  - `priceRange` €€
- Edge-Runtime `app/icon.tsx` für ein dynamisch generiertes Favicon
  (warmer Sandstein-Hintergrund, Park-Grünes "F" in Serif)

---

## 7. Web-Recherche — Quellen

Verifiziert über mindestens 5–7 Quellen, kreuzgecheckt:

- speisekarte.de — Adresse, Telefon, Profil, Quiche & Käsekuchen als Signature
- restaurantguru.com — Reviews, Rating, Wasserturm-Bezug, Quiche Lorraine
- tripadvisor.com (Such-Listing) — French-Bistro-Charakter, Lage unter Arkaden
- coolibri.de — Atmosphäre-Beschreibung, Wein-Hinweis, Spinat-Quiche
- visit-mannheim.de — offizielle Stadt-Listung
- nochoffen.de — exakte Öffnungszeiten Mo–So
- restaurant-ranking.com — Service-Rating, Preisrange €11–20/Person
- golocal.de — deutschsprachige Original-Reviews (zitiert)
- wanderlog.com — englischsprachige Original-Reviews (zitiert)
- yelp.de — Cross-Check Reviews

### Verifiziert übernommen

- Adresse, Telefon, Preisrange €10–20
- Google-Rating 4,0 / 1.072 Bewertungen
- Öffnungszeiten Mo 09:30 / Di–Sa 09:00 / So 15:00, jeweils bis 00:00–01:00
  (Wir setzen einheitlich 00:00 als Schließzeit, weil das das vom Nutzer
  bestätigte „schließt heute um 00:00"-Signal trifft und sauberer kommuniziert)
- Signature-Items: Quiche Lorraine, Spinat-Quiche, Käsekuchen, Croissants,
  Lorina-Limonade, Crémant/Wein-Karte
- Original-Review-Zitate aus golocal (Ursula S., Ela Stoll, Marcus T.,
  lausemia40), TripAdvisor (Mai, tzgonline), Google (Pittayarat S.,
  Deepak K., Attila Ö.)
- Französische Bistro-Tonalität, Wasserturm-Vis-à-vis, Lage unter Arkaden
- Vegetarische Optionen, Hunde willkommen, barrierefrei, Kartenzahlung,
  Terrasse

### Plausibel ergänzt (mangels öffentlich vollständiger Karte)

- **Konkrete Menüpreise außerhalb der Käsekuchen-/Schokokuchen-Anker
  (4,50 €):** Auf Basis vergleichbarer Mannheimer Innenstadt-Cafés und
  des verifizierten Preisrahmens 10–20 €/Person 2026 plausibilisiert.
  Reale Karte sollte beim Einsatz abgeglichen werden — alle Preise liegen
  zentralisiert in `lib/content.ts`.
- **Frühstücks-Item-Namen** (Petit Déjeuner Parisien, Tartine avocat,
  Omelette aux fines herbes): typisch für ein französisches Bistro-Café
  dieser Kategorie. Sollten bei Bedarf gegen die echten Item-Namen
  ausgetauscht werden.
- **Instagram-Handle `@cafeflo.mannheim`:** wahrscheinlicher Handle,
  konnte nicht öffentlich verifiziert werden — vor Go-Live abgleichen.
- **Geo-Koordinaten 49.4836 / 8.4751:** Friedrichsplatz Mannheim,
  Open-Data, plausibel auf wenige Meter.

### Bewusst nicht erfunden

- Kein „Est. 1894", kein Gründerjahr, keine erfundenen Personen
  („Madame Flo" etc.). Wo eine Geschichte hingehört hätte, steht statt
  dessen eine Charakterzeile, die sich aus dem Setting trägt.

---

## 8. Bilder

Hero-Bilder kommen für die Demo aus Unsplash (CC0). URLs:

- `photo-1521017432531-fbd92d768814` — Bistro-Tisch / Café-Atmosphäre
- `photo-1591985666643-1ecc67616216` — Quiche & Salat

Für die echte Produktion sollten lokale Fotos von Café Flo verwendet
werden — Vorgehensweise im README dokumentiert (`public/hero/*.jpg`,
Remote-Patterns dann entfernbar). Alt-Texte sind editorial gesetzt
und kommunizieren auch ohne Bild den Markenanker (Wasserturm/Quiche/Arkaden).

---

## 9. Accessibility

- WCAG-AA durchgehend (Ink #1c1814 auf Surface #f1eadc = 13.4:1 — AAA).
- Akzent #455a3f auf Surface = 6.2:1 — AA.
- Warm #b8703a auf Surface = 3.5:1 — verwendet nur für nicht-essenzielle
  Mikro-Highlights (Stars), nie als Body-Text.
- Sichtbare Focus-Rings via `outline: 2px solid var(--color-accent)`.
- Semantisches HTML (`header`, `nav`, `main`, `section`, `article`,
  `footer`, `blockquote`, `address`, `dl`/`dt`/`dd`).
- ARIA-Labels für Map-Iframe, Mobile-Menu-Button, Sektionen.
- Tastatur-Navigation komplett; Escape schließt Mobile-Sheet.
- `prefers-reduced-motion: reduce` global respektiert.

---

## 10. Was bewusst weggelassen wurde

- Newsletter-Anmeldung — nicht im Brief, würde das Editorial-Tempo brechen.
- Reservierungs-CTA als Formular — Telefonreservierung ist die etablierte
  Praxis; das `tel:` setzt darauf.
- Cookie-Banner / Datenschutz-Modal — als Stub-Footer-Link, da die
  konkrete Tracking-Konfiguration projekt-/hoster-spezifisch ist.
- Sprache-Switcher — One-Page DE als Klartext, französische Akzente
  textlich als „Petit Déjeuner / Les Cafés / Le Soir" über die Karte gestreut.
- Dark Mode — der Sandstein-Look ist warmes Tageslicht; ein Dark-Mode
  hätte den Café-Charakter gebrochen.

---

## 11. Vor dem Go-Live abgleichen

1. Echte Speisekarte und finale Preise gegen `lib/content.ts` legen
2. Instagram-Handle verifizieren (`lib/content.ts` → `business.instagram`)
3. Eigene Café-Fotos für Hero und ggf. Reviews-Section
4. `metadataBase`-URL in `app/layout.tsx` auf die finale Domain setzen
5. Sitemap- und JSON-LD-URL auf die finale Domain
6. Impressum und Datenschutz-Seite ergänzen (Footer-Links sind als
   Anker-Stubs vorbereitet)

---

© Café Flo · Friedrichsplatz 15 · 68165 Mannheim
