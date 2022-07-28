import { UrConfig, UrData } from '../types';

export interface UrInterceptorOptions<T = UrData, D = UrData> {
  synchronous?: boolean;
  runWhen?: (config: UrConfig<T, D>) => boolean;
}

export interface UrInterceptorManagerHandlerFulfilled<V, T = V> {
  (value: V): T | Promise<T>;
}

export interface UrInterceptorManagerHandlerRejected {
  (error: any): any;
}

export interface UrInterceptorManagerHandler<V, T = V, D = UrData>
  extends UrInterceptorOptions<T, D> {
  fulfilled?: UrInterceptorManagerHandlerFulfilled<V, T>;
  rejected?: UrInterceptorManagerHandlerRejected;
}

export interface UrInterceptorManager<V, T = V, D = UrData> {
  use(
    onFulfilled?: UrInterceptorManagerHandlerFulfilled<V, T>,
    onRejected?: UrInterceptorManagerHandlerRejected,
    options?: UrInterceptorOptions<T, D>,
  ): number;
  eject(id: number): void;
}

export class UrInterceptorManager<V, T = V, D = UrData> {
  private handlers: (UrInterceptorManagerHandler<V, T, D> | null)[] = [];

  use(
    fulfilled: UrInterceptorManagerHandlerFulfilled<V, T>,
    rejected: UrInterceptorManagerHandlerRejected,
    options: UrInterceptorOptions<T, D>,
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

  forEach(fn: (...rest: any) => any) {
    for (const handler of this.handlers) {
      if (handler && fn) {
        fn(handler);
      }
    }
  }
}
