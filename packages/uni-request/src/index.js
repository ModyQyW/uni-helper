import { mergeDeepRight } from 'ramda';
import { version } from '../package.json';
import { isUrError, Ur, UrCanceledError, UrCancelToken, UrError, isCancel } from './core';
import { defaults } from './defaults';
import { extend } from './utils';

const createInstance = (defaultConfig) => {
  const context = new Ur(defaultConfig);
  const instance = Ur.prototype.request.bind(context);

  // Copy axios.prototype to instance
  extend(instance, Ur.prototype, context, { allOwnKeys: true });

  // Copy context to instance
  extend(instance, context, { allOwnKeys: true });

  // Factory for creating new instances
  instance.create = (instanceConfig) =>
    createInstance(mergeDeepRight(defaultConfig, instanceConfig));

  return instance;
};

const ur = createInstance(defaults);

ur.Ur = Ur;

ur.CanceledError = UrCanceledError;
ur.CancelToken = UrCancelToken;
ur.isCancel = isCancel;
ur.VERSION = version;

ur.UrError = UrError;

ur.Cancel = ur.CanceledError;

ur.all = (promises) => Promise.all(promises);

ur.isUrError = isUrError;

export { ur };

export default ur;
