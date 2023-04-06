import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://salolivares.com',
  integrations: [sitemap(), tailwind(), image({ serviceEntryPoint: '@astrojs/image/sharp' })],
});
