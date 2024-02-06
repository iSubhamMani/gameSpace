/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "accent-color": "var(--accent-clr)",
        "primary-color": "var(--primary-clr)",
        "bg-primary-clr-dark": "var(--bg-primary-clr-dark)",
        "bg-secondary-clr-dark": "var(--bg-secondary-clr-dark)",
        "text-clr-primary": "var(--text-clr-primary)",
        "bg-primary-clr-light": "var(--bg-primary-clr-light)",
        "bg-secondary-clr-light": "var(--bg-secondary-clr-light)",
      },
    },
  },
  plugins: [],
};
