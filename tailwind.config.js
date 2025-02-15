/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          backgroundSize: {
            '200%': '200%',
          },
          backgroundPosition: {
            'left-bottom': 'left bottom',
            'left-top': 'left top',
          },
        },
      },
      plugins: [],
    }
