import path from 'path';
import { describe, it, expect } from 'vitest';
import { getCwd, getFileDir, getFileField, getFilePath } from './utils';

describe('utils', () => {
  it('getCwd', () => {
    expect(getCwd({})).toBe(process.cwd());
    expect(getCwd({ cwd: '..' })).toBe('..');
  });

  it('getFileField', () => {
    expect(
      getFileField({}, [
        { entry: ['src', 'fixtures', 'manifest.json'], prop: ['mp-weixin', 'appid'] },
        { entry: ['**', 'fixtures', 'manifest.json'], prop: ['mp-weixin', 'appid'] },
      ]),
    ).toBe('touristappid');
    expect(getFileField({}, [{ entry: ['not-exist.file'], prop: ['not', 'exist', 'prop'] }])).toBe(
      '',
    );
  });

  it('getFilePath', () => {
    expect(
      getFilePath({}, [
        { entry: ['src', 'fixtures', 'manifest.json'] },
        { entry: ['**', 'fixtures', 'manifest.json'] },
      ]),
    ).toBe(path.resolve('src', 'fixtures', 'manifest.json'));
    expect(getFilePath({}, [{ entry: ['not-exist.file'] }])).toBe('');
  });

  it('getFileDir', () => {
    expect(
      getFileDir({}, [
        { entry: ['src', 'fixtures', 'manifest.json'] },
        { entry: ['**', 'fixtures', 'manifest.json'] },
      ]),
    ).toBe(path.resolve('src/fixtures'));
    expect(getFileDir({}, [{ entry: ['not-exist.file'] }])).toBe('');
  });
});
