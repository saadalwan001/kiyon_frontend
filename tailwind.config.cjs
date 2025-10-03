/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },

       colors: {
        // Text main gradient
        'textGradientStart': '#F52B74',
        'textGradientEnd': '#FD8908',

        // Text secondary/hover gradient
        'textGradientHoverStart': '#0CE3DE',
        'textGradientHoverEnd': '#0CE3DE',

        // Button gradient
        'btnGradientStart': '#F52B74',
        'btnGradientEnd': '#FD8908',


        //text hover color
        'hcolor': '#F52B74',
      },

    },
  },
  plugins: [],
};
