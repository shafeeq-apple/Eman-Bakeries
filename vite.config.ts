import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base is '/' for custom domain (emanbakeries.com)
  // Only use '/eman-bakeries/' if deploying without custom domain
  base: '/', 
  build: {
    outDir: 'dist',
  },
  // Ensure CNAME file is copied to dist
  publicDir: 'public',
});