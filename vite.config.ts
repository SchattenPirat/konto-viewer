import { defineConfig, UserConfig, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import zipPack from 'vite-plugin-zip-pack';

const viteConfig = ({ mode }: UserConfig): UserConfigExport => {
  return defineConfig({
    plugins: [react(), zipPack()],
    define: {
      'process.env.NODE_ENV': `"${mode as string}"`
    }
  });
};

export default viteConfig;
