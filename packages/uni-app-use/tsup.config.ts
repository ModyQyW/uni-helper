/* eslint-disable no-useless-escape */
import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    clean: true,
    format: 'esm',
    dts: true,
    minify: true,
    shims: true,
    splitting: false,
    target: 'esnext',
    define: {
      'process.env.UNI_PLATFORM': 'process.env.UNI_PLATFORM',
      'import.meta.env.UNI_PLATFORM': 'import.meta.env.UNI_PLATFORM',
    },
  },
  {
    entry: ['./src/index.ts'],
    clean: true,
    format: 'cjs',
    minify: true,
    shims: true,
    splitting: false,
    target: 'esnext',
    define: {
      'process.env.UNI_PLATFORM': 'process.env.UNI_PLATFORM',
      'import.meta.env.UNI_PLATFORM': 'import.meta.env.UNI_PLATFORM',
    },
    footer: {
      js: `if (module.exports.default) module.exports = module.exports.default;`,
    },
  },
]);
/* eslint-enable no-useless-escape */
