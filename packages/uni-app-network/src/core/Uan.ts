import { mergeDeepRight } from 'ramda';
import { buildFullPath, buildUrl } from '../utils';
import {
  UanConfig,
  UanData,
  UanBaseResponse,
  UanRequestConfig,
  UanDownloadConfig,
  UanUploadConfig,
  UanBaseConfig,
  UanRequestResponse,
  UanDownloadResponse,
  UanUploadResponse,
} from '../types';
import {
  UanInterceptorManager,
  UanInterceptorManagerHandlerFulfilled,
  UanInterceptorManagerHandlerRejected,
} from './UanInterceptorManager';
import { dispatchRequest } from './dispatchRequest';

export class Uan<T = UanData, D = UanData> {
  defaults: UanBaseConfig<T, D>;
  interceptors: {
    request: UanInterceptorManager<UanBaseConfig<T, D>, T, D>;
    response: UanInterceptorManager<UanBaseResponse<T, D>, T, D>;
  };

  constructor(instanceConfig: UanBaseConfig<T, D>) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new UanInterceptorManager(),
      response: new UanInterceptorManager(),
    };
  }

  request(configOrUrl: string | UanBaseConfig<T, D>, config?: UanBaseConfig<T, D>) {
    const _config =
      typeof configOrUrl === 'string' ? { ...config, url: configOrUrl } : { ...configOrUrl };

    const mergedConfig = mergeDeepRight(this.defaults, _config) as UanBaseConfig<T, D>;

    // filter out skipped interceptors
    const requestInterceptorChain: (
      | UanInterceptorManagerHandlerFulfilled<UanBaseConfig<T, D>>
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
      | UanInterceptorManagerHandlerFulfilled<UanBaseResponse<T, D>>
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
        | UanInterceptorManagerHandlerFulfilled<UanBaseConfig<T, D>, T>
        | UanInterceptorManagerHandlerRejected
        | UanInterceptorManagerHandlerFulfilled<UanBaseResponse<T, D>, T>
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
        UanBaseConfig<T, D>
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
      // @ts-expect-error
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

  download(configOrUrl: string | UanDownloadConfig<T, D>, config?: UanDownloadConfig<T, D>) {
    return this.request(configOrUrl, { ...config, adapter: 'download' });
  }

  upload(configOrUrl: string | UanUploadConfig<T, D>, config?: UanUploadConfig<T, D>) {
    return this.request(configOrUrl, { ...config, adapter: 'upload' });
  }

  getUri(config: UanConfig<T, D>) {
    const mergedConfig = mergeDeepRight(this.defaults, config ?? {});
    const fullPath = buildFullPath(mergedConfig?.baseUrl ?? '', mergedConfig?.url ?? '');
    return buildUrl(fullPath, mergedConfig?.params, mergedConfig?.paramsSerializer);
  }
}

export interface Uan<T = UanData, D = UanData> {
  // request<TT = T, DD = D, R = UanBaseResponse<TT, DD>>(
  //   configOrUrl: string | UanBaseConfig<TT, DD>,
  //   config?: UanBaseConfig<TT, DD>,
  // ): Promise<R>;

  request<TT = T, DD = D, R = UanRequestResponse<TT, DD>>(
    config: UanRequestConfig<TT, DD>,
  ): Promise<R>;
  download<TT = T, DD = D, R = UanDownloadResponse<TT, DD>>(
    config: UanDownloadConfig<TT, DD>,
  ): Promise<R>;
  upload<TT = T, DD = D, R = UanUploadResponse<TT, DD>>(
    config: UanUploadConfig<TT, DD>,
  ): Promise<R>;

  get<TT = T, DD = D, R = UanRequestResponse<TT, DD>>(
    url: string,
    config?: UanRequestConfig<TT, DD>,
  ): Promise<R>;
  delete<TT = T, DD = D, R = UanRequestResponse<TT, DD>>(
    url: string,
    config?: UanRequestConfig<TT, DD>,
  ): Promise<R>;
  head<TT = T, DD = D, R = UanRequestResponse<TT, DD>>(
    url: string,
    config?: UanRequestConfig<TT, DD>,
  ): Promise<R>;
  options<TT = T, DD = D, R = UanRequestResponse<TT, DD>>(
    url: string,
    config?: UanRequestConfig<TT, DD>,
  ): Promise<R>;
  trace<TT = T, DD = D, R = UanRequestResponse<TT, DD>>(
    url: string,
    config?: UanRequestConfig<TT, DD>,
  ): Promise<R>;
  connect<TT = T, DD = D, R = UanRequestResponse<TT, DD>>(
    url: string,
    config?: UanRequestConfig<TT, DD>,
  ): Promise<R>;

  post<TT = T, DD = D, R = UanRequestResponse<TT, DD>>(
    url: string,
    data?: DD,
    config?: UanRequestConfig<TT, DD>,
  ): Promise<R>;
  put<TT = T, DD = D, R = UanRequestResponse<TT, DD>>(
    url: string,
    data?: DD,
    config?: UanRequestConfig<TT, DD>,
  ): Promise<R>;
  patch<TT = T, DD = D, R = UanRequestResponse<TT, DD>>(
    url: string,
    data?: DD,
    config?: UanRequestConfig<TT, DD>,
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
