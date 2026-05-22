import type { Variants, Transition } from "framer-motion";

export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = (delay = 0.08): Transition => ({
  staggerChildren: delay,
  delayChildren: 0.05,
});

export const reveal: Transition = {
  duration: 0.6,
  ease,
};
