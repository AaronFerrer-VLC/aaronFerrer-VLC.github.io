import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://aaronferrer-vlc.github.io",
  base: "AaronFerrer-VLC.github.io",
  output: "static",
    adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});


//If you don't have vercel the configuration will be empty

//ej : export default defineConfig({});
