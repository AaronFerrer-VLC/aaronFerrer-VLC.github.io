import { defineConfig } from "astro/config"

export default defineConfig({
  site: 'https://AaronFerrer-VLC.github.io',
  base: '/AaronFerrer-VLC.github.io/',
  output: "static", // Change to "static" for GitHub Pages
  image: {
    service: {
      entrypoint: "astro/assets/services/passthrough",
    },
  },
})

// If you don't have vercel the configuration will be empty

// ej : export default defineConfig({});