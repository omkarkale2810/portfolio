/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        bg: {
          base: '#07090d',
          surface: '#0c1015',
          elevated: '#11161d',
        },
        ink: {
          primary: '#e6edf3',
          muted: '#9aa4b2',
          dim: '#6b7280',
        },
        accent: {
          DEFAULT: '#7c5cff',
          glow: '#7c5cff',
          cyan: '#22d3ee',
          emerald: '#34d399',
        },
        line: 'rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at 50% 0%, rgba(124,92,255,0.18), transparent 60%)',
        'aurora':
          'radial-gradient(circle at 10% 10%, rgba(124,92,255,0.18), transparent 50%), radial-gradient(circle at 90% 20%, rgba(34,211,238,0.12), transparent 55%), radial-gradient(circle at 50% 100%, rgba(52,211,153,0.10), transparent 55%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(124,92,255,0.45)',
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.45)',
      },
      keyframes: {
        'pulse-soft': {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
        'shimmer': 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
}
