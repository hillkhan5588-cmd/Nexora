/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1d4ed8',
          light: '#EFF6FF',
        },
        accent: {
          DEFAULT: '#7C3AED',
          dark: '#6d28d9',
          light: '#F5F3FF',
        },
        brand: {
          dark: '#0F172A',
          success: '#10B981',
          warning: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        article: '720px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            lineHeight: '1.8',
          },
        },
      },
    },
  },
  plugins: [],
};
