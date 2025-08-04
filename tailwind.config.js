/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        brightRed: "hsl(12,88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        verydarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        teaGreen: "#C4F1BE",
        cambridgeGreen: "#A2C3A4",
        cambridgeBlue: "#869D96",
        paynesGray: "#525B76",
        paynesPale: "#6A7390",
        paynesTrespale: "#d6d9e4ff",
        finBleufonce: "#0F3A6A",
        finBleupale: "#29548A",
        finGold: "#D4AF37",
        white: "#FFFFFF",
        
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['system-ui', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
        header: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}



