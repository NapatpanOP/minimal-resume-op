/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'black-1' 	: '#1D1D1D',
				'white-1' 	: '#FFFCF2',
				'gray-1' 		: '#403D39',
				'gray-2' 		: '#5F5B57',
				'gray-3' 		: '#A8A4A0',
				'gray-4' 		: '#DAD3CB',
				'gray-5' 		: '#878482',
				'cream-1' 	: '#F1EAE0',
				'cream-2' 	: '#BAA587',
				'cream-3' 	: '#E8AC65',
				'cream-4' 	: '#FFCB69',
				'green-1' 	: '#466770',
				'green-2' 	: '#797D62',
				'green-3' 	: '#9B9B7A',
				'purple-1' 	: '#7C646E',
				'orange-1' 	: '#D08C60',
				'brown-1' 	: '#997B66',
			},
		},
	},
	plugins: [],
}
