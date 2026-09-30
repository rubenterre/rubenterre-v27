// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://rubenterre.me',
  adapter: netlify({
    devFeatures: {
      edgeFunctions: false,
    },
  }),
});
