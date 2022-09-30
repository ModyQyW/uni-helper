import { merge } from 'lodash-es';
import { loadConfig as unLoadConfig } from 'unconfig';
import { MpWeixinConfig } from './platform';
import { WecomConfig } from './im';

export { Options as PRetryOptions } from 'p-retry';
export { Options as GotOptions } from 'got';

export interface UniAppDeployConfig {
  cwd?: string;
  /**
   * used in globby
   * An array of glob patterns to exclude matches. This is an alternative way to use negative patterns.
   */
  ignore?: string[];
  /**
   * used in globby
   * Glob patterns to look for ignore files, which are then used to ignore globbed files.
   * This is a more generic form of the gitignore option, allowing you to find ignore files with a compatible syntax. For instance, this works with Babel's .babelignore, Prettier's .prettierignore, or ESLint's .eslintignore files.
   */
  ignoreFiles?: string[];
  platform?: {
    'mp-weixin'?: MpWeixinConfig;
  };
  im?: {
    wecom?: WecomConfig;
  };
}

export const defaultCwd = process.cwd();

export const defaultIgnore = ['**/node_modules', '**/dist', '**/.hbuilder', '**/.hbuilderx'];

export const defaultIgnoreFiles = ['**/.gitignore'];

export const defaultConfig: UniAppDeployConfig = {
  cwd: defaultCwd,
  ignore: defaultIgnore,
  ignoreFiles: defaultIgnoreFiles,
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
