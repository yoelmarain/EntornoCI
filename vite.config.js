import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',         // tu código fuente está en /src
  build: {
    outDir: '../dist', // salida en /dist
    emptyOutDir: true
  }
});
