import { adapters, requestAdapter } from '../adapters';
import { UanAdapter, UanConfig, UanData } from '../types';
import { isUanCancel } from './isUanCancel';
import { UanCanceledError } from './UanCanceledError';

const throwIfCancellationRequested = <T = UanData, D = UanData>(config: UanConfig<T, D>) => {
  if (config.cancelToken) {
    config.cancelToken?.throwIfRequested();
  }

  if (config.signal?.aborted) {
    throw new UanCanceledError();
  }
};

export const dispatchRequest = <T = UanData, D = UanData>(config: UanConfig<T, D>) => {
  throwIfCancellationRequested(config);

  const adapter = (
    typeof config.adapter === 'string' && adapters[config.adapter]
      ? adapters[config.adapter]
      : typeof config.adapter === 'function'
      ? config.adapter
      : requestAdapter
  ) as UanAdapter<T, D>;

  return adapter(config).then(
    (response) => {
      throwIfCancellationRequested(config);
      return response;
    },
    (reason) => {
      if (!isUanCancel(reason)) {
        throwIfCancellationRequested(config);
      }
      return Promise.reject(reason);
    },
  );
};
