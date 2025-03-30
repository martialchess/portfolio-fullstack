module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        maxWidth: {
          "6xl": "72rem", // already defaults in Tailwind, but override if needed
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // or your custom font
        },
      },
    },
    plugins: [],
  };
  