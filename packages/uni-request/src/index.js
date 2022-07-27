import { mergeDeepRight } from 'ramda';
import { version } from '../package.json';
import { isUrError, Ur, UrCanceledError, UrCancelToken, UrError, isCancel } from './core';
import { defaults } from './defaults';
import { extend } from './utils';

const createInstance = (defaultConfig) => {
  const context = new Ur(defaultConfig);
  const instance = Ur.prototype.request.bind(context);

  // Copy ur.prototype to instance
  extend(instance, Ur.prototype, context, { allOwnKeys: true });

  // Copy context to instance
  extend(instance, context, { allOwnKeys: true });

  // Factory for creating new instances
  instance.create = (instanceConfig) =>
    createInstance(mergeDeepRight(defaultConfig, instanceConfig));

  return instance;
};

// Create the default instance to be exported
const ur = createInstance(defaults);

// Expose Ur class to allow class inheritance
ur.Ur = Ur;

// Expose Cancel & CancelToken
ur.CanceledError = UrCanceledError;
ur.CancelToken = UrCancelToken;
ur.isCancel = isCancel;
ur.VERSION = version;

// Expose UrError class
ur.UrError = UrError;

// Expose all/spread
ur.all = (promises) => Promise.all(promises);

// Expose isUrError
ur.isUrError = isUrError;

export * from './adapters';
export * from './core';
export * from './defaults';
export * from './utils';
export { ur };

export default ur;
