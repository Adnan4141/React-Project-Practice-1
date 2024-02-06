/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:"576px",
      md:"768px",
      lg:"992px",
      xl:"1200px"
  },
  extend: {
    colors:{
      "dark-gray": "#323334",
      yellow: "#FFEAAE",
      "dark-yellow": "#FCCA3F",
      orange: "#F6820C",
    },
    },
  },
  plugins: [],
};

