import { UanBaseConfig, UanData } from '../types';

export interface UanInterceptorOptions<T = UanData, D = UanData> {
  synchronous?: boolean;
  runWhen?: (config: UanBaseConfig<T, D>) => boolean;
}

export interface UanInterceptorManagerHandlerFulfilled<V, T = V> {
  (value: V): T | Promise<T>;
}

export interface UanInterceptorManagerHandlerRejected {
  (error: any): any;
}

export interface UanInterceptorManagerHandler<V, T = V, D = UanData>
  extends UanInterceptorOptions<T, D> {
  fulfilled?: UanInterceptorManagerHandlerFulfilled<V, T>;
  rejected?: UanInterceptorManagerHandlerRejected;
}

export interface UanInterceptorManager<V, T = V, D = UanData> {
  use(
    onFulfilled?: UanInterceptorManagerHandlerFulfilled<V, T>,
    onRejected?: UanInterceptorManagerHandlerRejected,
    options?: UanInterceptorOptions<T, D>,
  ): number;
  eject(id: number): void;
}

export class UanInterceptorManager<V, T = V, D = UanData> {
  private handlers: (UanInterceptorManagerHandler<V, T, D> | null)[] = [];

  use(
    fulfilled: UanInterceptorManagerHandlerFulfilled<V, T>,
    rejected: UanInterceptorManagerHandlerRejected,
    options: UanInterceptorOptions<T, D>,
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

  forEach(fn: (handler: UanInterceptorManagerHandler<V, T, D>) => any) {
    for (const handler of this.handlers) {
      if (handler && fn) {
        fn(handler);
      }
    }
  }
}