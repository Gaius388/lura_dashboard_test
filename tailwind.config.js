/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      axiforma: ["Axiforma", "system-ui"],
      anglecia: ["Anglecia Pro Display", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
      redhat: ["Red Hat Text", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        backDrop: "url('/backDrop.svg')",
      },
      screens: {
        "max-screen": "1440px",
      },
    },
  },
  plugins: [],
};
