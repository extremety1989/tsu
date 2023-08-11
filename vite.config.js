import vitePluginString from "vite-plugin-string"
import { defineConfig } from 'vite'

export default defineConfig({
    base: "/crepe-maker/",
    plugins: [vitePluginString()],
  })
  