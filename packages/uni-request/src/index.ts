import { mergeDeepRight } from 'ramda';
import { version } from '../package.json';
import {
  isUrError,
  Ur,
  UrCancel,
  UrCanceledError,
  UrCancelToken,
  UrCancelTokenStatic,
  UrError,
  isCancel,
} from './core';
import { defaults } from './defaults';
import { extend } from './utils';
import { UrBaseConfig, UrData, UrRequestConfig, UrRequestResponse } from './types';

export interface UrInstance<T = UrData, D = UrData> extends Ur<T, D> {
  <TT = T, DD = D, R = UrRequestResponse<TT, DD>>(config: UrRequestConfig<TT, DD>): Promise<R>;
  <TT = T, DD = D, R = UrRequestResponse<TT, DD>>(
    url: string,
    config?: UrRequestConfig<TT, DD>,
  ): Promise<R>;

  defaults: UrBaseConfig<T, D>;
}

export interface UrStatic<T = UrData, D = UrData> extends UrInstance<T, D> {
  create(config?: UrBaseConfig<T, D>): UrInstance<T, D>;

  Ur: typeof Ur;

  CanceledError: typeof UrCanceledError<T, D>;
  CancelToken: UrCancelTokenStatic<T, D>;
  isCancel(value: any): value is UrCancel;

  VERSION: string;

  UrError: typeof UrError;
  isUrError<T = any, D = any>(value: any): value is UrError<T, D>;

  all(values: Array<T | Promise<T>>): Promise<T[]>;
}

const createInstance = <T = UrData, D = UrData>(defaultConfig: UrBaseConfig<T, D>) => {
  const context = new Ur(defaultConfig);
  const instance = Ur.prototype.request.bind(context) as UrStatic<T, D>;

  // Copy ur.prototype to instance
  extend(instance, Ur.prototype, context, { allOwnKeys: true });

  // Copy context to instance
  extend(instance, context, { allOwnKeys: true });

  // Factory for creating new instances
  instance.create = (instanceConfig) =>
    createInstance(mergeDeepRight(defaultConfig, instanceConfig ?? {}) as UrBaseConfig<T, D>);

  return instance;
};

// Create the default instance to be exported
const ur = createInstance(defaults);

// Expose Ur class to allow class inheritance
ur.Ur = Ur;

// Expose CanceledError & CancelToken & isCancel
ur.CanceledError = UrCanceledError;
ur.CancelToken = UrCancelToken;
ur.isCancel = isCancel;

// version
ur.VERSION = version;

// Expose UrError & isUrError
ur.UrError = UrError;
ur.isUrError = isUrError;

// Expose all/spread
ur.all = (promises) => Promise.all(promises);

export * from './adapters';
export * from './core';
export * from './defaults';
export * from './utils';
export * from './types';
export { ur };

export default ur;
