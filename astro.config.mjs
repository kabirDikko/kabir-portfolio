import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

const isDev = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  site: "https://kabirDikko.github.io",
  base: isDev ? "/" : "/kabir-portfolio",
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    cacheDir: ".astro/.vite",
  },
});
