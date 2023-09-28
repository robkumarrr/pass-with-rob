import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PASS With Rob',
			// social: {
			// 	github: 'https://github.com/robkumarrr'
			// },
			sidebar: [
				{
					label: 'Information',
					autogenerate: { directory: 'information'},
				},
				{
					label: 'PASS Session Work',
					autogenerate: { directory: 'session_code'},
				},
			],
			logo: {
				light: './public/favicon-light.svg',
				dark: './public/favicon_dark.svg'
			},
			customCss: [
				'./src/styles/custom.css'
			]
		}),
	],
});
