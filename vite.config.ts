import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';

import { glob } from 'glob';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    coverage: {
      exclude: ['lib/**/*.stories.tsx', '.storybook', 'lib/main.ts', '.eslintrc.cjs'],
    },
  },
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
        // https://rollupjs.org/configuration-options/#input
        glob.sync(['lib/**/*.{ts,tsx}', 'lib/theme/*.css'], { ignore: 'lib/**/*.stories.{ts,tsx}' }).map(file => [
          // 1. The name of the entry point
          // lib/nested/foo.js becomes nested/foo
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length),
          ),
          // 2. The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
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
