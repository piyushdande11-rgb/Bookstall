import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lbc: {
          blue: "#1E3A8A",    // Primary: Deep Blue (Trust & Policy)
          green: "#10B981",   // Accent: Vibrant Green (Growth & Environment)
          dark: "#0F172A",    // Text: Dark Slate
          light: "#F8FAFC",   // Background: Light Gray
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-merriweather)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;