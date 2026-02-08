import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cardenio: ['CardenioModern', 'sans-serif'],
      },
    },
  },
  plugins: [],
}