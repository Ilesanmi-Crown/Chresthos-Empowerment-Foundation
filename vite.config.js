import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: { quality: 78 },
      jpeg: { quality: 78 },
      png: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
  server: {
    port: 3000,
    open: false
  },
  build: {
    emptyOutDir: true
  }
});