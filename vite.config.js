import vitePluginString from "vite-plugin-string"
import { defineConfig } from 'vite'

export default defineConfig({
    base: "/tsu/",
    plugins: [vitePluginString()],
  })
  