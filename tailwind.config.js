module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        "dark-cream": "#d9aa64",
        "light-cream": "#f5e7de",
        "dark-purple": "#483e6a",
        "brown-cream": "#c1a692",
        "white-buram": "#e4e0db",
        "white-apik": "#f4f1eb",
        "darkhover": '#171820',
        "button": '#ece6d6',
        "buttonhover": '#d4d0c6',
        "dark": '#272935',
      },
      scale: {
        '80': '0.8',
      },
    },
  },
  plugins: [],
}
