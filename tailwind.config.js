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
        "dark-card-5": "var(--dark-bc-5)",
        "dark-card-6": "var(--dark-bc-6)",
        "dark-card-7": "var(--dark-bc-7)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

