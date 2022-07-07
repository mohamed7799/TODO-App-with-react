module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        light_veryLightGray: "hsl(0, 0%, 98%)",
        light_VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
        light_LightGrayishBlue: "hsl(233, 11%, 84%)",
        light_DarkGrayishBlue: " hsl(236, 9%, 61%)",
        light_VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        dark_VeryDarkBlue: "hsl(235, 21%, 11%)",
        dark_VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        dark_LightGrayishBlue: "hsl(234, 39%, 85%)",
        dark_LightGrayishBlueHover: "hsl(236, 33%, 92%)",
        dark_DarkGrayishBlue: "hsl(234, 11%, 52%)",
        dark_VeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
      },
      backgroundImage: {
        "light-mobile": "url('./assets/bg-mobile-light.jpg')",
        "dark-mobile": "url('./assets/bg-mobile-dark.jpg')",
        "light-desktop": "url('./assets/bg-desktop-light.jpg')",
        "dark-desktop": "url('./assets/bg-desktop-dark.jpg')",
        "check": "url('./assets/icon-check.svg')",
      },
    },
  },
  plugins: [],
};
