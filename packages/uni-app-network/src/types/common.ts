// T should be response data
// D should be request data
export type UanData = string | Record<string, any> | ArrayBuffer;

export enum HttpStatusCode {
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,
  EarlyHints = 103,
  Ok = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  ImUsed = 226,
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  Unused = 306,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  PayloadTooLarge = 413,
  UriTooLong = 414,
  UnsupportedMediaType = 415,
  RangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  ImATeapot = 418,
  MisdirectedRequest = 421,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  TooEarly = 425,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HttpVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
}

export type UanMethod =
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

export type UanHeaders = Record<string, any>;

export type UanParams = Record<string, any>;

export interface UanParamsSerializer {
  (params?: UanParams): string;
}

export interface UanValidateStatus {
  (status: number): boolean | null;
}

export interface UanGenericAbortSignal {
  readonly aborted: boolean;
  onabort?: ((...args: any) => any) | null;
  addEventListener?: (...args: any) => any;
  removeEventListener?: (...args: any) => any;
}

export type UanDataType = 'json' | string;

export type UanResponseType = 'text' | 'arraybuffer';

export interface UanFile {
  name?: string;
  file?: File;
  uri?: string;
}

export interface UanOnProgress {
  (response?: {
    /** 当前上传/下载百分比 */
    progress?: number;
    /** 已经上传的数据长度，单位 Bytes */
    totalBytesSent?: number;
    /** 预期需要上传的数据总长度，单位 Bytes */
    totalBytesExpectedToSend?: number;
    /** 已经下载的数据长度，单位 Bytes */
    totalBytesWritten?: number;
    /** 预期需要下载的数据总长度，单位 Bytes */
    totalBytesExpectedToWrite?: number;
  }): void;
}

export type UanFileType = 'image' | 'video' | 'audio';

export interface UanProfile {
  /**
   * 第一个 HTTP 重定向发生时的时间
   * 有跳转且是同域名内的重定向才算，否则值为 0
   */
  redirectStart?: number;
  /**
   * 最后一个 HTTP 重定向完成时的时间
   * 有跳转且是同域名内部的重定向才算，否则值为 0
   */
  redirectEnd?: number;
  /** 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前 */
  fetchStart?: number;
  /**
   * DNS 域名查询开始的时间
   * 如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
   */
  domainLookupStart?: number;
  /**
   * DNS 域名查询完成的时间
   * 如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
   */
  domainLookupEnd?: number;
  /**
   * HTTP（TCP） 开始建立连接的时间
   * 如果是持久连接，则与 fetchStart 值相等
   * 如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间
   */
  connectStart?: number;
  /**
   * HTTP（TCP） 完成建立连接的时间（完成握手）
   * 如果是持久连接，则与 fetchStart 值相等
   * 注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间
   * 这里的完成握手包括安全连接建立完成、SOCKS 授权通过
   */
  connectEnd?: number;
  /**
   * SSL建立连接的时间
   * 如果不是安全连接，则值为 0
   */
  SSLconnectionStart?: number;
  /**
   * SSL 建立完成的时间
   * 如果不是安全连接，则值为 0
   */
  SSLconnectionEnd?: number;
  /**
   * HTTP 请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存
   * 连接错误重连时，这里显示的也是新建立连接的时间
   */
  requestStart?: number;
  /**
   * HTTP 请求读取真实文档结束的时间
   */
  requestEnd?: number;
  /**
   * HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存
   */
  responseStart?: number;
  /**
   * HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存
   */
  responseEnd?: number;
  /**
   * 当次请求连接过程中实时 rtt
   */
  rtt?: number;
  /**
   * 评估的网络状态
   */
  estimate_nettype?: string | number;
  /**
   * 协议层根据多个请求评估当前网络的 rtt（仅供参考）
   */
  httpRttEstimate?: number;
  /**
   * 传输层根据多个请求评估的当前网络的 rtt（仅供参考）
   */
  transportRttEstimate?: number;
  /**
   * 评估当前网络下载的 kbps
   */
  downstreamThroughputKbpsEstimate?: number;
  /**
   * 当前网络的实际下载 kbps
   */
  throughputKbps?: number;
  /**
   * 当前请求的 IP
   */
  peerIP?: string;
  /**
   * 当前请求的端口
   */
  port?: number;
  /**
   * 是否复用连接
   */
  socketReused?: boolean;
  /**
   * 发送的字节数
   */
  sendBytesCount?: number;
  /**
   * 收到字节数
   */
  receivedBytedCount?: number;
  /**
   * 使用协议类型
   */
  protocol?: 'http1.1' | 'h2' | 'quic' | 'unknown' | string;
}
