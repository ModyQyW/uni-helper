import JoyCon, { Options as JoyConOptions } from 'joycon';
import { bundleRequire } from 'bundle-require';
import stripJsonComments from 'strip-json-comments';
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

export async function loadConfig(options?: Partial<JoyConOptions>): Promise<{
  path?: string;
  data?: UniAppDeployConfig;
}> {
  const joycon = new JoyCon();
  const configPath = await joycon.resolve({
    files: [
      'uni-app-deploy.config.ts',
      'uni-app-deploy.config.cts',
      'uni-app-deploy.config.mts',
      'uni-app-deploy.config.js',
      'uni-app-deploy.config.cjs',
      'uni-app-deploy.config.mjs',
      'uni-app-deploy.config.json',
      'package.json',
    ],
    packageKey: 'uni-app-deploy',
    parseJSON: (json) => stripJsonComments(json),
    ...options,
  });

  if (!configPath) return {};

  if (configPath.endsWith('.json')) {
    let data = await loadJson(configPath);
    if (configPath.endsWith('package.json')) {
      data = data?.['uni-app-deploy'];
    }
    return data ? { path: configPath, data } : {};
  }

  const config = await bundleRequire({
    filepath: configPath,
  });
  return {
    path: configPath,
    data: config.mod['uni-app-deploy'] || config.mod.default || config.mod,
  };
}
