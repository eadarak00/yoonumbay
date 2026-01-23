/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        // Fond principal très clair avec une touche de crème
        background: '#fcfbf8',
        foreground: '#2c3e2c',
        
        // Bordures et inputs
        border: '#e2ddd3',
        input: '#edeae3',
        ring: '#3c9c3a',
        
        // Vert agricole principal
        primary: {
          DEFAULT: '#3c9c3a',
          foreground: '#ffffff',
          50: '#f7faf5',
          100: '#e8f3e6',
          200: '#cde5cc',
          300: '#a1d1a0',
          400: '#6bb469',
          500: '#3c9c3a',
          600: '#318030',
          700: '#296728',
          800: '#235222',
          900: '#1e441d',
        },
        
        // Terre cuite secondaire
        secondary: {
          DEFAULT: '#d8853d',
          foreground: '#ffffff',
          50: '#fdf8f2',
          100: '#faefe2',
          200: '#f4dcc1',
          300: '#ecc293',
          400: '#e29e5d',
          500: '#d8853d',
          600: '#c96d2a',
          700: '#a75825',
          800: '#864724',
          900: '#6d3c21',
        },
        
        // Bleu ciel pour les accents
        accent: {
          DEFAULT: '#0c87ff',
          foreground: '#ffffff',
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9deff',
          300: '#7cc4ff',
          400: '#36a5ff',
          500: '#0c87ff',
          600: '#0069e6',
          700: '#0053c9',
          800: '#0045a3',
          900: '#003b81',
        },
        
        // Couleurs neutres terreuses
        muted: {
          DEFAULT: '#f4f2ee',
          foreground: '#6b6354',
          50: '#faf9f7',
          100: '#f4f2ee',
          200: '#e8e4dc',
          300: '#d8d1c3',
          400: '#c3b9a4',
          500: '#aea185',
          600: '#998a6e',
          700: '#7f7159',
          800: '#685c49',
          900: '#544b3c',
        },
        
        // États
        success: {
          DEFAULT: '#16a34a',
          foreground: '#ffffff',
        },
        warning: {
          DEFAULT: '#d97706',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#dc2626',
          foreground: '#ffffff',
        },
        
        // Cartes
        card: {
          DEFAULT: '#ffffff',
          foreground: '#2c3e2c',
        },
      },
      
      // Gradients naturels
      backgroundImage: {
        'gradient-nature': 'linear-gradient(135deg, #e8f3e6 0%, #faefe2 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #f7faf5 0%, #fdf8f2 100%)',
        'gradient-primary': 'linear-gradient(135deg, #3c9c3a 0%, #2f7d2d 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(252, 251, 248, 0.95) 100%)',
      },
      
      // Animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      
      // Ombre douces
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(44, 62, 44, 0.06)',
        'card': '0 8px 30px rgba(44, 62, 44, 0.08)',
        'hover': '0 12px 40px rgba(44, 62, 44, 0.12)',
        'inner-soft': 'inset 0 2px 8px rgba(0, 0, 0, 0.03)',
      },
      
      // Bordures arrondies
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}