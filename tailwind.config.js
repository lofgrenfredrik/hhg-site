/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { width: { maximus: "1200px" }, fontFamily: { heading: ["var(--font-unna)"] } },
  },
  plugins: [],
}
