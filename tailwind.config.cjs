/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    backgroundImage: {
      'gradient-accent': 'linear-gradient(45deg, rgb(var(--accent)), #da62c4 30%, white 60%)'
    },
		extend: {},
	},
	plugins: [],
}
