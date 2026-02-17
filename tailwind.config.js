/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617', // Added for deeper dark mode background
        },
        violet: {
          50: '#F5F5FF',
          100: '#EBEBFF',
          200: '#DCDDFF',
          300: '#C9C8FF', 
          400: '#9E9CFF',
          500: '#7572FF',
          600: '#5B58E6',
          700: '#4644B3',
          800: '#323080',
          900: '#1E1C4D',
        }
      },
      animation: {
        'slide-in': 'slideIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}