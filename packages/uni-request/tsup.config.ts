import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'tsup';

const getTsFiles = (entry: string): string[] =>
  fs
    .readdirSync(entry)
    .flatMap((item) => {
      if (
        item.includes('.ts') &&
        !item.includes('.test.') &&
        !item.includes('.spec.') &&
        !item.includes('.d.') &&
        !item.includes('type')
      ) {
        return path.join(entry, item);
      }
      if (!item.includes('.') && !item.includes('type')) {
        return getTsFiles(path.join(entry, item));
      }
      return '';
    })
    .filter((item) => !!item) as string[];

export default defineConfig([
  {
    entry: getTsFiles('src'),
    format: ['esm', 'cjs'],
    dts: true,
    minify: true,
    shims: true,
    target: 'es5',
  },
]);
