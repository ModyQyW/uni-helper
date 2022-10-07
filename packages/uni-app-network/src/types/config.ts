import { UanCancelToken } from '../core/UanCancelToken';
import {
  UanData,
  UanHeaders,
  UanMethod,
  UanDataType,
  UanResponseType,
  UanGenericAbortSignal,
} from './common';
import { UanBaseAdapter, UanRequestAdapter, UanDownloadAdapter, UanUploadAdapter } from './adapter';

export interface UanBaseConfig<T = UanData, D = UanData> {
  baseUrl?: string;
  url?: string;
  params?: any;
  paramsSerializer?: (params?: any) => string;
  data?: D;
  headers?: UanHeaders;
  timeout?: number;
  adapter?:
    | 'request'
    | 'download'
    | 'upload'
    | UanBaseAdapter<T, D>
    | UanRequestAdapter<T, D>
    | UanDownloadAdapter<T, D>
    | UanUploadAdapter<T, D>;
  validateStatus?: (status: number) => boolean | null;
  cancelToken?: UanCancelToken<T, D>;
  signal?: UanGenericAbortSignal;
  onHeadersReceived?: (response?: { headers?: UanHeaders }) => void;
  [key: string]: any;
}

export interface UanRequestConfig<T = UanData, D = UanData> extends UanBaseConfig<T, D> {
  adapter?: 'request' | UanRequestAdapter<T, D>;
  method?: UanMethod;
  dataType?: UanDataType;
  responseType?: UanResponseType;
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

export interface UanDownloadConfig<T = UanData, D = UanData> extends UanBaseConfig<T, D> {
  adapter?: 'download' | UanDownloadAdapter<T, D>;
  filePath?: string;
  onProgressUpdate?: (response?: {
    progress?: number;
    totalBytesWritten?: number;
    totalBytesExpectedToWrite?: number;
  }) => void;
  [key: string]: any;
}

export interface UanUploadConfig<T = UanData, D = UanData> extends UanBaseConfig<T, D> {
  adapter?: 'upload' | UanUploadAdapter<T, D>;
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

export type UanConfig<T = UanData, D = UanData> =
  | UanBaseConfig<T, D>
  | UanRequestConfig<T, D>
  | UanDownloadConfig<T, D>
  | UanUploadConfig<T, D>;
