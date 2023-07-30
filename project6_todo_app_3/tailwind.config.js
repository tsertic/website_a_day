/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
        jelly: {
          primary: "#77ffe6",

          secondary: "#f9ef7f",

          accent: "#f9ebc2",

          neutral: "#181d21",

          "base-100": "#403649",

          info: "#4f77cf",

          success: "#20dfb3",

          warning: "#d8a603",

          error: "#f3537e",
        },
      },
    ],
  },
};
