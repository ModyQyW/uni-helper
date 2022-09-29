import { describe, it, expect } from 'vitest';
import { defineConfig, defaultCwd, defaultIgnore, defaultIgnoreFiles } from './config';

describe('config', () => {
  it('defineConfig', () => {
    expect(
      defineConfig({
        platform: {
          'mp-weixin': {
            project: {
              appid: 'touristappid',
            },
          },
        },
      }),
    ).toStrictEqual({
      cwd: defaultCwd,
      ignore: defaultIgnore,
      ignoreFiles: defaultIgnoreFiles,
      platform: {
        'mp-weixin': {
          project: {
            appid: 'touristappid',
          },
        },
      },
    });
    expect(
      defineConfig({
        cwd: '.',
        ignore: ['node_modules', 'dist', 'hbuilder', 'hbuilderx'],
        ignoreFiles: ['.gitignore'],
        platform: {
          'mp-weixin': {
            project: {
              appid: 'touristappid',
            },
          },
        },
      }),
    ).toStrictEqual({
      cwd: '.',
      ignore: ['node_modules', 'dist', 'hbuilder', 'hbuilderx'],
      ignoreFiles: ['.gitignore'],
      platform: {
        'mp-weixin': {
          project: {
            appid: 'touristappid',
          },
        },
      },
    });
  });
});
