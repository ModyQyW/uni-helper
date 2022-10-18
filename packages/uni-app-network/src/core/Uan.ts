import { buildFullPath, buildUrl, mergeConfig } from '../utils';
import { UanConfig, UanData, UanResponse } from '../types';
import {
  UanInterceptorManager,
  UanInterceptorManagerHandlerFulfilled,
  UanInterceptorManagerHandlerRejected,
} from './UanInterceptorManager';
import { dispatchRequest } from './dispatchRequest';

export class Uan<T = UanData, D = UanData> {
  defaults: UanConfig<T, D>;
  interceptors: {
    request: UanInterceptorManager<UanConfig<T, D>, T, D>;
    response: UanInterceptorManager<UanResponse<T, D>, T, D>;
  };

  constructor(instanceConfig: UanConfig<T, D>) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new UanInterceptorManager(),
      response: new UanInterceptorManager(),
    };
  }

  request(configOrUrl: string | UanConfig<T, D>, config?: UanConfig<T, D>) {
    const _config =
      typeof configOrUrl === 'string' ? { ...config, url: configOrUrl } : { ...configOrUrl };

    const mergedConfig = mergeConfig(this.defaults, _config);

    // filter out skipped interceptors
    const requestInterceptorChain: (
      | UanInterceptorManagerHandlerFulfilled<UanConfig<T, D>>
      | UanInterceptorManagerHandlerRejected
      | undefined
    )[] = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach((interceptor) => {
      if (
        typeof interceptor.runWhen === 'function' &&
        interceptor.runWhen(mergedConfig) === false
      ) {
        return;
      }
      synchronousRequestInterceptors =
        synchronousRequestInterceptors && (interceptor?.synchronous ?? false);
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain: (
      | UanInterceptorManagerHandlerFulfilled<UanResponse<T, D>>
      | UanInterceptorManagerHandlerRejected
      | undefined
    )[] = [];
    this.interceptors.response.forEach((interceptor) => {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    // TODO: better types
    let promise: any;
    let i = 0;
    let len = 0;

    if (!synchronousRequestInterceptors) {
      const chain: (
        | UanInterceptorManagerHandlerFulfilled<UanConfig<T, D>>
        | UanInterceptorManagerHandlerRejected
        | UanInterceptorManagerHandlerFulfilled<UanResponse<T, D>>
        | UanInterceptorManagerHandlerRejected
        | undefined
      )[] = [dispatchRequest.bind(this), undefined];
      chain.unshift(...requestInterceptorChain);
      chain.push(...responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(mergedConfig);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = mergedConfig;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++] as UanInterceptorManagerHandlerFulfilled<
        UanConfig<T, D>
      >;
      const onRejected = requestInterceptorChain[i++] as UanInterceptorManagerHandlerRejected;
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  download(configOrUrl: string | UanConfig<T, D>, config?: UanConfig<T, D>) {
    return this.request(configOrUrl, { ...config, adapter: 'download' });
  }

  upload(configOrUrl: string | UanConfig<T, D>, config?: UanConfig<T, D>) {
    return this.request(configOrUrl, { ...config, adapter: 'upload' });
  }

  getUri(config: UanConfig<T, D>) {
    const mergedConfig = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(mergedConfig?.baseUrl ?? '', mergedConfig?.url ?? '');
    return buildUrl(fullPath, mergedConfig?.params, mergedConfig?.paramsSerializer);
  }
}

export interface Uan<T = UanData, D = UanData> {
  // request<TT = T, DD = D, R = UanBaseResponse<TT, DD>>(
  //   configOrUrl: string | UanBaseConfig<TT, DD>,
  //   config?: UanBaseConfig<TT, DD>,
  // ): Promise<R>;

  request<TT = T, DD = D, R = UanResponse<TT, DD>>(config: UanConfig<TT, DD>): Promise<R>;
  download<TT = T, DD = D, R = UanResponse<TT, DD>>(config: UanConfig<TT, DD>): Promise<R>;
  upload<TT = T, DD = D, R = UanResponse<TT, DD>>(config: UanConfig<TT, DD>): Promise<R>;

  get<TT = T, DD = D, R = UanResponse<TT, DD>>(url: string, config?: UanConfig<TT, DD>): Promise<R>;
  delete<TT = T, DD = D, R = UanResponse<TT, DD>>(
    url: string,
    config?: UanConfig<TT, DD>,
  ): Promise<R>;
  head<TT = T, DD = D, R = UanResponse<TT, DD>>(
    url: string,
    config?: UanConfig<TT, DD>,
  ): Promise<R>;
  options<TT = T, DD = D, R = UanResponse<TT, DD>>(
    url: string,
    config?: UanConfig<TT, DD>,
  ): Promise<R>;
  trace<TT = T, DD = D, R = UanResponse<TT, DD>>(
    url: string,
    config?: UanConfig<TT, DD>,
  ): Promise<R>;
  connect<TT = T, DD = D, R = UanResponse<TT, DD>>(
    url: string,
    config?: UanConfig<TT, DD>,
  ): Promise<R>;

  post<TT = T, DD = D, R = UanResponse<TT, DD>>(
    url: string,
    data?: DD,
    config?: UanConfig<TT, DD>,
  ): Promise<R>;
  put<TT = T, DD = D, R = UanResponse<TT, DD>>(
    url: string,
    data?: DD,
    config?: UanConfig<TT, DD>,
  ): Promise<R>;
  patch<TT = T, DD = D, R = UanResponse<TT, DD>>(
    url: string,
    data?: DD,
    config?: UanConfig<TT, DD>,
  ): Promise<R>;
}

(['delete', 'get', 'head', 'options', 'trace', 'connect'] as const).forEach(function (method) {
  Uan.prototype[method] = function (url, config) {
    return this.request({
      ...config,
      method,
      url,
    });
  };
});

(['post', 'put', 'patch'] as const).forEach(function (method) {
  Uan.prototype[method] = function (url, data, config) {
    return this.request({
      ...config,
      method,
      url,
      data,
    });
  };
});
