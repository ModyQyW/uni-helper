import { adapters, requestAdapter } from '../adapters';
import { UanBaseAdapter, UanBaseConfig, UanData } from '../types';
import { isCancel } from './isCancel';
import { UanCanceledError } from './UanCanceledError';

const throwIfCancellationRequested = <T = UanData, D = UanData>(config: UanBaseConfig<T, D>) => {
  if (config.cancelToken) {
    config.cancelToken?.throwIfRequested();
  }

  if (config.signal?.aborted) {
    throw new UanCanceledError();
  }
};

export const dispatchRequest = <T = UanData, D = UanData>(config: UanBaseConfig<T, D>) => {
  throwIfCancellationRequested(config);

  const adapter = (
    typeof config.adapter === 'string' && adapters[config.adapter]
      ? adapters[config.adapter]
      : typeof config.adapter === 'function'
      ? config.adapter
      : requestAdapter
  ) as UanBaseAdapter<T, D>;

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
