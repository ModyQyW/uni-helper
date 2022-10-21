/* eslint-disable no-useless-escape */
import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    clean: true,
    format: ['esm', 'cjs'],
    dts: true,
    minify: true,
    shims: true,
    splitting: false,
    target: 'esnext',
    footer: ({ format }) => {
      if (format === 'cjs') {
        return {
          js: `if (module.exports.default) module.exports = module.exports.default;`,
        };
      }
    },
  },
]);
/* eslint-enable no-useless-escape */
