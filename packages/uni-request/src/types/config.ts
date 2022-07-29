import { UrCancelToken } from '../core/UrCancelToken';
import { UrData, UrHeaders, UrMethod, UrDataType, UrResponseType } from './common';
import { UrBaseAdapter, UrRequestAdapter, UrDownloadAdapter, UrUploadAdapter } from './adapter';

export interface UrBaseConfig<T = UrData, D = UrData> {
  baseUrl?: string;
  url?: string;
  params?: any;
  paramsSerializer?: (params?: any) => string;
  data?: D;
  headers?: UrHeaders;
  timeout?: number;
  adapter?:
    | 'request'
    | 'download'
    | 'upload'
    | UrBaseAdapter<T, D>
    | UrRequestAdapter<T, D>
    | UrDownloadAdapter<T, D>
    | UrUploadAdapter<T, D>;
  validateStatus?: (status: number) => boolean | null;
  cancelToken?: UrCancelToken;
  signal?: AbortSignal;
  onHeadersReceived?: (response?: { headers?: UrHeaders }) => void;
  [key: string]: any;
}

export interface UrRequestConfig<T = UrData, D = UrData> extends UrBaseConfig<T, D> {
  adapter?: 'request' | UrRequestAdapter<T, D>;
  method?: UrMethod;
  dataType?: UrDataType;
  responseType?: UrResponseType;
  enableHttp2?: boolean;
  enableQuic?: boolean;
  enableCache?: boolean;
  enableHttpDNS?: boolean;
  httpDNSServiceId?: string;
  enableChunked?: boolean;
  forceCellularNetwork?: boolean;
  sslVerify?: boolean;
  withCredentials?: boolean;
  firstIpv4?: boolean;
  onChunkReceived?: (response?: { data?: ArrayBuffer }) => void;
  [key: string]: any;
}

export interface UrDownloadConfig<T = UrData, D = UrData> extends UrBaseConfig<T, D> {
  adapter?: 'download' | UrDownloadAdapter<T, D>;
  filePath?: string;
  onProgressUpdate?: (response?: {
    progress?: number;
    totalBytesWritten?: number;
    totalBytesExpectedToWrite?: number;
  }) => void;
  [key: string]: any;
}

export interface UrUploadConfig<T = UrData, D = UrData> extends UrBaseConfig<T, D> {
  adapter?: 'upload' | UrUploadAdapter<T, D>;
  filePath?: string;
  name?: string;
  files?: File[];
  file?: File;
  formData?: Record<string, any>;
  fileType?: 'image' | 'video' | 'audio';
  onProgressUpdate?: (response?: {
    progress?: number;
    totalBytesWritten?: number;
    totalBytesExpectedToWrite?: number;
  }) => void;
  [key: string]: any;
}

export type UrConfig<T = UrData, D = UrData> =
  | UrBaseConfig<T, D>
  | UrRequestConfig<T, D>
  | UrDownloadConfig<T, D>
  | UrUploadConfig<T, D>;
