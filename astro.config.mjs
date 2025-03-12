import { defineConfig } from "astro/config"

export default defineConfig({
  site: 'https://aaronFerrer-VLC.github.io',
  base: '/aaronFerrer-VLC.github.io/',
  output: "static", // Change to "static" for GitHub Pages
})

// If you don't have vercel the configuration will be empty

// ej : export default defineConfig({});
x