/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        theme: {
          50: "#ffeff1",
          100: "#ffe0e5",
          200: "#ffc5d2",
          300: "#ff96ad",
          400: "#ff5b83",
          500: "#ff225d",
          600: "#ff004b",
          700: "#da0040",
          800: "#b6003e",
          900: "#800032",
          950: "#58001b",
        },
      },
    },
  },
  plugins: [],
};
