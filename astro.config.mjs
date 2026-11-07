// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeTypo from './plugins/rehype-typo.mjs';

// Adresse définitive du site : à renseigner dans Netlify (variable SITE_URL) le jour du lancement.
const SITE = process.env.SITE_URL || 'https://site-agence-bbc.netlify.app';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  markdown: { rehypePlugins: [rehypeTypo] },
  integrations: [sitemap({ filter: (page) => !page.includes('/merci/') })],
});
