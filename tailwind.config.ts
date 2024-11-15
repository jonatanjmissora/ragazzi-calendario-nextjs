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
        "my-hover": "#262626ee",
        "my-hover-secondary": "#dddddd88"
      },
    },
  },
  plugins: [],
};
export default config;
