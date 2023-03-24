import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  markdown: {
    extendDefaultPlugins: true,
    shikiConfig: {
      theme: 'dracula',
      langs: ['javascript', 'json', 'jsx'],
      wrap: true
    },
    syntaxHighlight: 'shiki'
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }),]
});
