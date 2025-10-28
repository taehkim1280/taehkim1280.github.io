import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://example.github.io/', // set this later for sitemap, etc.
  scopedStyleStrategy: 'where',
});
