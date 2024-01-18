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
					label: 'Study Tools',
					autogenerate: { directory: 'study_tools'},
				},
				{
					label: 'PASS Sessions - Fall 2023',
					collapsed: true,
					autogenerate: { directory: 'session_code_2023'}
				},
				{
					label: 'PASS Sessions - Winter 2024',
					autogenerate: { directory: 'session_code_2024'},
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
