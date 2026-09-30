// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rubenterre.me',
  integrations: [sitemap()],
  adapter: netlify({
    devFeatures: {
      edgeFunctions: false,
    },
  }),
});
