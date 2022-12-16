/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E0A500",
        primaryLighter: "#ffc82e",
      },
      maxWidth: { maximus: "1200px" },
      fontFamily: {
        heading: ["var(--font-unna)"],
      },
      gridTemplateColumns: {
        partners: "repeat(auto-fill, minmax(140px, 1fr))",
        "partners-lg": "repeat(auto-fill, minmax(180px, 1fr))",
      },
    },
  },
  plugins: [],
}
