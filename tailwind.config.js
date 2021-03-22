const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./src/**/*.html",
    ],
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        100: "#FFFFFF",
        trans: "#FFFFFFE0",
      },
      green: {
        100: "#02C39A",
        trans: "#02c39aa1",
      },
      gray: {
        100: "#3C3C3B",
      },
      black: {
        100: "#000000",
        trans: "#0000004d",
      },
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      fontSize: {
        xxs: "0.6rem",
      },
      screens: {
        xs: "420px",
      },
    },
    fontFamily: {
      karla: ["karla", "ui-sans-serif", "system-ui", "-apple-system", "Arial"],
      paris: [
        "parisienne",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "Arial",
      ],
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
      borderWidth: ["last"],
      margin: ["first"],
      inset: ["odd"],
      flexDirection: ["odd"],
    },
    container: [],
  },
}
