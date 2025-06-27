/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#003087',
          600: '#002968',
          700: '#001f4d',
          800: '#001638',
          900: '#000d1f'
        },
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          500: '#F5F6F5',
          600: '#d1d5db',
          700: '#9ca3af'
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#0066FF',
          600: '#0052cc',
          700: '#003d99'
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'count-up': 'count-up 1s ease-out',
        'pulse-error': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-refresh': 'spin 1s linear infinite'
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'premium': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }
    },
  },
  plugins: [],
}