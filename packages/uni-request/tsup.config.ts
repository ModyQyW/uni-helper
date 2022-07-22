/* eslint-disable no-useless-escape */
import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.js'],
    format: 'esm',
    minify: true,
    shims: true,
    target: 'es5',
    banner: {
      js: `import {createRequire} from 'module';var require=createRequire(import\.meta.url);`,
    },
  },
  {
    entry: ['src/index.js'],
    format: 'cjs',
    minify: true,
    shims: true,
    target: 'es5',
  },
]);
/* eslint-enable no-useless-escape */
