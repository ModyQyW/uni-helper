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
        { entry: ['src', 'manifest.json'], prop: ['mp-weixin', 'appid'] },
        { entry: ['**', 'manifest.json'], prop: ['mp-weixin', 'appid'] },
      ]),
    ).toBe('touristappid');
    expect(() =>
      getFileField({}, [{ entry: ['not-exist.file'], prop: ['not', 'exist', 'prop'] }]),
    ).toThrowError('Can not get files.');
  });

  it('getFilePath', () => {
    expect(
      getFilePath({}, [{ entry: ['src', 'manifest.json'] }, { entry: ['**', 'manifest.json'] }]),
    ).toBe(path.resolve('src', 'manifest.json'));
    expect(() => getFilePath({}, [{ entry: ['not-exist.file'] }])).toThrowError(
      'Can not get files.',
    );
  });

  it('getFileDir', () => {
    expect(
      getFileDir({}, [{ entry: ['src', 'manifest.json'] }, { entry: ['**', 'manifest.json'] }]),
    ).toBe(path.resolve('src'));
    expect(() => getFileDir({}, [{ entry: ['not-exist.file'] }])).toThrowError(
      'Can not get files.',
    );
  });
});
