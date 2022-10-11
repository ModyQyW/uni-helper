import { UanData, UanConfig } from '../types';
import { buildFullPath } from './buildFullPath';
import { buildUrl } from './buildUrl';

export const buildDownloadConfig = <T = UanData, D = UanData>(config: UanConfig<T, D>) =>
  ({
    url: buildUrl(
      buildFullPath(config.baseUrl ?? '', config.url ?? ''),
      config.params,
      config.paramsSerializer,
    ),
    header: config.headers,
    timeout: config.timeout,
    filePath: config.filePath,
  } as UniApp.DownloadFileOption);
