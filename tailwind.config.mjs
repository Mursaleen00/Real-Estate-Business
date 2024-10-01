/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Grey Shades
				'Grey/10': "#1A1A1A",
				'Grey/08': "#141414",
				'Grey/15': "#262626",
				'Grey/20': "#333333",
				'Grey/30': "#4D4D4D",
				'Grey/40': "#666666",
				'Grey/50': "#808080",
				'Grey/60': "#999999",

				// White Shades
				'White/90': "#E4E4E7",
				'White/95': "#F1F1F3",
				'White/97': "#F7F7F8",
				'White/99': "#FCFCFD",

				// Purple Shades
				'Purple/60': "#703BF7",
				'Purple/65': "#8254F8",
				'Purple/70': "#946CF9",
				'Purple/80': "#A685FA",
				'Purple/90': "#DBCEFD",
				'Purple/95': "#EDE7FE",
				'Purple/97': "#F4F0FE",
				'Purple/99': "#FBFAFF",
			}
		},
	},
	plugins: [],
}
