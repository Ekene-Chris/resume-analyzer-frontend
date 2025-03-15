/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#FFF4E9",
        "deep-black": "#070402",
        "caput-mortuum": {
          DEFAULT: "#592429",
          50: "#f9e6e7",
          100: "#f3cccf",
          200: "#e89aa0",
          300: "#dd6770",
          400: "#d13541",
          500: "#b91e2a",
          600: "#961823",
          700: "#73131c",
          800: "#4f0e14",
          900: "#2c080c",
        },
        gold: {
          DEFAULT: "#FFD700",
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
      },
      fontFamily: {
        sans: ["Nunito", "Helvetica", "Arial", "sans-serif"],
        display: ["Nunito", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
