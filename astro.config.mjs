import { defineConfig } from 'astro/config';

// Le dépôt s'appelle « site » : GitHub Pages le sert sous /site.
export default defineConfig({
  site: 'https://light-app-suite.github.io',
  base: '/site',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
