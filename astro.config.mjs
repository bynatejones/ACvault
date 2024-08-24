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
                baseUrl: 'https://github.com/bynatejones/ACvault/edit/acvault',
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
					label: 'Follow Focus',
					autogenerate: { directory: 'follow-focus' },
				},
			],
		}),
	],
});
