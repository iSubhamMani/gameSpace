/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color-light": "var(--primary-clr-light)",
        "primary-color-dark": "var(--primary-clr-dark)",
        "secondary-color-dark": "var(--secondary-clr-dark)",
        "accent-color": "var(--accent-clr)",
        "primary-text-color": "var(--primary-text-clr)",
        "primary-text-color-light": "var(--primary-text-clr-light)",
      },
    },
  },
  plugins: [],
};
