import Image from "next/image";
import { MicroLabel } from "@/components/micro-label";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  aspect?: "wide" | "ultrawide" | "tall";
  className?: string;
};

export function ImageBand({
  src,
  alt,
  caption,
  credit,
  aspect = "wide",
  className,
}: Props) {
  const aspectClass =
    aspect === "ultrawide"
      ? "aspect-[21/8]"
      : aspect === "tall"
        ? "aspect-[16/10] md:aspect-[16/8]"
        : "aspect-[16/9] md:aspect-[16/7]";

  return (
    <figure className={cn("bg-surface", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden bg-muted",
          aspectClass,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="container mx-auto py-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <MicroLabel className="text-sub">{caption}</MicroLabel>
        <MicroLabel className="text-sub/80 not-italic">{credit}</MicroLabel>
      </figcaption>
    </figure>
  );
}
