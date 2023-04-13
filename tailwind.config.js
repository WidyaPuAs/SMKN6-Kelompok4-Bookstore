/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      scale: {
        // '80': '80',
      },
      colors: {
        "dark-cream": "#d9aa64",
        "light-cream": "#f5e7de",
        "dark-purple": "#483e6a",
        "brown-cream": "#c1a692",
        "white-buram": "#e4e0db",
        "white-apik": "#f4f1eb",
      },
    },
  },
  plugins: [],
}