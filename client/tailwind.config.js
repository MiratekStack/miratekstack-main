/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        'bg-primary': '#0f0f0f',
        'bg-secondary': '#1a1a1a',
        'bg-card': '#121212',
        'bg-card-hover': '#1c1c1c',
        
        // Orange theme
        'orange-primary': '#FF7E39',
        'orange-secondary': '#B84F27',
        'orange-glow': '#FFA56B',
        
        // Text colors
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B0B0',
        'text-muted': '#808080',
        
        // Utility colors
        'divider': '#2a2a2a',
        'success': '#4CAF50',
        'danger': '#FF5722',
        'danger-alt': '#FF3D00',
        
        // Glass effect colors
        'glass-bg': 'rgba(18, 18, 18, 0.8)',
        'glass-border': 'rgba(255, 126, 57, 0.2)',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
        'gradient-card': 'linear-gradient(135deg, #121212 0%, #1c1c1c 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF7E39 0%, #B84F27 100%)',
        'gradient-orange-glow': 'linear-gradient(135deg, #FFA56B 0%, #FF7E39 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(18, 18, 18, 0.8) 0%, rgba(28, 28, 28, 0.6) 100%)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'orange-glow': '0 0 20px rgba(255, 126, 57, 0.3)',
        'orange-glow-lg': '0 0 40px rgba(255, 126, 57, 0.4)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 126, 57, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 126, 57, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}