import { UrCanceledError } from './UrCanceledError';

export class UrCancelToken {
  _listeners = [];

  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise((resolve) => {
      resolvePromise = resolve;
    });

    this.promise.then((cancel) => {
      this._listeners.forEach((listener) => {
        listener(cancel);
      });
      this._listeners = [];
    });

    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        this.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

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

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    this._listeners.push(listener);
  }

  unsubscribe(listener) {
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  static source() {
    let cancel;
    const token = new UrCancelToken((c) => {
      cancel = c;
    });
    return {
      token,
      cancel,
    };
  }
}
