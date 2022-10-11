import { UanData, UanHeaders, UanProfile } from './common';
import { UanBaseConfig, UanRequestConfig, UanDownloadConfig, UanUploadConfig } from './config';
import { UanRequestTask, UanDownloadTask, UanUploadTask } from './task';

export interface UanBaseResponse<T = UanData, D = UanData> {
  errMsg?: string;
  errno?: number;
  status?: number;
  statusText?: string;
  headers?: UanHeaders;
  config?: UanBaseConfig<T, D>;
  task?: any;
  data?: T;
}

export interface UanRequestResponse<T = UanData, D = UanData> extends UanBaseResponse<T, D> {
  cookies?: string[];
  profile?: UanProfile;
  config?: UanRequestConfig<T, D>;
  task?: UanRequestTask;
}

export interface UanDownloadResponse<T = UanData, D = UanData> extends UanBaseResponse<T, D> {
  tempFilePath?: string;
  filePath?: string;
  profile?: UanProfile;
  config?: UanDownloadConfig<T, D>;
  task?: UanDownloadTask;
}

export interface UanUploadResponse<T = UanData, D = UanData> extends UanBaseResponse<T, D> {
  config?: UanUploadConfig<T, D>;
  task?: UanUploadTask;
}

export type UanResponse<T = UanData, D = UanData> =
  | UanBaseResponse<T, D>
  | UanRequestResponse<T, D>
  | UanDownloadResponse<T, D>
  | UanUploadResponse<T, D>;
