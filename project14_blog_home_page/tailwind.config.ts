import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["var(--font-roboto)"],
      poppins: ["var(--font-poppins)"],
    },
    fontSize: {
      "nav-link": [".8rem", {}],
      xs: [".8rem", {}],
      sm: [".875rem", {}],
      md: ["1rem", {}],
      lg: ["1.2rem", {}],
      xl: ["2rem", {}],
      body: ["1rem", {}],
      title: ["2.2rem", { fontWeight: 700, lineHeight: "50px" }],
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "200": "200%",
      "16": "4rem",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#fe4f70",
          secondary: "#FFA387",
          "primary-content": "#fff",
          "base-300": "#9fAABB",
          "base-content": "#203656",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#ffa387",
          "primary-content": "#fff",
          "base-300": "#9fAABB",
        },
      },
    ],
  },
};
export default config;
