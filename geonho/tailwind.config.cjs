/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 24px 80px rgba(0,0,0,.45)',
      },
      colors: {
        ink: '#07111f',
        mint: '#72f5c8',
        sky: '#7aa7ff',
        pink: '#ff8bd4',
      },
    },
  },
  plugins: [],
}
