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
      fontFamily: {
        secondary: "GapSansBold",
      },
      backgroundImage: {
        "d-card-1": "var(--d-card-bg-1)",
        "d-card-2": "var(--d-card-bg-2)",
        "d-card-4": "var(--d-card-bg-4)",
        "d-card-3": "var(--d-card-bg-3)",
        "d-card-5": "var(--d-card-bg-5)",
        "d-card-6": "var(--d-card-bg-6)",
        "d-card-7": "var(--d-card-bg-7)",
        "l-card-1": "var(--l-card-bg-1)",
        "l-card-2": "var(--l-card-bg-2)",
        "l-card-4": "var(--l-card-bg-4)",
        "l-card-3": "var(--l-card-bg-3)",
        "l-card-5": "var(--l-card-bg-5)",
        "l-card-6": "var(--l-card-bg-6)",
        "l-card-7": "var(--l-card-bg-7)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

