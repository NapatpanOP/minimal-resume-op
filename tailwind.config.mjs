/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'white-1' 	: '#FFFCF2',
				'gray-1' 		: '#403D39',
				'gray-2' 		: '#5F5B57',
				'gray-3' 		: '#A8A4A0',
				'gray-4' 		: '#DAD3CB',
			},
		},
	},
	plugins: [],
}
