import { mergeDeepRight } from 'ramda';
import { version } from '../package.json';
import {
  isUanError,
  Uan,
  UanCancel,
  UanCanceledError,
  UanCancelToken,
  UanCancelTokenStatic,
  UanError,
  isCancel,
} from './core';
import { defaults } from './defaults';
import { extend } from './utils';
import { UanBaseConfig, UanData, UanRequestConfig, UanRequestResponse } from './types';

export interface UanInstance<T = UanData, D = UanData> extends Uan<T, D> {
  <TT = T, DD = D, R = UanRequestResponse<TT, DD>>(config: UanRequestConfig<TT, DD>): Promise<R>;
  <TT = T, DD = D, R = UanRequestResponse<TT, DD>>(
    url: string,
    config?: UanRequestConfig<TT, DD>,
  ): Promise<R>;

  defaults: UanBaseConfig<T, D>;
}

export interface UanStatic<T = UanData, D = UanData> extends UanInstance<T, D> {
  create(config?: UanBaseConfig<T, D>): UanInstance<T, D>;

  Uan: typeof Uan;

  CanceledError: typeof UanCanceledError<T, D>;
  CancelToken: UanCancelTokenStatic<T, D>;
  isCancel(value: any): value is UanCancel;

  VERSION: string;

  UanError: typeof UanError;
  isUanError<T = any, D = any>(value: any): value is UanError<T, D>;

  all(values: Array<T | Promise<T>>): Promise<T[]>;
}

const createInstance = <T = UanData, D = UanData>(defaultConfig: UanBaseConfig<T, D>) => {
  const context = new Uan(defaultConfig);
  const instance = Uan.prototype.request.bind(context) as UanStatic<T, D>;

  // Copy ur.prototype to instance
  extend(instance, Uan.prototype, context, { allOwnKeys: true });

  // Copy context to instance
  extend(instance, context, null, { allOwnKeys: true });

  // Factory for creating new instances
  instance.create = (instanceConfig) =>
    createInstance(mergeDeepRight(defaultConfig, instanceConfig ?? {}) as UanBaseConfig<T, D>);

  return instance;
};

// Create the default instance to be exported
const ur = createInstance(defaults);

// Expose Uan class to allow class inheritance
ur.Uan = Uan;

// Expose CanceledError & CancelToken & isCancel
ur.CanceledError = UanCanceledError;
ur.CancelToken = UanCancelToken;
ur.isCancel = isCancel;

// version
ur.VERSION = version;

// Expose UanError & isUanError
ur.UanError = UanError;
ur.isUanError = isUanError;

// Expose all/spread
ur.all = (promises) => Promise.all(promises);

export * from './adapters';
export * from './core';
export * from './defaults';
export * from './utils';
export * from './types';
export { ur };

export default ur;
