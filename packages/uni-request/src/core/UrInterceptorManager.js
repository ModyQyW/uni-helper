export class UrInterceptorManager {
  constructor() {
    this.handlers = [];
  }

  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options?.synchronous ?? false,
      runWhen: options?.runWhen,
    });
    return this.handlers.length - 1;
  }

  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  forEach(fn) {
    for (const handler of this.handlers) {
      if (handler && fn) {
        fn(handler);
      }
    }
  }
}
