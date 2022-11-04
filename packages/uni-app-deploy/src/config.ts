// import {
//   loadConfig as unconfigLoadConfig,
//   type LoadConfigOptions as UnconfigLoadConfigOptions,
// } from 'unconfig';
// import { sourcePackageJsonFields } from 'unconfig/presets';
import JoyCon, { Options as JoyConOptions } from 'joycon';
import { bundleRequire } from 'bundle-require';
import { MpWeixinConfig } from './platform';
import { WecomConfig, DingtalkConfig } from './im';
import { loadJson } from './utils';

export type { Options as PRetryOptions } from 'p-retry';
export type { Options as GotOptions } from 'got';

export interface UniAppDeployConfig {
  cwd?: string;
  platform?: {
    'mp-weixin'?: MpWeixinConfig;
  };
  im?: {
    wecom?: WecomConfig;
    dingtalk?: DingtalkConfig;
  };
  [key: string]: any;
}

export const defaultCwd = process.cwd();

export const defaultConfig: UniAppDeployConfig = {
  cwd: defaultCwd,
};

export function defineConfig(config: UniAppDeployConfig) {
  return config;
}

export function mergeConfig(config: UniAppDeployConfig) {
  return {
    ...defaultConfig,
    ...config,
  };
}

export async function loadConfig(options?: Partial<JoyConOptions>) {
  const joycon = new JoyCon();
  const configPath = await joycon.resolve({
    files: [
      'uni-app-deploy.config.ts',
      'uni-app-deploy.config.js',
      'uni-app-deploy.config.cjs',
      'uni-app-deploy.config.mjs',
      'uni-app-deploy.config.json',
      'package.json',
    ],
    packageKey: 'uni-app-deploy',
    ...options,
  });

  if (configPath) {
    if (configPath.endsWith('.json')) {
      let data = await loadJson(configPath);
      if (configPath.endsWith('package.json')) {
        data = data['uni-app-deploy'];
      }
      if (data) {
        return { path: configPath, data };
      }
      return {};
    }

    const config = await bundleRequire({
      filepath: configPath,
    });
    return {
      path: configPath,
      data: config.mod['uni-app-deploy'] || config.mod.default || config.mod,
    };
  }

  return {};
}

// export async function loadConfig(options?: Partial<UnconfigLoadConfigOptions>) {
// return unconfigLoadConfig<UniAppDeployConfig>({
//   sources: [
//     {
//       files: 'uni-app-deploy.config',
//     },
//     sourcePackageJsonFields({
//       fields: 'uni-app-deploy',
//     }),
//   ],
//   ...options,
// });
// }
