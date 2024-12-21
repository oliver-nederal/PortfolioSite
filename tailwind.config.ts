import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbackground: "#171716",
        lightforeground: "var(--foreground)",
        darktext: "#FFFFFE",
        lighttext: "#000000",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        'xs': '260px',
      },
    },
  },
  plugins: [],
} satisfies Config;
