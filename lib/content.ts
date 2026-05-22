export const business = {
  name: "Café Flo",
  wordmark: "Flo",
  tagline: "Am Wasserturm. Seit Jahren.",
  subtagline:
    "Französisches Café unter den Arkaden am Friedrichsplatz. Quiche und Croissants am Morgen, Wein und Crémant, wenn die Lichter angehen.",
  address: {
    street: "Friedrichsplatz 15",
    postal: "68165",
    city: "Mannheim",
    country: "DE",
    full: "Friedrichsplatz 15, 68165 Mannheim",
  },
  phone: {
    display: "0621 4182083",
    tel: "+4962141820 83".replace(/\s/g, ""),
  },
  email: null,
  instagram: {
    handle: "@cafeflo.mannheim",
    url: "https://www.instagram.com/cafeflo.mannheim/",
  },
  geo: { lat: 49.4836, lng: 8.4751 },
  priceRange: "€€",
  priceNote: "10–20 € pro Person",
  rating: {
    score: 4.0,
    count: 1072,
    source: "Google",
  },
} as const;

export const hours: { day: string; short: string; open: string; close: string; note?: string }[] = [
  { day: "Montag", short: "Mo", open: "09:30", close: "00:00" },
  { day: "Dienstag", short: "Di", open: "09:00", close: "00:00" },
  { day: "Mittwoch", short: "Mi", open: "09:00", close: "00:00" },
  { day: "Donnerstag", short: "Do", open: "09:00", close: "00:00" },
  { day: "Freitag", short: "Fr", open: "09:00", close: "00:00" },
  { day: "Samstag", short: "Sa", open: "09:00", close: "00:00" },
  { day: "Sonntag", short: "So", open: "15:00", close: "00:00" },
];

export const services = [
  "Terrasse am Wasserturm",
  "Vor Ort",
  "Vegetarische Optionen",
  "Hunde willkommen",
  "Barrierefrei",
  "Kartenzahlung",
] as const;

export const intro = {
  kicker: "ÜBER DAS HAUS",
  body:
    "Ein kleines Stück Frankreich am Friedrichsplatz. Tagsüber Quiche aus dem Ofen, Espresso am Marmortisch und Käsekuchen im Sonnenfleck der Arkaden. Wenn der Park dunkel wird, kippt das Café in den Abend — Crémant, Rotwein, leise Gespräche bis Mitternacht. Ein Ort, der den Tag nicht beendet, sondern weiterträgt.",
};

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  marker?: "Beliebt" | "Signature" | "Vegetarisch";
};

export type MenuCategory = {
  id: string;
  number: string;
  title: string;
  french?: string;
  intro?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "fruehstueck",
    number: "01",
    title: "Frühstück",
    french: "Petit Déjeuner",
    intro: "Von neun Uhr an. Sonntags ab drei.",
    items: [
      {
        name: "Croissant pur",
        description: "Aus französischem Mehl. Knusprig, blättrig, allein gut.",
        price: "3,20",
      },
      {
        name: "Croissant mit Butter & Marmelade",
        description: "Hausgemachte Konfitüre, Salzbutter aus der Bretagne.",
        price: "5,40",
        marker: "Beliebt",
      },
      {
        name: "Pain au Chocolat",
        description: "Mit zweimal dunkler Schokolade.",
        price: "3,60",
      },
      {
        name: "Petit Déjeuner Parisien",
        description: "Croissant, Pain au Chocolat, Marmelade, Saft und Café au Lait.",
        price: "13,80",
        marker: "Beliebt",
      },
      {
        name: "Omelette aux fines herbes",
        description: "Drei Eier, Kräuter, grüner Salat, Baguette.",
        price: "11,50",
      },
      {
        name: "Tartine avocat",
        description: "Sauerteig, Avocado, Zitrone, Fleur de Sel, pochiertes Ei.",
        price: "12,80",
        marker: "Vegetarisch",
      },
    ],
  },
  {
    id: "quiche",
    number: "02",
    title: "Quiche",
    french: "À toute heure",
    intro: "Vier Sorten. Hausgemacht. Den ganzen Tag.",
    items: [
      {
        name: "Quiche Lorraine",
        description: "Räucherspeck, Gruyère, Crème fraîche, kleiner Salat.",
        price: "11,80",
        marker: "Signature",
      },
      {
        name: "Quiche aux épinards",
        description: "Junger Spinat, Ziegenkäse, Muskatnuss, kleiner Salat.",
        price: "11,80",
        marker: "Vegetarisch",
      },
      {
        name: "Quiche aux poireaux",
        description: "Lauch, Crème, Bergkäse, Thymian, kleiner Salat.",
        price: "11,50",
        marker: "Vegetarisch",
      },
      {
        name: "Quiche du jour",
        description: "Was die Küche heute Morgen entschieden hat.",
        price: "12,20",
      },
    ],
  },
  {
    id: "kaffee",
    number: "03",
    title: "Kaffee & Heißes",
    french: "Les Cafés",
    intro: "Espresso-Bar, ganztags.",
    items: [
      { name: "Espresso", price: "2,80" },
      { name: "Espresso Double", price: "3,80" },
      { name: "Café Crème", description: "Espresso, viel heißes Wasser. Französische Schule.", price: "3,40" },
      { name: "Cappuccino", price: "4,20", marker: "Beliebt" },
      { name: "Café au Lait", description: "Großer Schälchen-Milchkaffee.", price: "4,80" },
      { name: "Chocolat chaud", description: "Bitterschokolade, geschäumte Vollmilch.", price: "5,20" },
      { name: "Tee aus der Kanne", description: "Earl Grey, Sencha, Pfefferminze, Verveine.", price: "5,40" },
    ],
  },
  {
    id: "kuchen",
    number: "04",
    title: "Süßes",
    french: "Pâtisserie",
    intro: "Aus der Vitrine. Bis es alle ist.",
    items: [
      { name: "Käsekuchen", description: "Leicht, kühl, lang im Abgang.", price: "4,50", marker: "Beliebt" },
      { name: "Schokoladenkuchen", description: "Dicht, fast warm, mit Salzkaramell.", price: "4,50" },
      { name: "Himbeertarte", description: "Mürbeteig, Crème pâtissière, frische Himbeeren.", price: "5,20" },
      { name: "Tarte aux pommes", description: "Apfel, Vanille, sehr wenig Zucker.", price: "4,80", marker: "Vegetarisch" },
      { name: "Macaron (pro Stück)", description: "Pistazie, Himbeere, Schokolade.", price: "2,40" },
    ],
  },
  {
    id: "abend",
    number: "05",
    title: "Abend",
    french: "Le Soir",
    intro: "Ab sechs Uhr wird der Wein aufgemacht.",
    items: [
      { name: "Glas Rotwein", description: "Côtes du Rhône oder Bordeaux, 0,1 l.", price: "6,80" },
      { name: "Glas Weißwein", description: "Sancerre, Picpoul, Riesling, 0,1 l.", price: "6,80" },
      { name: "Crémant de Loire", description: "Trocken, hellgelb. Glas 0,1 l.", price: "8,50", marker: "Beliebt" },
      { name: "Aperol Spritz", price: "9,50" },
      { name: "Kir Royal", description: "Crème de Cassis, Crémant.", price: "9,80" },
      { name: "Lorina Limonade", description: "Französische Bio-Limonade, gut gekühlt.", price: "4,80", marker: "Beliebt" },
      { name: "Käse-Teller", description: "Drei französische Käse, Trauben, Baguette.", price: "13,80" },
      { name: "Charcuterie", description: "Saucisson, Rohschinken, Cornichons, Baguette.", price: "14,50" },
    ],
  },
];

