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
    },
    extend: {
      backgroundImage: {
        "dark-card-1": "var(--dark-bc-1)",
        "dark-card-2": "var(--dark-bc-2)",
        "dark-card-3": "var(--dark-bc-3)",
        "dark-card-4": "var(--dark-bc-4)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

