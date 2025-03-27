/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      animation: {
        'wave-text': 'waveText 2.5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'bounce-mini': 'bounceMini 0.8s ease-in-out',
      },
      keyframes: {
        waveText: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.5rem)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0)' },
          '33%': { transform: 'translate(10px, -10px) rotate(5deg)' },
          '66%': { transform: 'translate(-5px, 5px) rotate(-5deg)' },
        },
        bounceMini: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      }
    },
  },
  plugins: [],
} 