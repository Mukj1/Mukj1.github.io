import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 重要：如果您部署到 https://username.github.io/ (根域名)，保持为 '/'
  // Important: If deploying to https://username.github.io/, keep it as '/'
  // 如果您部署到 https://username.github.io/my-repo/ (子目录)，请改为 '/my-repo/'
  base: '/',
});