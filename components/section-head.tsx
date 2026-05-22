import { MicroLabel } from "@/components/micro-label";
import { Reveal } from "@/components/motion-reveal";
import { cn } from "@/lib/utils";

type Props = {
  kicker: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  size?: "default" | "large";
  align?: "stacked" | "split";
  className?: string;
};

export function SectionHead({
  kicker,
  title,
  lead,
  size = "default",
  align = "stacked",
  className,
}: Props) {
  const titleSize =
    size === "large"
      ? "text-[clamp(2.5rem,7.5vw,5rem)] leading-[0.98]"
      : "text-[clamp(2rem,6vw,3.75rem)] leading-[1.02]";

  if (align === "split" && lead) {
    return (
      <div className={cn("grid grid-cols-12 gap-y-6 gap-x-6 items-end", className)}>
        <Reveal className="col-span-12 md:col-span-7">
          <MicroLabel>{kicker}</MicroLabel>
          <h2
            className={cn(
              "mt-5 font-display tracking-[-0.015em] text-ink",
              titleSize,
            )}
          >
            {title}
          </h2>
        </Reveal>
        <Reveal
          delay={0.08}
          className="col-span-12 md:col-span-5 md:pl-8 lg:pl-12"
        >
          <p className="text-lead text-ink/80 max-w-prose">{lead}</p>
        </Reveal>
      </div>
    );
  }

  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <MicroLabel>{kicker}</MicroLabel>
      <h2
        className={cn(
          "mt-5 font-display tracking-[-0.015em] text-ink",
          titleSize,
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className="mt-5 md:mt-6 text-lead text-ink/80 max-w-prose">{lead}</p>
      )}
    </Reveal>
  );
}
