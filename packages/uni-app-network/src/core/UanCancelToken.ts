import { UanConfig, UanData, UanTask } from '../types';
import { UanCanceledError } from './UanCanceledError';

export interface UanCancel {
  message?: string;
}

export interface UanCancelStatic {
  new (message?: string): UanCancel;
}

export interface UanCanceler<T = UanData, D = UanData> {
  (message?: string, config?: UanConfig<T, D>, request?: UanTask): void;
}

export interface UanCancelTokenListener {
  (reason: UanCancel | PromiseLike<UanCancel>): void;
}

export interface UanCancelToken {
  promise: Promise<UanCancel>;
  reason?: UanCancel;
  throwIfRequested(): void;
}

export interface UanCancelTokenSource<T = UanData, D = UanData> {
  token: UanCancelToken;
  cancel: UanCanceler<T, D>;
}

export interface UanCancelTokenStatic<T = UanData, D = UanData> {
  new (executor: (cancel: UanCanceler) => void): UanCancelToken;
  source(): UanCancelTokenSource<T, D>;
}

export class UanCancelToken<T = UanData, D = UanData> {
  listeners: UanCancelTokenListener[] = [];

  constructor(executor: (cancel: UanCanceler<T, D>) => void) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise: UanCancelTokenListener;

    this.promise = new Promise((resolve) => {
      resolvePromise = resolve;
    });

    this.promise.then((cancel) => {
      this.listeners.forEach((listener) => {
        listener(cancel);
      });
      this.listeners = [];
    });

    this.promise.then = (onfulfilled) => {
      let _resolve: UanCancelTokenListener;
      const promise = new Promise<UanCancel>((resolve) => {
        this.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      // @ts-expect-error Property 'cancel' does not exist on type 'Promise<TResult1>'.ts(2339)
      promise.cancel = () => {
        this.unsubscribe(_resolve);
      };

      return promise;
    };

    executor((message, config, request) => {
      if (this.reason) {
        return;
      }
      this.reason = new UanCanceledError(message, config, request);
      resolvePromise(this.reason);
    });
  }

  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  subscribe(listener: UanCancelTokenListener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    this.listeners.push(listener);
  }

  unsubscribe(listener: UanCancelTokenListener) {
    const index = this.listeners.indexOf(listener);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  }

  static source<TT = UanData, DD = UanData>(): UanCancelTokenSource<TT, DD> {
    let cancel: UanCanceler<TT, DD>;
    const token = new UanCancelToken<TT, DD>((c) => {
      cancel = c;
    });
    return {
      token,
      // @ts-expect-error Variable 'cancel' is used before being assigned.ts(2454)
      cancel,
    };
  }
}
