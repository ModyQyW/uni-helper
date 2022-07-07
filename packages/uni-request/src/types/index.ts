// T should be response data
// D should be request data

export type UrData = string | Record<string, any> | ArrayBuffer;

export type UrMethod =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK'
  | 'trace'
  | 'TRACE'
  | 'connect'
  | 'CONNECT';

export type UrHeaders = Record<string, any>;

export type UrDataType = 'json' | string;

export type UrResponseType = 'text' | 'arraybuffer';

export interface UrRequestAdapter<T = UrData, D = UrData> {
  (config: UrRequestConfig<T, D>): UrRequestPromise<T, D>;
}

export interface UrDownloadAdapter<T = UrData, D = UrData> {
  (config: UrDownloadConfig<T, D>): UrDownloadPromise<T, D>;
}

export interface UrUploadAdapter<T = UrData, D = UrData> {
  (config: UrUploadConfig<T, D>): UrUploadPromise<T, D>;
}

export type UrAdapter<T = UrData, D = UrData> =
  | UrRequestAdapter<T, D>
  | UrDownloadAdapter<T, D>
  | UrUploadAdapter<T, D>;

export interface UrRequestRequestTransformer<T = UrData, D = UrData> {
  (this: UrRequestConfig<T, D>, data: D, headers: UrHeaders): any;
}

export interface UrRequestResponseTransformer<T = UrData, D = UrData> {
  (this: UrRequestConfig<T, D>, data: T, headers: UrHeaders, status?: number): any;
}

export interface UrDownloadRequestTransformer<T = UrData, D = UrData> {
  (this: UrRequestConfig<T, D>, data: D, headers: UrHeaders): any;
}

export interface UrDownloadResponseTransformer<T = UrData, D = UrData> {
  (this: UrRequestConfig<T, D>, data: T, headers: UrHeaders, status?: number): any;
}

export interface UrUploadRequestTransformer<T = UrData, D = UrData> {
  (this: UrRequestConfig<T, D>, data: D, headers: UrHeaders): any;
}

export interface UrUploadResponseTransformer<T = UrData, D = UrData> {
  (this: UrRequestConfig<T, D>, data: T, headers: UrHeaders, status?: number): any;
}

export type UrRequestTransformer<T = UrData, D = UrData> =
  | UrRequestRequestTransformer<T, D>
  | UrDownloadRequestTransformer<T, D>
  | UrUploadRequestTransformer<T, D>;

export type UrResponseTransformer<T = UrData, D = UrData> =
  | UrRequestResponseTransformer<T, D>
  | UrDownloadResponseTransformer<T, D>
  | UrUploadResponseTransformer<T, D>;

export type UrFileType = 'image' | 'video' | 'audio';

export interface UrProfile {
  redirectStart?: number;
  redirectEnd?: number;
  fetchStart?: number;
  domainLookupStart?: number;
  domainLookupEnd?: number;
  connectStart?: number;
  connectEnd?: number;
  SSLconnectionStart?: number;
  SSLconnectionEnd?: number;
  requestStart?: number;
  requestEnd?: number;
  responseStart?: number;
  responseEnd?: number;
  rtt?: number;
  estimate_nettype?: string | number;
  httpRttEstimate?: number;
  transportRttEstimate?: number;
  downstreamThroughputKbpsEstimate?: number;
  throughputKbps?: number;
  peerIP?: string;
  port?: number;
  socketReused?: boolean;
  sendBytesCount?: number;
  receivedBytedCount?: number;
  protocol?: 'http1.1' | 'h2' | 'quic' | 'unknown' | string;
}

export interface UrBaseConfig<D = UrData> {
  baseUrl?: string;
  url?: string;
  params?: any;
  paramsSerializer?: (params?: any) => string;
  data?: D;
  headers?: UrHeaders;
  timeout?: number;
  timeoutErrorMessage?: string;
  signal?: AbortSignal;
  onHeadersReceived?: (response?: { headers?: UrHeaders }) => void;
}

export interface UrRequestConfig<T = UrData, D = UrData> extends UrBaseConfig<D> {
  method?: UrMethod;
  dataType?: UrDataType;
  responseType?: UrResponseType;
  transformRequest?: UrRequestRequestTransformer<T, D> | UrRequestRequestTransformer<T, D>[];
  transformResponse?: UrRequestResponseTransformer<T, D> | UrRequestResponseTransformer<T, D>[];
  adapter?: 'request' | 'REQUEST' | UrAdapter;
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
}

export interface UrDownloadConfig<T = UrData, D = UrData> extends UrBaseConfig<D> {
  transformRequest?: UrDownloadRequestTransformer<T, D> | UrDownloadRequestTransformer<T, D>[];
  transformResponse?: UrDownloadResponseTransformer<T, D> | UrDownloadResponseTransformer<T, D>[];
  adapter?: 'download' | 'DOWNLOAD' | UrAdapter;
  filePath?: string;
  onProgressUpdate?: (response?: {
    progress?: number;
    totalBytesWritten?: number;
    totalBytesExpectedToWrite?: number;
  }) => void;
}

export interface UrUploadConfig<T = UrData, D = UrData> extends UrBaseConfig<D> {
  transformRequest?: UrUploadRequestTransformer<T, D> | UrUploadRequestTransformer<T, D>[];
  transformResponse?: UrUploadResponseTransformer<T, D> | UrUploadResponseTransformer<T, D>[];
  adapter?: 'upload' | 'UPLOAD' | UrAdapter;
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
}

export type UrConfig<T = UrData, D = UrData> =
  | UrRequestConfig<T, D>
  | UrDownloadConfig<T, D>
  | UrUploadConfig<T, D>;

export interface UrBaseResponse<T = UrData, D = UrData> {
  errMsg?: string;
  errno?: number;
  status: number;
  statusText: string;
  headers: UrHeaders;
  config: UrConfig<T, D>;
  request?: any;
}

export interface UrRequestResponse<T = UrData, D = UrData> extends UrBaseResponse<T, D> {
  data?: T;
  cookies?: string[];
  profile?: UrProfile;
}

export interface UrDownloadResponse<T = UrData, D = UrData> extends UrBaseResponse<T, D> {
  data?: T;
  tempFilePath?: string;
  filePath?: string;
  profile?: UrProfile;
}

export interface UrUploadResponse<T = UrData, D = UrData> extends UrBaseResponse<T, D> {
  data?: T;
}

export type UrResponse<T = UrData, D = UrData> =
  | UrRequestResponse<T, D>
  | UrDownloadResponse<T, D>
  | UrUploadResponse<T, D>;

export type UrRequestPromise<T = UrData, D = UrData> = Promise<UrRequestResponse<T, D>>;

export type UrDownloadPromise<T = UrData, D = UrData> = Promise<UrDownloadResponse<T, D>>;

export type UrUploadPromise<T = UrData, D = UrData> = Promise<UrUploadResponse<T, D>>;

export type UrPromise<T = UrData, D = UrData> =
  | UrRequestPromise<T, D>
  | UrDownloadPromise<T, D>
  | UrUploadPromise<T, D>;

export interface UrInterceptorOptions<T = UrData, D = UrData> {
  synchronous?: boolean;
  runWhen?: (config: T extends infer P ? P : UrConfig<T, D>) => boolean;
}

export interface UrInterceptorManagerHandler<V, T = V, D = UrData>
  extends UrInterceptorOptions<T, D> {
  fulfilled?: (value: V) => T | Promise<T>;
  rejected?: (error: any) => any;
}
