import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://sjoerdlmkns.github.io',
  base: '/portfolio-sjoerdlmkns',
  integrations: [tailwind()]
});