import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '960px',
      lg: '1024px',
      mlg: '1350px',
      xl: '1440px',
    },
    extend: {
      colors: {
        bgcolor: '#2f4f4f',
        primarytext: '#b1835a',
        mainnavbg: '#f0f0f5',
      },
      keyframes: {
        scrolling: {
          '0%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        scrolling: 'scrolling 8s linear infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
