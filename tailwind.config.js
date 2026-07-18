/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        graphite: '#121316',
        graphite2: '#1B1D21',
        soft: '#F5F5F7',
        muted: '#8A8D93',
        cyan: '#4DE8FF',
        line: 'rgba(245,245,247,0.08)',
        lineStrong: 'rgba(245,245,247,0.16)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
