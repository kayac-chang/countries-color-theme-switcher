module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: {
          darkest: `hsl(200, 15%, 8%)`,
          darker: `hsl(207, 26%, 17%)`,
          dark: `hsl(209, 23%, 22%)`,
        },

        gray: {
          dark: `hsl(0, 0%, 52%)`,
          light: `hsl(0, 0%, 98%)`,
        },
      },
    },
  },
  plugins: [],
};
