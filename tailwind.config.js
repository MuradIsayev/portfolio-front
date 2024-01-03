/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': { 'max': '768px' },
      'lg': { 'min': '1024px' },
    },
    extend: {
      fontFamily: {
        primary: "JosefinSans-VariableFont_wght",
        // secondary: "CothamSans",
        // tertiary: "Gidole-Regular",
        quaternary: "Nunito-VariableFont_wght",

      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

