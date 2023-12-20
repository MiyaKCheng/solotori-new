/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    backgroundColor: ['active'],
    colors: {
      'main-color': '#F0967d',
      'ac-color': '#D13200',
    },
    animation: {
      'spin-slow': 'spin 30s linear infinite',
    },
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },

  },

},
plugins: [
  require('tailwindcss-text-fill-stroke'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
],
}
