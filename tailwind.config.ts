import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Barlow", "sans-serif"],
        heading: [
          "var(--font-space-grotesk)",
          "Space Grotesk",
          "Poppins",
          "Barlow",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#003087",
        secondary: "#004BB5",
        accent: "#00C8FF",
        muted: "#5A6070",
        border: "#DADEE7",
        surface: "#FFFFFF",
        "surface-alt": "#F4F6FA",
        foreground: "#141D2E",
        "primary-soft": "#E8EEFB",
        "primary-deep": "#0E2758",
        "hero-end": "#0066CC",
        brand: "#003087",
        sky: "#00C8FF",
        "brand-light": "#004BB5",
      },
      borderRadius: {
        xl: "var(--radius-lg)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        brand: "var(--shadow-brand)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.4s ease-in-out",
        "accordion-up": "accordion-up 0.4s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
