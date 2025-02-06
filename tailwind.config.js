/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        // Existing animations
        'gradient-extreme': 'gradient 15s ease infinite',
        'gradient-reverse': 'gradient 15s ease-in-out infinite reverse',
        'gradient-move': 'gradientMove 3s linear infinite',
        'extreme-float': 'float 20s ease-in-out infinite',
        'particle': 'particle 10s linear infinite',
        'letter-rotate': 'letterRotate 0.5s ease-out forwards',
        'color-cycle': 'colorCycle 5s ease-in-out infinite',
        'orb-float': 'orbFloat 10s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'bounce-subtle': 'bounce 5s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        
        // New animations
        'float': 'float 10s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      
      keyframes: {
        // Existing keyframes if any
        
        // New keyframes
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(20px, 20px) rotate(180deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
        }
      },
      
      backgroundSize: {
        '400%': '400% 400%',
      },
    },
  },
  
  plugins: [],
};
