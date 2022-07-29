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
