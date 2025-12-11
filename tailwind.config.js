module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        colors: {
            'primary': '#3b82f6', // Tailwind blue-500
            'secondary': '#f97316', // Tailwind orange-500
            'dark-bg': '#0f172a', // Tailwind slate-900
        }
    }
  },
  plugins: [],
}
