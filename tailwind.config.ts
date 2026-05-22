import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        surface: "var(--color-surface)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        card: "var(--color-card)",
        accent: "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)",
        warm: "var(--color-warm)",
        line: "var(--color-line)",
        sub: "var(--color-sub)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        micro: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.16em" }],
        label: ["0.75rem", { lineHeight: "1.1", letterSpacing: "0.14em" }],
        kicker: ["0.8125rem", { lineHeight: "1.2", letterSpacing: "0.12em" }],
        lead: ["1.125rem", { lineHeight: "1.55", letterSpacing: "-0.005em" }],
        "lead-lg": ["1.3125rem", { lineHeight: "1.5", letterSpacing: "-0.008em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
      },
      maxWidth: {
        prose: "62ch",
        edit: "1180px",
      },
      borderRadius: {
        card: "14px",
      },
      transitionTimingFunction: {
        ed: "cubic-bezier(.22,1,.36,1)",
      },
    },
  },
  plugins: [],
};
export default config;
