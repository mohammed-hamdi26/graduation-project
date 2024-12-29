/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#199A8E",
        "second-main": "#608BC1",
        secondary: "#7B6BA8",
        background: "#FEF9F2",

        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
