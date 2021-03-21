const colors = require("tailwindcss/colors");

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
        80: "#BEBEBE",
        100: "#FFFFFF",
        trans: "#FFFFFFE0",
      },
      green: {
        100: "#8FBA1C",
        110: "#7EA419",
        trans: "#8FBA1CE0",
      },
      blue: {
        100: "#00A5DF",
        trans: "#00A5DFE0",
      },
      red: {
        100: "#D53A53",
        trans: "#D53A53E0",
      },
      yellow: {
        100: "#FDC500",
        trans: "#FDC500E0",
      },
      orange: {
        100: "#EB5C05",
        trans: "#EB5C05E0",
      },
      purple: {
        100: "#913B8E",
        trans: "#913B8EE0",
      },
      gray: {
        100: "#3C3C3B",
        trans: "#3C3C3BE0",
        10: "#f3f4f6",
      },
      black: {
        50: "#00000080",
        100: "#000000",
        trans: "#000000E0",
      },
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    fontFamily: {
      karla: ["karla", "ui-sans-serif", "system-ui", "-apple-system", "Arial"],
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
};
