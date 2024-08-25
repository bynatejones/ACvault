import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

//  https://astro.build/config
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
                instagram: 'https://instagram.com/ac_friends_community',
			},
            editLink: {
                baseUrl: 'https://github.com/bynatejones/ACvault/edit/dev',
            },
			sidebar: [
                {
					label: 'Vault Introduction',
					items: [
                        { label: 'Welcome to the AC Vault!', slug: '' },
                        { label: 'Access the Vault Offline', slug: 'v/offline-use' },
                        { label: 'How to Contribute', slug: 'v/contribute' },
                    ]
				},
                {
					label: 'Downloadable Resources',
                    items: [
                        {
                            label: 'Manuals',
                            items: [
                                { label: 'Digital Cameras', slug: 'files/manuals/digital-cameras' },
                                { label: 'Film Cameras', slug: 'files/manuals/film-cameras' },
                                { label: 'FIZ', slug: 'files/manuals/fiz' },
                                { label: 'Monitors', slug: 'files/manuals/monitors' },
                                { label: 'Support', slug: 'files/manuals/support' },
                                { label: 'Accessories', slug: 'files/manuals/accessories' },
                            ]
                        },
                        { label: 'Checklists', slug: 'files/checklists' },
                        { label: 'Templates', slug: 'files/templates' },
                    ]
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
					label: 'ICG Local 600',
                    autogenerate: { directory: 'local-600' }
				},
			],
		}),
	],
});
