const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

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
    screens: {
      xs: "420px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
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
        light: "#f2fffe",
        lightTrans: "#f2fffed6",
      },
      gray: {
        100: "#3C3C3B",
      },
      black: {
        100: "#000000",
        trans: "#0000004d",
      },
      purple: {
        100: "#631A53",
        trans: "#631a5394",
      },
      blue: {
        100: "#05668D",
        trans: "#05668da1",
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
  },
}
