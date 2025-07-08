/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Activer le mode sombre basé sur les classes
  theme: {
    extend: {
      colors: {
        // Couleurs pour le mode clair )
        'light-bg': '#f8fafc',
        'light-card': '#ffffff',
        'light-text': '#0f172a',
        'light-secondary': '#64748b',
        
        // Couleurs pour le mode sombre
        'dark-bg': '#0f172a',
        'dark-card': '#1e293b',
        'dark-text': '#f8fafc',
        'dark-secondary': '#94a3b8',
      },
      // Animations
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin 15s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};