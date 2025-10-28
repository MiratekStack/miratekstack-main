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
        'bg-primary': '#f8f7f5',
        'bg-secondary': '#FFFFFF',
        'card-darker-light': '#F3F4F6',
        'card-darker-light-hover': '#E5E7EB',

        "card-dark": "#FFFFFF",
        "card-light": "#FFFFFF",

        "bg-primary-light": "#f8f7f5",
        "bg-primary-dark": "#f8f7f5",

        // Orange theme (same palette, works great on light)
        'orange-primary': '#FF7730',
        'orange-secondary': '#FA7E31',
        'orange-glow': '#FF8F4D',

        // Text colors

        'text-primary': '#000000',
        'text-secondary': '#523419',
        'text-muted': '#6B7280',

        "text-primary-dark": "#000000",
        "text-secondary-dark": "#523419",

        "border-light": "#E5E7EB",
        "border-dark": "#E5E7EB",

        // Utility colors
        'divider': '#E5E7EB',             // light gray divider
        'success': '#16A34A',             // vibrant green
        'danger': '#DC2626',              // strong red
        'danger-alt': '#FF3D00',          // alternate bright red

        // Glass effect colors (for light mode transparency)
        'glass-bg': 'rgba(255, 255, 255, 0.6)',
        'glass-border': 'rgba(255, 126, 57, 0.3)',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FFFFFF 0%, #F3F4F6 100%)',
        'gradient-card': 'linear-gradient(135deg, #FFFFFF 0%, #E5E7EB 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF7E39 0%, #B84F27 100%)',
        'gradient-orange-glow': 'linear-gradient(135deg, #FFA56B 0%, #FF7E39 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(243, 244, 246, 0.8) 100%)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'orange-glow': '0 0 20px rgba(255, 126, 57, 0.3)',
        'orange-glow-lg': '0 0 40px rgba(255, 126, 57, 0.4)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.15)',
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
          '0%': { boxShadow: '0 0 20px rgba(255, 126, 57, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 126, 57, 0.5)' },
        },
      },
    }

  },
  plugins: [],
}