import { mergeDeepRight } from 'ramda';
import { assignIn, assignInWith } from 'lodash-es';
import pkg from '../package.json';
import { isUrError, Ur, UrCanceledError, UrCancelToken, UrError, isCancel } from './core';
import { defaultBaseConfig } from './defaults';

const createInstance = (defaultConfig) => {
  const context = new Ur(defaultConfig);
  const instance = Ur.prototype.request.bind(context);

  assignInWith(instance, Ur.prototype, (object, source) => {
    const keys = Object.getOwnPropertyNames(source);
    keys.forEach((key) => {
      if (typeof source[key] === 'function') {
        object[key] = source[key].bind(context);
      } else {
        object[key] = source[key];
      }
    });
  });

  assignIn(instance, context);

  instance.create = (instanceConfig) =>
    createInstance(mergeDeepRight(defaultConfig, instanceConfig));

  return instance;
};

const ur = createInstance(defaultBaseConfig);

ur.Ur = Ur;

ur.CanceledError = UrCanceledError;
ur.CancelToken = UrCancelToken;
ur.isCancel = isCancel;
ur.VERSION = pkg.version;

ur.UrError = UrError;

ur.Cancel = ur.CanceledError;

ur.all = (promises) => Promise.all(promises);

ur.isUrError = isUrError;

export { ur };

export default ur;
