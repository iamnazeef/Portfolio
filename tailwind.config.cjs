/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "manrope": ["Manrope", "sans-serif"],
      },
      textColor: {
        "standardGray": "#a3a3a3",
      },
      fontSize: {
        "standardSize": "0.975rem",
      },
      backgroundColor: {
        "standardGray": "#a3a3a3",
        "darkGray": "#292929",
      },
    },
    screens: {
      "tablet": "640px",
      // => @media (min-width: 640px) { ... }

      "laptop": "1024px",
      // => @media (min-width: 1024px) { ... }

      "desktop": "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("tailwind-scrollbar")],
});
