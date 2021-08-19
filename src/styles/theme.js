const theme = {
  colors: {
    white: "#fff",
    lightGrey: "#bbbbbb",
    Grey: "#5D5D5D",
    white25: "rgba(255, 255, 255, 0.25)",
    white75: "rgba(255, 255, 255, 0.75)",
    cyan: "#65C9B8",
    orange: "#ff6542",
    lightOrange: "#ffbcb3",
    purple: "#dc6acf",
    darkPurple: "#20063b",
    primaryGrey: "#1f1f1f",
  },

  fontSizes: {
    regular: 1, // 16px
    small: 0.875, // 14px

    h1: 3, //48px
    h2: 2, // 32px
    h3: 1.875, // 30px
    h4: 1.625, // 26px
    h5: 1.375, // 22px
    h6: 1.125, // 18px
  },

  fonts: "Source Sans Pro",

  // Grid Theme
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 3, // rem
    outerMargin: 1.5, // rem
    mediaQuery: "only screen",
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 75, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};

export default theme;
