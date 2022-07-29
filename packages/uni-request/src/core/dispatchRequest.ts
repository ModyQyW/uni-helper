import { adapters, requestAdapter } from '../adapters';
import { UrBaseAdapter, UrBaseConfig, UrData } from '../types';
import { isCancel } from './isCancel';
import { UrCanceledError } from './UrCanceledError';

const throwIfCancellationRequested = <T = UrData, D = UrData>(config: UrBaseConfig<T, D>) => {
  if (config.cancelToken) {
    config.cancelToken?.throwIfRequested();
  }

  if (config.signal?.aborted) {
    throw new UrCanceledError();
  }
};

export const dispatchRequest = <T = UrData, D = UrData>(config: UrBaseConfig<T, D>) => {
  throwIfCancellationRequested(config);

  const adapter = (
    typeof config.adapter === 'string' && adapters[config.adapter]
      ? adapters[config.adapter]
      : typeof config.adapter === 'function'
      ? config.adapter
      : requestAdapter
  ) as UrBaseAdapter<T, D>;

  return adapter(config).then(
    (response) => {
      throwIfCancellationRequested(config);
      return response;
    },
    (reason) => {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
      }
      return Promise.reject(reason);
    },
  );
};
