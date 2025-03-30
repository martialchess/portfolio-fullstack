/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        maxWidth: {
          "6xl": "72rem", // optional override
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // use with className="font-sans"
        },
        colors: {
          primary: "#4F46E5",      // Indigo-blue
          secondary: "#EC4899",    // Pink
          heading: "#1F2937",      // Dark gray
          text: "#4B5563",         // Muted text
          background: "#f9fafb",   // Light background
        },
        backdropBlur: {
          sm: '4px',
          md: '14px',
          lg: '20px',
        },
        boxShadow: {
          glass: "0 8px 32px rgba(31, 38, 135, 0.15)",
        },
        borderRadius: {
          glass: "24px",
        },
        spacing: {
          'hero-x': '2.5rem',
          'hero-y': '3.5rem',
        },
      },
    },
    plugins: [],
  };
  