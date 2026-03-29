// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // Specify your site's URL here for RSS feed generation
  site: 'https://example.com',

  integrations: [preact()]
});