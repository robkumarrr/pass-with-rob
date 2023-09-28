import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PASS With Rob',
			social: {
				github: 'https://github.com/robkumarrr',
			},
			sidebar: [
				{
					label: 'PASS Session Work',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Sept 25, 2023', link: '/session_code/09_25_2023/' },
						{ label: 'Sept 29, 2023', link: ''}
					],
				}
			],
			logo: {
				light: './public/favicon.svg',
				dark: './public/favicon_dark.svg'
				// dark: ''
			},
			customCss: [
				'./src/styles/custom.css'
			]
		}),
	],
});