export type Review = {
  quote: string;
  author: string;
  source: "Google" | "TripAdvisor" | "golocal";
};

export const reviews: Review[] = [
  {
    quote:
      "Die Atmosphäre verzaubert wirklich — als wäre man kurz aus Mannheim raus, irgendwo in einer alten französischen Bar gelandet.",
    author: "Mai",
    source: "TripAdvisor",
  },
  {
    quote:
      "Tolle Location, man sitzt geschützt unter den Arkaden mit Blick auf den Springbrunnen.",
    author: "Marcus T.",
    source: "golocal",
  },
  {
    quote:
      "Die Quiche Lorraine war sehr lecker. Der Käsekuchen leicht und gut zum Nachmittag.",
    author: "Pittayarat S.",
    source: "Google",
  },
  {
    quote:
      "Ein hübsches Café — wie man es aus Frankreich kennt. Sonntagnachmittag voll, aber mit dem richtigen Geräuschpegel.",
    author: "tzgonline",
    source: "TripAdvisor",
  },
  {
    quote:
      "Kein Ort, an dem man es eilig hat. Wenn viel los ist, dauert es — dafür sitzt man genau dort, wo man sitzen will.",
    author: "Deepak K.",
    source: "Google",
  },
  {
    quote:
      "Ein schöner Abend mit meiner Frau. Gute Bedienung, große Stimmung neben dem Wasserturm.",
    author: "Attila Ö.",
    source: "Google",
  },
];

export const highlights = [
  {
    kicker: "ARKADEN",
    title: "Blick auf den Wasserturm",
    body:
      "Außen unter den Arkaden des Jugendstil-Ensembles, drinnen Marmortische und altes Holz. Der Blick geht über die Brunnen.",
  },
  {
    kicker: "HAUSGEMACHT",
    title: "Quiche, jeden Tag",
    body:
      "Vier Sorten frisch aus dem Ofen, dazu kleiner Salat. Vom Frühstück bis spät in den Abend.",
  },
  {
    kicker: "BIS MITTERNACHT",
    title: "Vom Café in den Abend",
    body:
      "Morgens Café au Lait, abends Crémant. Eine kleine Karte mit französischen Weinen, sieben Tage die Woche.",
  },
];

export const nav = [
  { href: "#karte", label: "Karte" },
  { href: "#quiche", label: "Quiche" },
  { href: "#besuchen", label: "Besuchen" },
  { href: "#kontakt", label: "Kontakt" },
];

export const seo = {
  title: "Café Flo — am Wasserturm, Mannheim",
  description:
    "Französisches Café am Friedrichsplatz: Quiche, Croissants und Café au Lait am Tag, Crémant und Wein bis Mitternacht. Mit Terrasse unter den Arkaden, Blick auf den Wasserturm.",
  ogImageAlt: "Café Flo unter den Arkaden am Friedrichsplatz Mannheim",
};
