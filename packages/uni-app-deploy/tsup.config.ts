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
    banner: {
      js: `import {createRequire as __createRequire} from 'module';var require=createRequire(import\.meta.url);`,
    },
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
]);
/* eslint-enable no-useless-escape */
