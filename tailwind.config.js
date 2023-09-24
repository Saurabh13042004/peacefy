/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'custom':['EB Garamond', 'serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

