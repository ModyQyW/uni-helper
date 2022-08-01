import { UrData, UrHeaders, UrProfile } from './common';
import { UrBaseConfig, UrRequestConfig, UrDownloadConfig, UrUploadConfig } from './config';
import { UrRequestTask, UrDownloadTask, UrUploadTask } from './task';

export interface UrBaseResponse<T = UrData, D = UrData> {
  errMsg?: string;
  errno?: number;
  status?: number;
  statusText?: string;
  headers?: UrHeaders;
  config?: UrBaseConfig<T, D>;
  request?: any;
  data?: T;
}

export interface UrRequestResponse<T = UrData, D = UrData> extends UrBaseResponse<T, D> {
  cookies?: string[];
  profile?: UrProfile;
  config?: UrRequestConfig<T, D>;
  request?: UrRequestTask;
}

export interface UrDownloadResponse<T = UrData, D = UrData> extends UrBaseResponse<T, D> {
  tempFilePath?: string;
  filePath?: string;
  profile?: UrProfile;
  config?: UrDownloadConfig<T, D>;
  request?: UrDownloadTask;
}

export interface UrUploadResponse<T = UrData, D = UrData> extends UrBaseResponse<T, D> {
  config?: UrUploadConfig<T, D>;
  request?: UrUploadTask;
}

export type UrResponse<T = UrData, D = UrData> =
  | UrBaseResponse<T, D>
  | UrRequestResponse<T, D>
  | UrDownloadResponse<T, D>
  | UrUploadResponse<T, D>;
