/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#491EFF",
        secondary: "#7014CD",
        tertiary:  "#D9D9D9",
        white: "#ffffff",
        black: "#000000",
        offwhite: "#F0F0F0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
}