import { noop, tryOnScopeDispose, Fn } from '@vueuse/shared';
import { watch } from 'vue-demi';

/**
 * Register using addInterceptor on mounted, and removeInterceptor automatically on unmounted.
 */
export function useInterceptor(event: string, options: UniApp.InterceptorOptions): Fn {
  let cleanup = noop;

  const stopWatch = watch(
    uni,
    (el) => {
      cleanup();
      if (!el) {
        return;
      }
      uni.addInterceptor(event, options);
      cleanup = () => {
        uni.removeInterceptor(event);
        cleanup = noop;
      };
    },
    {
      immediate: true,
      flush: 'post',
    },
  );

  const stop = () => {
    stopWatch();
    cleanup();
  };

  tryOnScopeDispose(stop);

  return stop;
}
