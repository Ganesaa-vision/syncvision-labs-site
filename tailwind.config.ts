import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        // The SyncVision Palette
        obsidian: "#0a0a0a",      // Deep Background
        glass: "#171717",         // Card Background
        indigo: {
          DEFAULT: "#6366f1",     // Primary Brand (Electric Indigo)
          glow: "#4338ca",        // Darker interaction state
        },
        emerald: {
          DEFAULT: "#10b981",     // Success / SEO Wins (Signal Green)
        },
        slate: {
          50: "#f8fafc",          // White
          100: "#f1f5f9",         // Text Main
          200: "#e2e8f0",         // Light Slate
          400: "#94a3b8",         // Text Muted
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;
