/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        tronBlue: '#00f6ff',
        tronDark: '#0a0f1e',
        tronGlow: '#00e0ff',
        tronNight: '#03060f',
        tronMidnight: '#041021',
      },
      fontFamily: {
        tron: ['Orbitron', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif'],
      },
      backgroundImage: {
        'tron-grid': 'linear-gradient(transparent 95%, rgba(0,255,255,0.05) 95%), linear-gradient(90deg, transparent 95%, rgba(0,255,255,0.05) 95%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 1 },
        },
        ambient: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(10deg) scale(1.05)' },
          '100%': { transform: 'rotate(0deg) scale(1)' },
        },
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'glow-pulse': 'pulseGlow 6s ease-in-out infinite',
        'ambient-shift': 'ambient 30s linear infinite',
      },
    },
  },
  plugins: [],
}
