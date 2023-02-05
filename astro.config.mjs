import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://sjoerdlmkns.com',
  integrations: [tailwind()]
});