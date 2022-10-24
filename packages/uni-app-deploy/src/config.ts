import {
  loadConfig as unconfigLoadConfig,
  type LoadConfigOptions as UnconfigLoadConfigOptions,
} from 'unconfig';
import { sourcePackageJsonFields } from 'unconfig/presets';
import { MpWeixinConfig } from './platform';
import { WecomConfig, DingtalkConfig } from './im';

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

export async function loadConfig(options?: Partial<UnconfigLoadConfigOptions>) {
  return unconfigLoadConfig<UniAppDeployConfig>({
    sources: [
      {
        files: 'uni-app-deploy.config',
      },
      sourcePackageJsonFields({
        fields: 'uni-app-deploy',
      }),
    ],
    ...options,
  });
}
