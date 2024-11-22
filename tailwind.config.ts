import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "primary-red": "bg-gradient-to-br from-slate-200 to-indigo-600",
        "my-white": "#cacaca",
        "my-black": "#222",
        "my-gray": "#555",
        "my-hover": "#262626ee",
        "my-hover-secondary": "#dddddd88"
      },
      gridTemplateColumns: {
        "my-6": "0.25fr, 1fr, 1fr, 1fr, 1fr, 1.25fr",
        "my-6-dots": "0.5fr, 1fr, 1fr, 1fr, 1fr, 0.5fr",
        "my-5": "1fr, 1fr, 1fr, 1fr, 1.25fr",
      },
      keyframes: {
        "appear": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1"
          },
        },
        "slide": {
          from: {
            transform: "translateX(-50%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0%)",
            opacity: "1",
          },
        },
        "slide-right": {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        }
      },
      animation: {
        "appear": "appear 0.75s ease-in-out",
        "slide": "slide 0.75s ease-in-out",
        "slide-right-0": "slide-right 0.35s ease-out 0s forwards",
        "slide-right-1": "slide-right 0.35s ease-out 0.15s forwards",
        "slide-right-2": "slide-right 0.35s ease-out 0.30s forwards",
        "slide-right-3": "slide-right 0.35s ease-out 0.45s forwards",
        "slide-right-4": "slide-right 0.35s ease-out 0.6s forwards",
      }
    },
  },
  plugins: [],
};
export default config;
