import { mergeDeepRight } from 'ramda';
import { buildFullPath, buildUrl } from '../utils';
import {
  UrConfig,
  UrData,
  UrBaseResponse,
  UrRequestConfig,
  UrDownloadConfig,
  UrUploadConfig,
  UrBaseConfig,
  UrRequestResponse,
  UrDownloadResponse,
  UrUploadResponse,
} from '../types';
import {
  UrInterceptorManager,
  UrInterceptorManagerHandlerFulfilled,
  UrInterceptorManagerHandlerRejected,
} from './UrInterceptorManager';
import { dispatchRequest } from './dispatchRequest';

export class Ur<T = UrData, D = UrData> {
  defaults: UrBaseConfig<T, D>;
  interceptors: {
    request: UrInterceptorManager<UrBaseConfig<T, D>, T, D>;
    response: UrInterceptorManager<UrBaseResponse<T, D>, T, D>;
  };

  constructor(instanceConfig: UrBaseConfig<T, D>) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new UrInterceptorManager(),
      response: new UrInterceptorManager(),
    };
  }

  request(configOrUrl: string | UrBaseConfig<T, D>, config?: UrBaseConfig<T, D>) {
    const _config =
      typeof configOrUrl === 'string' ? { ...config, url: configOrUrl } : { ...configOrUrl };

    const mergedConfig = mergeDeepRight(this.defaults, _config) as UrBaseConfig<T, D>;

    // filter out skipped interceptors
    const requestInterceptorChain: (
      | UrInterceptorManagerHandlerFulfilled<UrBaseConfig<T, D>>
      | UrInterceptorManagerHandlerRejected
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
      | UrInterceptorManagerHandlerFulfilled<UrBaseResponse<T, D>>
      | UrInterceptorManagerHandlerRejected
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
        | UrInterceptorManagerHandlerFulfilled<UrBaseConfig<T, D>, T>
        | UrInterceptorManagerHandlerRejected
        | UrInterceptorManagerHandlerFulfilled<UrBaseResponse<T, D>, T>
        | UrInterceptorManagerHandlerRejected
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
      const onFulfilled = requestInterceptorChain[i++] as UrInterceptorManagerHandlerFulfilled<
        UrBaseConfig<T, D>
      >;
      const onRejected = requestInterceptorChain[i++] as UrInterceptorManagerHandlerRejected;
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

  download(configOrUrl: string | UrDownloadConfig<T, D>, config?: UrDownloadConfig<T, D>) {
    return this.request(configOrUrl, { ...config, adapter: 'download' });
  }

  upload(configOrUrl: string | UrUploadConfig<T, D>, config?: UrUploadConfig<T, D>) {
    return this.request(configOrUrl, { ...config, adapter: 'upload' });
  }

  getUri(config: UrConfig<T, D>) {
    const mergedConfig = mergeDeepRight(this.defaults, config ?? {});
    const fullPath = buildFullPath(mergedConfig?.baseUrl ?? '', mergedConfig?.url ?? '');
    return buildUrl(fullPath, mergedConfig?.params, mergedConfig?.paramsSerializer);
  }
}

export interface Ur<T = UrData, D = UrData> {
  request<TT = T, DD = D, R = UrBaseResponse<TT, DD>>(
    configOrUrl: string | UrBaseConfig<TT, DD>,
    config?: UrBaseConfig<TT, DD>,
  ): Promise<R>;

  request<TT = T, DD = D, R = UrRequestResponse<TT, DD>>(
    config: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  download<TT = T, DD = D, R = UrDownloadResponse<TT, DD>>(
    config: UrDownloadConfig<TT, DD>,
  ): Promise<R>;
  upload<TT = T, DD = D, R = UrUploadResponse<TT, DD>>(config: UrUploadConfig<TT, DD>): Promise<R>;

  get<TT = T, DD = D, R = UrRequestResponse<TT, DD>>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  delete<TT = T, DD = D, R = UrRequestResponse<TT, DD>>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  head<TT = T, DD = D, R = UrRequestResponse<TT, DD>>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  options<TT = T, DD = D, R = UrRequestResponse<TT, DD>>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  trace<TT = T, DD = D, R = UrRequestResponse<TT, DD>>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  connect<TT = T, DD = D, R = UrRequestResponse<TT, DD>>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;

  post<TT = T, DD = D, R = UrRequestResponse<TT, DD>>(
    url: string,
    data?: DD,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  put<TT = T, DD = D, R = UrRequestResponse<TT, DD>>(
    url: string,
    data?: DD,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
  patch<TT = T, DD = D, R = UrRequestResponse<TT, DD>>(
    url: string,
    data?: DD,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;
}

(['delete', 'get', 'head', 'options', 'trace', 'connect'] as const).forEach(function (method) {
  Ur.prototype[method] = function (url, config) {
    return this.request({
      ...config,
      method,
      url,
    });
  };
});

(['post', 'put', 'patch'] as const).forEach(function (method) {
  Ur.prototype[method] = function (url, data, config) {
    return this.request({
      ...config,
      method,
      url,
      data,
    });
  };
});
