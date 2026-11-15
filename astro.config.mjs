import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://salolivares.com',
  prefetch: true,
  // Astro 7 defaults to 'jsx', which drops spaces between inline elements and text.
  compressHTML: true,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
  image: {
    domains: ['photos.salolivares.com'],
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
