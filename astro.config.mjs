import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import addClasses from "rehype-add-classes";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap(), tailwind(), react()],
  markdown: {
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "text-4xl font-bold",
          h2: "text-2xl font-bold pb-4",
          h3: "text-xl font-bold",
          h4: "text-lg font-bold",
          h5: "font-bold",
          h6: "font-bold",
          img: "border border-slate-300 dark:border-zinc-700 rounded-xl mb-6",
          p: "mb-6",
          a: "underline underline-offset-2 hover:text-orange-500 decoration-orange-500",
          ul: "list-disc",
        },
      ],
    ],
  },
});
