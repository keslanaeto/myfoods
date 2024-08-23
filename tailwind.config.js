/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
            primary: "#059669",
            secondary: "#fb923c",
            primarys: "#052e16",
            mix: "#52525b",
            pinky:"#fdba74",
            mid: "#fb923c"
            
            
       },

      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        averia: ["Averia serif Libre", "serif"],
        Grypen: ["Qwitcher Grypen", "cursive"],
        Baskervville: ["Baskervville SC", "serif"],
        Dancing: ["Dancing Script", "cursive"]
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      }
    },
  },
  plugins: [],
}
