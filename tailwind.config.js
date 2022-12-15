/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors : {
        orangeAccent: {
          100 : "#FEEAD2",
          200 : "#FDD0A7",
          300 : "#FAAE7A",
          400 : "#F68C58",
          500 : "#F15A25",
          600 : "#D03D1B",
          700 : "#AD2412",
          800 : "#8B120A",
          900 : "#730609",
        },
        textColor : "#353535",
      }
    },
  },
  plugins: [],
};
