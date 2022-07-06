import type { UrData, UrInterceptorManagerHandler, UrInterceptorOptions } from '../types';

class InterceptorManager<V, T = V, D = UrData> {
  private handlers: (UrInterceptorManagerHandler<V, T, D> | null)[];

  constructor() {
    this.handlers = [];
  }

  use(
    fulfilled?: (value: V) => T | Promise<T>,
    rejected?: (error: any) => any,
    options?: UrInterceptorOptions<T, D>,
  ) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options?.synchronous ?? false,
      runWhen: options?.runWhen,
    });
    return this.handlers.length - 1;
  }

  eject(id: number) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  forEach(fn?: (handler: UrInterceptorManagerHandler<V, T, D>) => void) {
    for (const handler of this.handlers) {
      if (handler && fn) {
        fn(handler);
      }
    }
  }
}

export { InterceptorManager };
