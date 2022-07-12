import { mergeDeepRight } from 'ramda';
import { buildFullPath, buildUrl } from '../utils';
import { UrInterceptorManager } from './UrInterceptorManager';
import { dispatchRequest } from './dispatchRequest';

class Ur {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new UrInterceptorManager(),
      response: new UrInterceptorManager(),
    };
  }

  request(configOrUrl, config) {
    const _config =
      typeof configOrUrl === 'string' ? { ...config, url: configOrUrl } : { ...configOrUrl };

    const mergedConfig = mergeDeepRight(this.defaults, _config);

    const requestInterceptorChain = [];
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

    const responseInterceptorChain = [];
    this.interceptors.response.forEach((interceptor) => {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len = 0;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
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
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
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

  download(configOrUrl, config) {
    this.request(configOrUrl, { ...config, adapter: 'download' });
  }

  upload(configOrUrl, config) {
    this.request(configOrUrl, { ...config, adapter: 'upload' });
  }

  getUri(config) {
    const mergedConfig = mergeDeepRight(this.defaults, config ?? {});
    const fullPath = buildFullPath(mergedConfig?.baseUrl ?? '', mergedConfig?.url ?? '');
    return buildUrl(fullPath, mergedConfig?.params, mergedConfig?.paramsSerializer);
  }
}

['get', 'delete', 'head', 'options', 'trace', 'connect'].forEach((method) => {
  Ur.prototype[method] = function (url, config) {
    return this.request(url, { ...config, method });
  };
});

['post', 'put', 'patch'].forEach((method) => {
  Ur.prototype[method] = function (url, data, config) {
    return this.request(url, { ...config, data, method });
  };
});

export { Ur };
