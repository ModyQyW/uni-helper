import { merge } from 'lodash-es';
import { loadConfig as unLoadConfig } from 'unconfig';
import { MpWeixinConfig } from './platform';
import { WecomConfig } from './im';

export interface UniAppDeployConfig {
  cwd?: string;
  platform?: {
    'mp-weixin'?: MpWeixinConfig;
  };
  im?: {
    wecom?: WecomConfig;
  };
}

export const defaultConfig: UniAppDeployConfig = {
  cwd: process.cwd(),
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
