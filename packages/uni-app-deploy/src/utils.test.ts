import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, expect } from 'vitest';
import { getCwd, getFileDir, getFileField, getFilePath } from './utils';

const __dirname = dirname(fileURLToPath(import.meta.url));

describe('utils', () => {
  it('getCwd', () => {
    expect(getCwd({})).toBe(process.cwd());
    expect(getCwd({ cwd: '..' })).toBe('..');
  });

  it('getFileField', () => {
    expect(
      getFileField({}, [
        { entry: [__dirname, 'fixtures', 'manifest.json'], prop: ['mp-weixin', 'appid'] },
        { entry: [__dirname, '**', 'fixtures', 'manifest.json'], prop: ['mp-weixin', 'appid'] },
      ]),
    ).toBe('touristappid');
    expect(getFileField({}, [{ entry: ['not-exist.file'], prop: ['not', 'exist', 'prop'] }])).toBe(
      '',
    );
  });

  it('getFilePath', () => {
    expect(
      getFilePath({}, [
        { entry: [__dirname, 'fixtures', 'manifest.json'] },
        { entry: [__dirname, '**', 'fixtures', 'manifest.json'] },
      ]),
    ).toBe(resolve(__dirname, 'fixtures', 'manifest.json'));
    expect(getFilePath({}, [{ entry: ['not-exist.file'] }])).toBe('');
  });

  it('getFileDir', () => {
    expect(
      getFileDir({}, [
        { entry: [__dirname, 'fixtures', 'manifest.json'] },
        { entry: [__dirname, '**', 'fixtures', 'manifest.json'] },
      ]),
    ).toBe(resolve(__dirname, 'fixtures'));
    expect(getFileDir({}, [{ entry: ['not-exist.file'] }])).toBe('');
  });
});
