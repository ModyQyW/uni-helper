import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, expect } from 'vitest';
import { defineConfig, mergeConfig, loadConfig } from './config';

const __dirname = dirname(fileURLToPath(import.meta.url));

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
    const loaded = await loadConfig({
      cwd: resolve(__dirname, 'fixtures'),
    });
    console.log('loaded', loaded.path);
    expect(loaded.path).toSatisfy(
      (v) => typeof v === 'string' && v.endsWith(join('fixtures', 'uni-app-deploy.config.ts')),
    );
    expect(loaded.data).toStrictEqual({
      from: 'uni-app-deploy.config.ts',
      hello: { config: 'uni-app-deploy.config.ts' },
    });
  });
});
