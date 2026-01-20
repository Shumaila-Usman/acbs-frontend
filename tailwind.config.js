/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-light': '#0ea7e0',
        'brand-dark': '#5631cf',
      },
    },
  },
  plugins: [],
}

