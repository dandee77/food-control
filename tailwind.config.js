export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: "#FF4E50",
        primaryDark: "#E43D3F",
        secondary: "#FFBE0B",
        accent: "#3BCEAC",
        textDark: "#333333",
        textLight: "#767676",
        backgroundAlt: "#F9F9F9",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['"DM Serif Display"', 'serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}