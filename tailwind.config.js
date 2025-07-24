/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
       colors: {
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlueBg: 'hsl(207, 26%, 17%)',
        veryDarkBlueText: 'hsl(200, 15%, 8%)',
        darkGray: 'hsl(0, 0%, 52%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        pureWhite: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}


