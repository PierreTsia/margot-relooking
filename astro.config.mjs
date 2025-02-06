import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://margotrelooking.com', // Replace with your site URL
  integrations: [
    react(), // Enable React for all .jsx/.tsx files
    mdx(),
    tailwind(),
    sitemap(),
  ],
});
