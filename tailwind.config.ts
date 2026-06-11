import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
        bg: "var(--bg)",
        "bg-sunk": "var(--bg-sunk)",
        fg: "var(--fg)",
        muted: "var(--fg-muted)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        text: ["var(--font-text)"],
        mono: ["var(--font-mono)"]
      }
    }
  },
  plugins: []
};

export default config;
