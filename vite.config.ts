import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  // importa dinamicamente o plugin ESM para não quebrar no require do esbuild
  const tsconfigPaths = (await import('vite-tsconfig-paths')).default;

  return {
    plugins: [react(), checker({ typescript: true }), tsconfigPaths()],
  };
});
