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
  baseURL?: string;
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

export interface UrRequestConfig<D = UrData> extends UrBaseConfig<D> {
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
}

export interface UrDownloadConfig<D = UrData> extends UrBaseConfig<D> {
  filePath?: string;
  onProgressUpdate?: (response?: {
    progress?: number;
    totalBytesWritten?: number;
    totalBytesExpectedToWrite?: number;
  }) => void;
}

export interface UrUploadConfig<D = UrData> extends UrBaseConfig<D> {
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

export type UrConfig<D = UrData> = UrRequestConfig<D> | UrDownloadConfig<D> | UrUploadConfig<D>;

export interface UrBaseResponse<D = UrData> {
  errMsg?: string;
  errno?: number;
  status: number;
  statusText: string;
  headers: UrHeaders;
  config: UrRequestConfig<D>;
  request?: any;
}

export interface UrRequestResponse<T = UrData, D = UrData> extends UrBaseResponse<D> {
  data?: T;
  cookies?: string[];
  profile?: UrProfile;
}

export interface UrDownloadResponse<T = UrData, D = UrData> extends UrBaseResponse<D> {
  data?: T;
  tempFilePath?: string;
  filePath?: string;
  profile?: UrProfile;
}

export interface UrUploadResponse<T = UrData, D = UrData> extends UrBaseResponse<D> {
  data?: T;
}

export type UrResponse<T = UrData, D = UrData> =
  | UrRequestResponse<T, D>
  | UrDownloadResponse<T, D>
  | UrUploadResponse<T, D>;
