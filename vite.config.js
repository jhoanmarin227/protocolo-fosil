import { defineConfig } from 'vite';

export default defineConfig({
  // Relative paths so the build also works inside a GitHub Pages subfolder.
  base: './',
  build: {
    // Phaser alone is about 1.4 MB, so the default 500 kB warning is expected.
    chunkSizeWarningLimit: 1600,
  },
});
