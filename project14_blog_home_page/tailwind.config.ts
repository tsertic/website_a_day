import type { Config } from "tailwindcss";

const config: Config = {
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
      sm: [".8rem", {}],
      md: ["1rem", {}],
      lg: ["1.2rem", {}],
      xl: ["2rem", {}],
      body: ["1rem", {}],
      title: ["2rem", {}],
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
          primary: "#ffa387",
          "primary-content": "#fff",
        },
      },
      "dark",
      "system",
    ],
  },
};
export default config;
