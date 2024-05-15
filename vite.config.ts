import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

import { glob } from 'glob';

import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['lib'] }),
  ],
  build: {
    cssCodeSplit: true,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob.sync(
          'lib/**/*.{ts,tsx,css}',
          { ignore: ['lib/**/*.stories.{ts,tsx}', 'lib/**/*.spec.{ts,tsx}'] },
        ).map(file => [
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length),
          ),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        entryFileNames: '[name].js',
        dir: 'dist',
      },
    },
  },
});
