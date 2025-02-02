/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: 'var(--main-color)',
        secondary: 'var(--secondary-color)',
        additional: 'var(--additional-color)',
      },
    },
  },
  plugins: [],
};
