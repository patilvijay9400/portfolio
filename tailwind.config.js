/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        "vh-minus-2.5rem": "calc(100vh - 2.5rem)",
      },
    },
  },
  plugins: [],
};
