import { createThemes } from "tailwindcss-themer";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      defaultTheme: {
        extend: {},
      },
      themes: [],
      source: "src/index.css",
    }),
    ({ addVariant }) => {
      addVariant("dark", "&:is(.dark *)");
    },
  ],
};