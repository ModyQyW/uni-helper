import { UanData, UanDownloadConfig } from '../types';
import { buildFullPath } from './buildFullPath';
import { buildUrl } from './buildUrl';

export const buildDownloadConfig = <T = UanData, D = UanData>(config: UanDownloadConfig<T, D>) =>
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
