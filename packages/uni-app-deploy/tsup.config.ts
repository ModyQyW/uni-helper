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
    target: 'node14.16',
  },
  {
    entry: ['./src/index.ts'],
    clean: true,
    format: 'cjs',
    minify: true,
    shims: true,
    splitting: false,
    target: 'node14.16',
    footer: {
      js: `if (module.exports.default) module.exports = module.exports.default;`,
    },
  },
  {
    entry: ['./src/cli.ts'],
    clean: true,
    format: 'esm',
    minify: true,
    shims: true,
    splitting: false,
    target: 'node14.16',
    banner: {
      js: `':' // ; cat "$0" | node --input-type=module - $@ ; exit $?`,
    },
  },
]);
/* eslint-enable no-useless-escape */
