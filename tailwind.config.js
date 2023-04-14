/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      colors: {
        primary: "#5598fd",
        indigo: "#1e213a",
        "white-2": "#E7E7EB",
        "gray-2": "#6E707A"
      }

    },
  },
  plugins: [],
}