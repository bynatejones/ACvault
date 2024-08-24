import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AC Vault',
            logo: {
                light: './src/assets/homepage/acvault-logo-01-horizontal-02-light.png',
                dark: './src/assets/homepage/acvault-logo-01-horizontal-02.png',
                replacesTitle: true,
            },
            customCss: [
                // Relative path to your custom CSS file
                './src/styles/global.css',
            ],
			social: {
				github: 'https://github.com/bynatejones/ACvault',
                discord: 'https://discord.gg/zcE8GnJgpq',
			},
            editLink: {
                baseUrl: 'https://github.com/bynatejones/ACvault/edit/dev',
            },
			sidebar: [
                {
					label: 'Introduction',
					items: [
                        { label: 'What is the AC Vault?', slug: 'introduction/introduction' },
                        { label: 'Access the Vault Offline', slug: 'introduction/offline-use' },
                        { label: 'How to Contribute', slug: 'introduction/contribute' },
                    ]
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
                {
					label: 'Focus Iris Zoom [FIZ]',
                    items: [
						// Each item here is one entry in the navigation menu.
                        { label: 'What is FIZ?', slug: 'fiz/introduction' },
						{ label: 'Arri Hi-5', slug: 'fiz/arri-hi-5' },
                        { label: 'Tilta Nucleus-M', slug: 'fiz/tilta-nucleus-m' },
					],
				},
                {
					label: 'Downloadable Resources',
                    autogenerate: { directory: 'files' }
				},
                {
					label: 'ICG Local 600',
                    autogenerate: { directory: 'local-600' }
				},
			],
		}),
	],
});
