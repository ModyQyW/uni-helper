import { buildFullPath } from './buildFullPath';
import { buildUrl } from './buildUrl';
import type { UrData, UrRequestConfig } from '../types';

export const buildRequestConfig = <T = UrData, D = UrData>(config: UrRequestConfig<T, D>) => ({
  url: buildUrl(
    buildFullPath(config.baseUrl ?? '', config.url ?? ''),
    config.params,
    config.paramsSerializer,
  ),
  data: config.data,
  header: config.headers,
  method: config.method?.toUpperCase() ?? 'GET',
  timeout: config.timeout,
  dataType: config.dataType,
  responseType: config.responseType,
  enableHttp2: config.enableHttp2,
  enableQuic: config.enableQuic,
  enableCache: config.enableCache,
  enableHttpDNS: config.enableHttpDNS,
  httpDNSServiceId: config.httpDNSServiceId,
  enableChunked: config.enableChunked,
  forceCellularNetwork: config.forceCellularNetwork,
  sslVerify: config.sslVerify,
  withCredentials: config.withCredentials,
  firstIpv4: config.firstIpv4,
});
