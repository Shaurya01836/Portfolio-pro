/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0D1117", // Or your preferred background color
        foreground: "#C9D1D9", // Or your preferred text color
        customBlue: "#3182CE", // Example color, adjust as needed
      },
    },
  },
  plugins: [],
};