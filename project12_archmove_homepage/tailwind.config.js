/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "840px",
    },
    colors: {
      primary: "#FD665E",
      "primary-content": "#fff",
      "base-100": "#fff",
      "base-200": "#F0F0F0",
      "base-content": "#111",
      neutral: "#2C2C2C",
    },

    fontSize: {
      nav: [
        "14px",
        { lineHeight: "40px", fontWeight: "500", letterSpacing: ".14px" },
      ],
      btn: [
        "14px",
        { lineHeight: "40px", fontWeight: "600", letterSpacing: ".14px" },
      ],
      body: [
        "16px",
        { lineHeight: "160%", fontWeight: "400", letterSpacing: ".16px" },
      ],
      "2xl": ["40px", { fontWeight: "800", letterSpacing: " -1px" }],
      "4xl": ["96px", { fontWeight: "800", letterSpacing: " -2px" }],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        orange: {
          primary: "#FD665E",
          "primary-content": "#fff",

          "base-100": "#fff",
          "base-200": "#F0F0F0",
          "base-content": "#111",
          neutral: "#2C2C2C",
        },
      },
      "dark",
      "cmyk",
      "dracula",
    ],
  },
};
