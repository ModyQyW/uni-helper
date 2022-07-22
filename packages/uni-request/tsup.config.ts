/* eslint-disable no-useless-escape */
import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.js'],
    format: ['esm', 'cjs'],
    // minify: true,
    shims: true,
    target: 'es5',
  },
]);
/* eslint-enable no-useless-escape */
