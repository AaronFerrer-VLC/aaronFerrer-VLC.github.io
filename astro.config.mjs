import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: 'https://AaronFerrer-VLC.github.io',
  base: '/AaronFerrer-VLC.github.io/',
  output: "server", // Asegúrate de que esté configurado como "server"
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});

//If you don't have vercel the configuration will be empty

//ej : export default defineConfig({});
