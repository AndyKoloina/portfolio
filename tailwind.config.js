/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.vue",
    "./app/**/*.js",
    "./app/**/*.ts"
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#64FFDA',
          light: '#9EFFED',
        },
        navy: {
          800: '#0d1b2a',
          900: '#0a1628',
          950: '#060e1a',
        },
        slate: {
          300: '#a8b2d8',
          400: '#8892b0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'blob': 'blob 10s infinite',
        'underline-grow': 'underlineGrow 0.3s ease forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      }
    },
  },
  plugins: [],
}