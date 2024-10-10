/** @type {import('tailwindcss').Config} */
// const spacing = require("./design-tokens/atoms/spacing");

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      orange: {
        dark3: "#1f0601",
        dark2: "#d73e00",
        dark1: "#ff510a",
        brand: "#ff6e33",
        light1: "#ffa654",
        light2: "#ffc997",
        light3: "#fff2d7",
        light4: "#fff8f1",
      },
      green: {
        dark1: "#01453d",
        brand: "#01594e",
        light1: "#179d72",
        light2: "#48b894",
        light3: "#afdcc4",
      },
      secondary: {
        blue: "#0d8bff",
        green: "#52c41a",
        red: "#f85959",
        yellow: "#faad14",
      },
      whiteGray: {
        1: "#fdfdfd",
      },
      gray: {
        1: "#f9f9f9",
        2: "#f2f3f4",
        3: "#e7e9eb",
        4: "#d7d9db",
        5: "#98999a",
        6: "#767779",
        7: "#303340",
        8: "#202330",
        9: "#151720",
      },
      whiteTransparent: {
        50: "rgba(255, 255, 255, 0.5)",
        30: "rgba(255, 255, 255, 0.3)",
        10: "rgba(255, 255, 255, 0.1)",
      },
      blackTransparent: {
        70: "rgba(25, 23, 32, 0.7)",
        50: "rgba(25, 23, 32, 0.5)",
        30: "rgba(25, 23, 32, 0.3)",
        10: "rgba(25, 23, 32, 0.1)",
      },
      label: {
        green: "rgba(82, 196, 26, 0.1)",
        blue: "rgba(13, 138, 255, 0.1)",
        red: "rgba(248, 89, 89, 0.1)",
        orange: "rgba(255, 110, 51, 0.1)",
        yellow: "rgba(250, 173, 20, 0.1)",
        gray: "rgba(48, 51, 64, 0.1)",
      },
      gradient: {
        primary: "linear-gradient(135deg, #FF510A 0%, #FFA654 100%)",
      },
      notion: {
        default: "#37352F",
        gray: "#8F8E8A",
        brown: "#684B3F",
        orange: "#FF6E33",
        yellow: "#FBCA51",
        green: "#4DB881",
        blue: "#0D8BFF",
        purple: "#7946B7",
        pink: "#F04286",
        red: "#F95C5E",
        code: "#EB5757",
        background: {
          gray: "rgba(152, 153, 154, 0.15)",
          brown: "rgba(186, 71, 58, 0.15)",
          orange: "rgba(255, 110, 51, 0.15)",
          yellow: "rgba(251, 202, 81, 0.15)",
          green: "rgba(77, 184, 129, 0.15)",
          blue: "rgba(13, 139, 255, 0.15)",
          purple: "rgba(121, 70, 183, 0.15)",
          pink: "rgba(240, 66, 134, 0.15)",
          red: "rgba(249, 92, 94, 0.15)",
          code: "rgba(255, 248, 241, 1)",
          // code: 'rgba(255, 248, 241, 0.3)',
        },
      },
    },
    fontFamily: {
      BMDOHYEON: ["BMDOHYEON"],
    },
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },

      screens: {
        desktop: "1128px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
