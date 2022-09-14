import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const src = resolve(__dirname, 'src');
const test = resolve(__dirname, 'test');
const snapshots = resolve(__dirname, 'snapshots');

export default {
  plugins: [vue()],
  resolve: {
    alias: { '@': src, '@test': test },
  },
  build: {
    lib: {
      entry: `${src}/index.ts`,
      name: 'LktDateTools',
      fileName: (format) => `lkt-date-tools.${format}.js`,
    },
    minify: true,
    rollupOptions: {
      external: ['vue', 'lkt-ts-interfaces', 'lkt-string-tools'],
      output: {
        globals: {
          vue: 'Vue',
        },
        sourcemapExcludeSources: true,
      },
    },
  },
  test: {
    coverage: {
      reporter: ['text', 'lcov'],
    },
    resolveSnapshotPath: (testPath, snapExtension) => {
      const path = testPath.split('/').splice(-2);
      return `${snapshots}/${path[0]}/${path[1]}${snapExtension}`;
    },
  },
};
