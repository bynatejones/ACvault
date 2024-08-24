import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AC Vault',
			social: {
				github: 'https://github.com/bynatejones/ACvault',
			},
            editLink: {
                baseUrl: 'https://github.com/bynatejones/ACvault/edit/dev',
            },
			sidebar: [
                {
					label: 'Introduction',
					autogenerate: { directory: 'introduction' },
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
			],
		}),
	],
});
