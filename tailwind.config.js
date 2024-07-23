/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'cormorant-upright': ['Cormorant Upright', 'serif'],
        'cormorant-infant': ['Cormorant Infant', 'serif']
      }
    },
  },
  plugins: [],
}

