/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        shark: {
          500: "#1e2630",
        },
        bunker: {
          500: "#101317",
        },
      },
    },
  },
  plugins: [],
};
