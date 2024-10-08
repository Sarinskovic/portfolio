// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	site: 'https://sarinskovic.github.io',
	// base: '/portfolio/',
	redirects: {
		'/portfolio': {
			status: 302,
			destination: '/'
		}
	},

	integrations: [sitemap(), tailwind(), alpinejs(), icon()]
})
