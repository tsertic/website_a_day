import { Inconsolata } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      labGrotesque: ["var(--font-lab-grotesque)"],
      inconsolata: ["var(--font-inconsolata)"],
    },
    screens: {
      md: "840px",
    },
    colors: {
      primary: "#64ffda",
      "primary-content": "#fff",
      "base-100": "#0a192f",
      "base-200": "#F0F0F0",
      "base-content": "#8892b0",
      neutral: "#2C2C2C",
      "neutral-focus": "#ccd6f6",
    },

    fontSize: {
      nav: [
        "14px",
        { lineHeight: "1", fontWeight: "500", letterSpacing: ".14px" },
      ],
      btn: [
        "14px",
        { lineHeight: "1", fontWeight: "400", letterSpacing: ".14px" },
      ],
      "body-mobile": [
        "15px",
        { lineHeight: "160%", fontWeight: "400", letterSpacing: ".16px" },
      ],
      body: [
        "20px",
        { lineHeight: "160%", fontWeight: "400", letterSpacing: ".16px" },
      ],
      "2xl": [
        "40px",
        { lineHeight: "1", fontWeight: "600", letterSpacing: " -1px" },
      ],
      "4xl": [
        "70px",
        { lineHeight: "1", fontWeight: "600", letterSpacing: " -2px" },
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
