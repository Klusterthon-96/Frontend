/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", "sans-serif"],
        Lacq: ["Lacquer", "cursive"],
        new: ["Yeon Sung", "cursive"],
      },
      backgroundImage: {
        wallpaper: "url('/src/asset/Frame 1618868308.png')",
        RegWallpaper: "url('/src/asset/Frame 1618868309.png')",
      },
    },
  },
  plugins: [],
};
