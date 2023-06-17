/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1185px",
      },
      fontFamily: {
        man: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#3734A9",
      },
      // backgroundImage: {
      //   bannerbg: "url('./assets/banner.png')",
      // },
    },
  },
  plugins: [],
};
