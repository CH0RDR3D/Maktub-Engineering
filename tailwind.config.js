/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'site': '1400px',
      },
      colors: {
        editorial: {
          black: '#0e1411',
          dark: '#141c18',
          forest: '#1b2a22',
          pine: '#263b31',
          sage: '#466455',
          moss: '#5c806e',
          leaf: '#7ba08d',
          sand: '#f5f4ef',
          bone: '#ebe8df',
          stone: '#ded9cd',
          cream: '#faf9f5',
          bronze: '#b89d78',
          border: 'rgba(20, 28, 24, 0.12)',
          borderDark: 'rgba(255, 255, 255, 0.14)',
        },
      },
      fontFamily: {
        sans: ['var(--font-main)', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['var(--font-heading)', 'var(--font-main)', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-heading)', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      lineHeight: {
        'tight-none': '0.92',
        'tight-sm': '1.05',
      },
      aspectRatio: {
        'portrait': '3/4',
        'tall': '4/5',
        'ultra-tall': '9/16',
        'wide-cinematic': '21/9',
      },
      animation: {
        'fade-in': 'fadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
