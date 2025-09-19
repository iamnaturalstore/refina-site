// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://refina.app',
  integrations: [
    react(),
    sitemap(),
    starlight({
      title: 'Refina Docs',
      description: 'Set up, customize, and get the best results from Refina.',
      favicon: '/favicon.svg',
      sidebar: [{ label: 'Overview', autogenerate: { directory: 'docs' } }],
      pagefind: true,
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  adapter: netlify(),
});
