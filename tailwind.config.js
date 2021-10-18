module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ash: "#f2f2f2",
        darkash: "#999da2",
        textc: "#8C8A8B",
        lightash: "#F8F9FB",
        deemblue: "#8ab4f8",
        beaublue: "#4285F4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
