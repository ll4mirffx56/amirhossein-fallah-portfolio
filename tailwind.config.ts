import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FBFBFA",
        ink: "#14161A",
        muted: "#6B7280",
        line: "#E7E7E3",
        signal: "#1D4ED8",
      },
      fontFamily: {
        sans: ["var(--font-vazirmatn)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
