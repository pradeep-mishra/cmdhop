import { defineConfig } from 'vite';
//import reactRefresh from '@vitejs/plugin-react-refresh';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  assetsDir: '',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: `[name][extname]`
      }
    }
  }
});
