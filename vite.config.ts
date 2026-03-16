import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'write-nojekyll',
      closeBundle() {
        writeFileSync(resolve(__dirname, 'docs', '.nojekyll'), '');
      },
    },
  ],
  build: {
    outDir: 'docs',
  },
  base: '/',
});
