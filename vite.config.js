import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcss from './postcss.config.js'

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [svelte()],
  css: {
    postcss
  }
})
