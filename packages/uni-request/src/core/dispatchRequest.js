import { adapters, requestAdapter } from '../adapters';
import { isCancel } from './isCancel';
import { UrCanceledError } from './UrCanceledError';

const throwIfCancellationRequested = (config) => {
  if (config.cancelToken) {
    config.cancelToken?.throwIfRequested();
  }

  if (config.signal?.aborted) {
    throw new UrCanceledError();
  }
};

export const dispatchRequest = (config) => {
  throwIfCancellationRequested(config);

  const adapter =
    typeof config.adapter === 'string' && adapters[config.adapter]
      ? adapters[config.adapter]
      : typeof config.adapter === 'function'
      ? config.adapter
      : requestAdapter;

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
