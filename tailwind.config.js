
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#bc6c25',
      },
      fontFamily: {
       workSans :'Work Sans", sans-serif'
      }
    },
  },
  plugins: [require("daisyui")],
}
);


