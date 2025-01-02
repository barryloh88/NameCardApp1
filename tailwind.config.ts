import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite/**/*.js' // Include Flowbite components
	],

	theme: {
		extend: {}
	},

	plugins: [
		typography,
		flowbitePlugin // Add Flowbite plugin
	]
} satisfies Config;
