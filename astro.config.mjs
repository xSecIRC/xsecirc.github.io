import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  output: 'static',
   vite: {
    plugins: [tailwindcss()],
  },
  // add yur domain name here
  site: 'https://xSecIRC.github.io',
  base: '/',
  compressHTML: true,
  integrations: [sitemap()]
});