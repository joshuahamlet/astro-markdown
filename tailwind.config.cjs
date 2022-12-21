/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '124, 58, 237',
        accentGradient:
          'linear-gradient(45deg, rgb(var(--accent)), #da62c4 30%, white 60%)',
        dracBackground: '#282a36',
        dracCurrentLine: '#44475a',
        dracForeground: '#f8f8f2',
        dracComment: '#6272a4',
        dracCyan: '#8be9fd',
        dracGreen: '#50fa7b',
        dracOrange: '#ffb86c',
        dracPink: '#ff79c6',
        dracPurple: '#bd93f9',
        dracRed: '#ff5555',
        dracYellow: '#f1fa8c',
      },
      backgroundImage: {
        'gradient-accent':
          'linear-gradient(45deg, rgb(var(--accent)), #da62c4 30%, white 60%)',
      },
      backgroundSize: {
        "400%": "400%"
      }
    },
  },
  plugins: [],
}
