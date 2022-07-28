import { buildFullPath } from './buildFullPath';
import { buildUrl } from './buildUrl';
import type { UrData, UrUploadConfig } from '../types';

export const buildUploadConfig = <T = UrData, D = UrData>(config: UrUploadConfig<T, D>) =>
  ({
    url: buildUrl(
      buildFullPath(config.baseUrl ?? '', config.url ?? ''),
      config.params,
      config.paramsSerializer,
    ),
    files: config.files,
    fileType: config.fileType,
    file: config.file,
    filePath: config.filePath,
    name: config.name,
    header: config.headers,
    timeout: config.timeout,
    formData: config.formData,
  } as UniApp.UploadFileOption);
