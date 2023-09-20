/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: "375px",
      md: "1029px",
      lg: "1440px",
    },
    extend: {
      colors: {
        skyBlue: "#87CEEB",
        gold: "#9E6C16",
        Dgold: "#A56F16",
        lightGold: "#F9F18F",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
