/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "prime-color": "#FFDD95",
        "white-color": "#FFFFFF",
        "black-color": "#111111",
        "green-color": "#B0E3AF",
      },
    },
  },
  plugins: [],
};
