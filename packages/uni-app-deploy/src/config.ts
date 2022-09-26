import { merge } from 'lodash-es';
import { loadConfig as unLoadConfig } from 'unconfig';
import { MpWeixinConfig } from './platforms';
import { WecomConfig } from './im';

export interface UniAppDeployConfig {
  cwd?: string;
  'mp-weixin'?: MpWeixinConfig;
  wecom?: WecomConfig;
}

export const defaultConfig: UniAppDeployConfig = {
  cwd: process.cwd(),

  'mp-weixin': {},

  wecom: {},
};

export function defineConfig(config: UniAppDeployConfig): UniAppDeployConfig {
  return merge({}, defaultConfig, config);
}

export async function loadConfig() {
  return unLoadConfig<UniAppDeployConfig>({
    sources: [
      {
        files: 'uni-app-deploy.config',
      },
      {
        files: 'package.json',
        extensions: [],
        rewrite(config) {
          // @ts-ignore
          return config?.['uni-app-deploy'];
        },
      },
    ],
  });
}
