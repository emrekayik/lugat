/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#db7093',
          secondary: '#ffefd5',
          accent: '#aecc4b',
          neutral: '#1d1825',
          'base-100': '#ffefd5',
          info: '#97a7f7',
          success: '#1ca676',
          warning: '#eb881e',
          error: '#f82068',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
