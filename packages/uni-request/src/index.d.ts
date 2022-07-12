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

export interface UrBaseConfig<T = UrData, D = UrData> {
  baseUrl?: string;
  url?: string;
  params?: any;
  paramsSerializer?: (params?: any) => string;
  data?: D;
  headers?: UrHeaders;
  timeout?: number;
  adapter?: 'request' | 'download' | 'upload' | UrAdapter<T, D>;
  validateStatus?: (status: number) => boolean | null;
  cancelToken?: UrCancelToken;
  signal?: AbortSignal;
  onHeadersReceived?: (response?: { headers?: UrHeaders }) => void;
}

export interface UrRequestConfig<T = UrData, D = UrData> extends UrBaseConfig<T, D> {
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

export interface UrDownloadConfig<T = UrData, D = UrData> extends UrBaseConfig<T, D> {
  filePath?: string;
  onProgressUpdate?: (response?: {
    progress?: number;
    totalBytesWritten?: number;
    totalBytesExpectedToWrite?: number;
  }) => void;
}

export interface UrUploadConfig<T = UrData, D = UrData> extends UrBaseConfig<T, D> {
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

export type UrRequestTask = UniApp.RequestTask;

export type UrDownloadTask = UniApp.DownloadTask;

export type UrUploadTask = UniApp.UploadTask;

export type UrTask = UrRequestTask | UrDownloadTask | UrUploadTask;

export interface UrBaseResponse<T = UrData, D = UrData> {
  errMsg?: string;
  errno?: number;
  status: number;
  statusText: string;
  headers?: UrHeaders;
  config: UrConfig<T, D>;
  request?: any;
}

export interface UrRequestResponse<T = UrData, D = UrData> extends UrBaseResponse<T, D> {
  data?: T;
  cookies?: string[];
  profile?: UrProfile;
  request?: UrRequestTask;
}

export interface UrDownloadResponse<T = UrData, D = UrData> extends UrBaseResponse<T, D> {
  data?: T;
  tempFilePath?: string;
  filePath?: string;
  profile?: UrProfile;
  request?: UrDownloadTask;
}

export interface UrUploadResponse<T = UrData, D = UrData> extends UrBaseResponse<T, D> {
  data?: T;
  request?: UrUploadTask;
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

export class UrError<T = UrData, D = UrData> extends Error {
  constructor(
    message?: string,
    code?: string,
    config?: UrConfig<T, D>,
    request?: UrTask,
    response?: UrResponse<T, D>,
  );

  config?: UrConfig<T, D>;
  code?: string;
  request?: UrTask;
  response?: UrResponse<T, D>;
  isUrError: boolean;
  status?: number;
  toJSON: () => {
    name: string;
    message?: string;
    stack?: string;
    config?: UrConfig<T, D>;
    code?: string;
    status?: number;
    [key: string]: any;
  };
  cause?: Error;
  static readonly ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
  static readonly ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
  static readonly ERR_BAD_OPTION = 'ERR_BAD_OPTION';
  static readonly ERR_NETWORK = 'ERR_NETWORK';
  static readonly ERR_DEPRECATED = 'ERR_DEPRECATED';
  static readonly ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
  static readonly ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
  static readonly ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
  static readonly ERR_INVALID_URL = 'ERR_INVALID_URL';
  static readonly ERR_CANCELED = 'ERR_CANCELED';
  static readonly ECONNABORTED = 'ECONNABORTED';
  static readonly ETIMEDOUT = 'ETIMEDOUT';
}

export class UrCanceledError<T = UrData, D = UrData> extends UrError<T, D> {}

export interface UrCancel {
  message?: string;
}

export interface UrCancelStatic {
  new (message?: string): UrCancel;
}

export interface UrCanceler<T = UrData, D = UrData> {
  (message?: string, config?: UrConfig<T, D>, request?: UrTask): void;
}

export interface UrCancelToken {
  promise: Promise<UrCancel>;
  reason?: UrCancel;
  throwIfRequested(): void;
}

export interface UrCancelTokenSource {
  token: UrCancelToken;
  cancel: UrCanceler;
}

export interface UrCancelTokenStatic {
  new (executor: (cancel: UrCanceler) => void): UrCancelToken;
  source(): UrCancelTokenSource;
}

export interface UrInterceptorOptions<T = UrData, D = UrData> {
  synchronous?: boolean;
  runWhen?: (config: UrConfig<T, D>) => boolean;
}

export interface UrInterceptorManagerHandler<V, T = V, D = UrData>
  extends UrInterceptorOptions<T, D> {
  fulfilled?: (value: V) => T | Promise<T>;
  rejected?: (error: any) => any;
}

export interface UrInterceptorManager<V, T = V, D = UrData> {
  use(
    onFulfilled?: (value: V) => T | Promise<T>,
    onRejected?: (error: any) => any,
    options?: UrInterceptorOptions<T, D>,
  ): number;
  eject(id: number): void;
}

export class Ur<T = UrData, D = UrData> {
  constructor(config?: UrConfig<T, D>);
  defaults: UrConfig<T, D>;
  interceptors: {
    request: UrInterceptorManager<UrConfig<T, D>>;
    response: UrInterceptorManager<UrResponse<T, D>>;
  };
  getUri(config?: UrConfig<T, D>): string;

  request<TT = T, R = UrRequestResponse<TT, DD>, DD = D>(
    config: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  download<TT = T, R = UrDownloadResponse<TT, DD>, DD = D>(
    config: UrDownloadConfig<TT, DD>,
  ): Promise<R>;
  upload<TT = T, R = UrUploadResponse<TT, DD>, DD = D>(config: UrUploadConfig<TT, DD>): Promise<R>;

  get<TT = T, R = UrRequestResponse<TT, DD>, DD = D>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  delete<TT = T, R = UrRequestResponse<TT, DD>, DD = D>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  head<TT = T, R = UrRequestResponse<TT, DD>, DD = D>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  options<TT = T, R = UrRequestResponse<TT, DD>, DD = D>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  trace<TT = T, R = UrRequestResponse<TT, DD>, DD = D>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  connect<TT = T, R = UrRequestResponse<TT, DD>, DD = D>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  post<TT = T, R = UrRequestResponse<TT, DD>, DD = D>(
    url: string,
    data?: DD,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  put<TT = T, R = UrRequestResponse<TT, DD>, DD = D>(
    url: string,
    data?: DD,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  patch<TT = T, R = UrRequestResponse<TT, DD>, DD = D>(
    url: string,
    data?: DD,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
}

export interface UrInstance<T = UrData, D = UrData> extends Ur<T, D> {
  <TT = T, R = UrResponse<TT, DD>, DD = D>(config: UrRequestConfig<TT, DD>): Promise<R>;
  <TT = T, R = UrResponse<TT, DD>, DD = D>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;

  defaults: UrConfig<T, D>;
}

export interface UrStatic<T = UrData, D = UrData> extends UrInstance<T, D> {
  create(config?: UrConfig<T, D>): UrInstance<T, D>;
  Cancel: UrCancelStatic;
  CancelToken: UrCancelTokenStatic;
  Ur: typeof Ur;
  UrError: typeof UrError;
  readonly VERSION: string;
  isCancel(value: any): value is UrCancel;
  all(values: Array<T | Promise<T>>): Promise<T[]>;
  isUrError<T = any, D = any>(payload: any): payload is UrError<T, D>;
}

declare const ur: UrStatic;

export default ur;
