const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        "dark-cream": "#d9aa64",
        "light-cream": "#f5e7de",
        "dark-purple": "#483e6a",
        "brown-cream": "#c1a692",
        "white-buram": "#e4e0db",
        "white-apik": "#f4f1eb",
        darkhover: "#171820",
        button: "#ece6d6",
        buttonhover: "#d4d0c6",
        dark: "#272935",
        bg_cream: "#edebde",
        bg_button: "#363739",
        bg_button_hover: "#5e5f61",
        "bg-baru": "#fcf8f5",
      },
      scale: {
        80: "0.8",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "576px" },
        // => @media (max-width: 576px) { ... }

        xs: { max: "380px" },
      },
    },
  },
  plugins: [],
});