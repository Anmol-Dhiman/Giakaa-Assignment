/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{html,js,jsx,tsx}",

  ],
  theme: {
    colors: {
      black: "#101111",
      white: "#FFF",
      textHover: "#646464",
    },
    fontFamily: {
      'fixel-regular': ['Fixel-Regular', 'sans-serif'],
      'fixel-medium': ['Fixel-Medium', 'sans-serif'],
      'fixel-bold': ['Fixel-Bold', 'sans-serif']
    },
    fontWeight: {
      bold: 700,
      medium: 500,
      paragraph: 400
    }
  },
  plugins: [],
}
