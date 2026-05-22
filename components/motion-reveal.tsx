"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { ease } from "@/lib/motion";

type Props = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "header" | "li";
};

export function Reveal({
  children,
  delay = 0,
  y = 18,
  as = "div",
  className,
  ...rest
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
