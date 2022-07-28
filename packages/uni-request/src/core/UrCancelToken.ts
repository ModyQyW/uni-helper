import { UrCanceledError } from './UrCanceledError';
import type { UrConfig, UrData, UrTask } from '../types';

export interface UrCancel {
  message?: string;
}

export interface UrCancelStatic {
  new (message?: string): UrCancel;
}

export interface UrCanceler<T = UrData, D = UrData> {
  (message?: string, config?: UrConfig<T, D>, request?: UrTask): void;
}

export interface UrCancelTokenListener {
  (reason: UrCancel | PromiseLike<UrCancel>): void;
}

export interface UrCancelToken {
  promise: Promise<UrCancel>;
  reason?: UrCancel;
  throwIfRequested(): void;
}

export interface UrCancelTokenSource<T = UrData, D = UrData> {
  token: UrCancelToken;
  cancel: UrCanceler<T, D>;
}

export interface UrCancelTokenStatic<T = UrData, D = UrData> {
  new (executor: (cancel: UrCanceler) => void): UrCancelToken;
  source(): UrCancelTokenSource<T, D>;
}

export class UrCancelToken<T = UrData, D = UrData> {
  private listeners: UrCancelTokenListener[] = [];

  constructor(executor: (cancel: UrCanceler<T, D>) => void) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise: UrCancelTokenListener;

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
      let _resolve: UrCancelTokenListener;
      const promise = new Promise<UrCancel>((resolve) => {
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
      this.reason = new UrCanceledError(message, config, request);
      resolvePromise(this.reason);
    });
  }

  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  subscribe(listener: UrCancelTokenListener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    this.listeners.push(listener);
  }

  unsubscribe(listener: UrCancelTokenListener) {
    const index = this.listeners.indexOf(listener);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  }

  static source<TT = UrData, DD = UrData>(): UrCancelTokenSource<TT, DD> {
    let cancel: UrCanceler<TT, DD>;
    const token = new UrCancelToken<TT, DD>((c) => {
      cancel = c;
    });
    return {
      token,
      // @ts-expect-error Variable 'cancel' is used before being assigned.ts(2454)
      cancel,
    };
  }
}
