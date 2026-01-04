import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        darkbackground: "#171716",
        lightforeground: "var(--foreground)",
        darktext: "#FFFFFE",
        lighttext: "#000000"
      },
      cursor: {
        blackOut: "url('cursors/blackcursor.svg') 24 24, default",
        whiteOut: "url('cursors/whitecursor.svg') 24 24, default",
        blackGithub: "url('cursors/blackgithub.svg') 24 24, default",
        whiteGithub: "url('cursors/whitegithub.svg') 24 24, default"
      },
      keyframes: {
        infinitescroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        infinitescroll: "infinitescroll 20s linear infinite"
      },
      fontFamily: {
        sans: ["Geist", "Inter", "sans-serif"],
        mono: ["Geist Mono", "monospace"]
      },
      screens: {
        xs: "260px"
      }
    }
  },
  plugins: []
} satisfies Config;
