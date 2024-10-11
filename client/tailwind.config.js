/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",    
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#A74747',
        'custom-blue': '#2E294E',
        'custom-yellow': '#FFD400',
        'custom-cream': '#F6F0E3',
        'custom-purple': '#541388',
        'dark-gray': '#2E3440',
        'dark-text' : '#ECEFF4',
        'alert' : '#3f0bdb'
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

