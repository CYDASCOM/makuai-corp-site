/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./makuai-corp-site/layouts/**/*.html", "./makuai-corp-site/content/**/*.{html,md}", "./public/**/*.{html,md}"],
  theme: {
    extend: {
      colors: {
        makuai: {
          black: '#333333',
          cyan: '#45D1D1',
          red: '#ED5D5D',
          yellow: {
            light: '#F3CC65',
            DEFAULT: '#F8BF2D',
          },
          gray: {
            light: '#F9F9F9',
            DEFAULT: '#F4F4F4',
          },
        }
      },
      fontFamily: {
        'MPlus1Code': ["'M PLUS 1 Code'", 'sans-serif'],
        'Noto': ['Noto Sans JP', 'sans-serif'],
      }
    },
    screens: {
      'md': '1040px',
      'lg': '1440px'
    },
  },
  plugins: [],
}
