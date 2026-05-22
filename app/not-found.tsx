import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-surface text-ink flex items-center">
      <div className="container mx-auto py-32">
        <p className="text-label uppercase text-sub">404 · Seite verlegt</p>
        <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-tightest">
          Hier ist nur
          <br />
          <span className="italic text-accent">Tischreserve.</span>
        </h1>
        <p className="mt-6 max-w-prose text-lead text-ink/80">
          Die Seite, die du suchst, gibt es nicht. Vielleicht ein Tisch
          unter den Arkaden stattdessen.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 font-display italic text-2xl border-b border-ink/40 hover:border-accent transition-colors pb-1"
        >
          zurück zur Karte ↘
        </Link>
      </div>
    </main>
  );
}
