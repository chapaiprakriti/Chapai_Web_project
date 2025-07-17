export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        light: '#FFFFFF',
        accent: {
          DEFAULT: '#F97316',
          hover: '#EA580C',
        },
        gray: {
          dark: '#1F2937',
          medium: '#374151',
        },
        blue: {
          soft: '#60A5FA',
          deep: '#1D4ED8',
        },
      },
    },
  },
  plugins: [],
}
