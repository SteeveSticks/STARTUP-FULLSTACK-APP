import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        worksans: ["var(--font-worksans)"],
      },
    },
  },
  plugins: [animate, typography],
};

export default config;
