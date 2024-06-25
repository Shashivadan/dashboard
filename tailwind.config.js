/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-inset": " 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;",
        "custom-card": "-4px 8px 20px 0px #0000001A",
        "custom-light": "0px 4px 4px 0px #00000040",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
