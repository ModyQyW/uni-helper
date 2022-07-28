import { buildFullPath } from './buildFullPath';
import { buildUrl } from './buildUrl';
import type { UrDownloadConfig } from '../types';

export const buildDownloadConfig = (config: UrDownloadConfig) => ({
  url: buildUrl(
    buildFullPath(config.baseUrl ?? '', config.url ?? ''),
    config.params,
    config.paramsSerializer,
  ),
  header: config.headers,
  timeout: config.timeout,
  filePath: config.filePath,
});
