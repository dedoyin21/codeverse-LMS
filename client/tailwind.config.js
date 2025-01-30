/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        'dark-gray': '#111827',
        'dark-text' : '#ECEFF4',
        'alert' : '#3f0bdb',
        'custom-white' : '#F8F8F8',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        cabinetGrotesk: ['Cabinet Grotesk', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        semibold: '600',
        bold: '700',
      },
     
     
    },
  plugins: [],
  variants: {
    extend: {
      display: ["focus-group"]
    }
  },
  darkMode: 'class',
}

}