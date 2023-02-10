import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://sjoerdlmkns.com',
  integrations: [tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
});