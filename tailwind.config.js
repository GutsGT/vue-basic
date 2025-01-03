/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      boxShadow: {
        "main-section": "0px 6px 10px 5px var(--color-primary)"
      }
    },
  },
  plugins: [],
}