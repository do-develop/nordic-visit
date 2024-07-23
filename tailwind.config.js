/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-indigo": "var(--color-indigo)",
        "color-skyblue": "var(--color-skyblue)", 
        "color-blue": "var(--color-blue)",
        "color-grey": "var(--color-grey)",
        "color-purple": "var(--color-purple)"
      }
    },
  },
  plugins: [],
}

