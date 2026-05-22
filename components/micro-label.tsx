import { cn } from "@/lib/utils";

export function MicroLabel({
  children,
  as: Tag = "span",
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  as?: "span" | "div" | "p";
  className?: string;
  tone?: "default" | "warm" | "accent";
}) {
  return (
    <Tag
      className={cn(
        "text-micro uppercase font-sans",
        tone === "default" && "text-sub",
        tone === "warm" && "text-warm",
        tone === "accent" && "text-accent",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
