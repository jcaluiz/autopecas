/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'truck': "url('/images/truck.jpg')"
      },
      colors: {
        'green-header-first': '#03484c',
        'green-header-second': '#0e3b3e',
        'white-body': '#f6f6f6',
        'blue-button': '#14b1f0',
        'white-product': '#fefefe',
        'orange-price': '#fc9f3c',
      },
      fontFamily: {
        'body': ['"Open Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
