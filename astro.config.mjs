// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.synapselib.com',
	markdown: {
		syntaxHighlight: {
			type: 'shiki',
			excludeLangs: ['mermaid'],
		},
		rehypePlugins: [
			[rehypeMermaid, { strategy: 'img-svg', dark: true }],
		],
	},
	integrations: [
		starlight({
			title: 'Synapse',
			description:
				'Architecture framework for Kotlin/Compose that eliminates the coordination problem.',
			customCss: ['./src/styles/custom.css'],
			logo: {
				src: './src/assets/logo.svg',
			},
			favicon: '/favicon.svg',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/coreywaldon/synapse',
				},
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
						{ label: 'Versions', slug: 'getting-started/versions' },
					],
				},
				{
					label: 'Arch',
					items: [
						{ label: 'Three Channels', slug: 'arch/channels' },
						{ label: 'Compose DSL', slug: 'arch/compose-dsl' },
						{ label: 'Coordinators', slug: 'arch/coordinators' },
						{ label: 'Providers', slug: 'arch/providers' },
						{ label: 'Interceptors', slug: 'arch/interceptors' },
						{ label: 'Organizing Impulses & State', slug: 'arch/organizing' },
						{ label: 'SwitchBoard', slug: 'arch/switchboard' },
						{ label: 'Hilt Integration', slug: 'arch/hilt' },
						{ label: 'Observability', slug: 'arch/observability' },
						{ label: 'Testing', slug: 'arch/testing' },
						{ label: 'How Synapse Compares', slug: 'arch/comparisons' },
						{ label: 'Troubleshooting', slug: 'arch/troubleshooting' },
					],
				},
				{
					label: 'Navigator',
					items: [
						{ label: 'Introduction', slug: 'navigator/introduction' },
						{ label: 'Gutter Navigation', slug: 'navigator/gutter-navigation' },
						{ label: 'Tool Window', slug: 'navigator/tool-window' },
						{ label: 'Editor Assistance', slug: 'navigator/editor-assistance' },
						{ label: 'Inspections', slug: 'navigator/inspections' },
					],
				},
			],
		}),
	],
});
