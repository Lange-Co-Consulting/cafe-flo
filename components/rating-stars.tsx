import { cn } from "@/lib/utils";

export function RatingStars({
  score,
  count,
  source,
  className,
  size = "sm",
}: {
  score: number;
  count: number;
  source: string;
  className?: string;
  size?: "sm" | "md";
}) {
  const full = Math.floor(score);
  const half = score - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  const dot = size === "md" ? "h-2.5 w-2.5" : "h-2 w-2";

  return (
    <div
      className={cn("flex items-center gap-3 text-warm", className)}
      aria-label={`${score} von 5 Sternen aus ${count} Bewertungen auf ${source}`}
    >
      <div className="flex items-center gap-1" aria-hidden>
        {Array.from({ length: full }).map((_, i) => (
          <span key={`f${i}`} className={cn(dot, "rounded-full bg-warm")} />
        ))}
        {half && (
          <span
            className={cn(dot, "rounded-full")}
            style={{
              background:
                "linear-gradient(90deg, var(--color-warm) 50%, rgba(184,112,58,0.22) 50%)",
            }}
          />
        )}
        {Array.from({ length: empty }).map((_, i) => (
          <span
            key={`e${i}`}
            className={cn(dot, "rounded-full bg-warm/25")}
          />
        ))}
      </div>
      <span className="text-label uppercase text-sub">
        {score.toFixed(1)} · {count.toLocaleString("de-DE")} {source}
      </span>
    </div>
  );
}
