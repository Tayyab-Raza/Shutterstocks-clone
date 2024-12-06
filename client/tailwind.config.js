/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#fc3441', 
        customblue: '#0c121c'
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
        'hard-edge': '0 6px 15px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

