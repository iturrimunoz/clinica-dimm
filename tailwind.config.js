/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d7567',    // Color principal
        secondary: '#d8775d',  // Color secundario
        'gray-custom': '#7c7e7b', //Color alternativo
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        title: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        description: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        buttons: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        scaleIn: 'scaleIn 0.3s ease-out',
        title: 'title 1s ease-out forwards',
        description: 'description 1s ease-out 0.3s forwards',
        buttons: 'buttons 1s ease-out 0.6s forwards'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

