/* eslint-disable no-useless-escape */
import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: 'esm',
    dts: true,
    minify: true,
    shims: true,
    splitting: false,
    target: 'node12.2',
    define: {
      'process.env.UNI_PLATFORM': 'process.env.UNI_PLATFORM',
    },
  },
  {
    entry: ['src/index.ts'],
    format: 'cjs',
    minify: true,
    shims: true,
    splitting: false,
    target: 'node12.2',
    define: {
      'process.env.UNI_PLATFORM': 'process.env.UNI_PLATFORM',
    },
    footer: {
      js: `if (module.exports.default) module.exports = module.exports.default;`,
    },
  },
]);
/* eslint-enable no-useless-escape */
