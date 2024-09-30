/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Includes all JavaScript and TypeScript files in src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff5722',
        'primary-dark': '#e64a19',
      },
    },
  },
  plugins: [],
}
