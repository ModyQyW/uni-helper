import { buildFullPath } from './buildFullPath';
import { buildUrl } from './buildUrl';

export const buildDownloadConfig = (config) => ({
  url: buildUrl(buildFullPath(config.baseUrl, config.url), config.params, config.paramsSerializer),
  header: config.headers,
  timeout: config.timeout,
  filePath: config.filePath,
});
