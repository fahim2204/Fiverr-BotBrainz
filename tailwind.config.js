/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alpha: ["Poppins"],
      },
      colors:{
        'bot-alpha': "#21023F",
        'bot-beta': "#EE00FF",
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
