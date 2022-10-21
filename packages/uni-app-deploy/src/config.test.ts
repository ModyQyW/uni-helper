import { describe, it, expect } from 'vitest';
import { defineConfig, mergeConfig, loadConfig } from './config';

describe('config', () => {
  const config1 = {
    platform: {
      'mp-weixin': {
        project: {
          appid: 'touristappid',
        },
      },
    },
  };
  const config2 = {
    cwd: '.',
    platform: {
      'mp-weixin': {
        project: {
          appid: 'touristappid',
        },
      },
    },
  };

  it('defineConfig', () => {
    const defined1 = defineConfig(config1);
    const defined2 = defineConfig(config2);
    expect(defined1).toStrictEqual(config1);
    expect(defined2).toStrictEqual(config2);
  });

  it('mergeConfig', () => {
    const merged1 = mergeConfig(config1);
    const merged2 = mergeConfig(config2);
    expect(merged1).toStrictEqual({ ...config1, cwd: process.cwd() });
    expect(merged2).toStrictEqual(config2);
  });

  it('loadConfig', async () => {
    // FIXME: stuck
    const loaded1 = await loadConfig({
      cwd: 'src/fixtures',
    });
    const loaded2 = await loadConfig({
      cwd: 'src/fixtures',
      merge: true,
    });
    expect(loaded1.config).toStrictEqual({
      from: 'uni-app-deploy.config.ts',
      hello: { unconfig: 'uni-app-deploy.config.ts' },
    });
    expect(loaded2.config).toStrictEqual({
      from: 'uni-app-deploy.config.ts',
      hello: { unconfig: 'uni-app-deploy.config.ts' },
    });
  });
});
