import { ref } from 'vue-demi';
import { Parameter } from '../types';
import { useInterceptor } from '../useInterceptor';

/**
 * Get and set clipboard data
 */
export function useClipboardData(onError = (e: unknown) => console.error(e)) {
  const clipboardData = ref<string>();

  uni.getClipboardData({
    success: (result) => {
      clipboardData.value = result.data;
    },
    fail: (e) => {
      clipboardData.value = undefined;
      onError?.(e);
    },
  });

  let data = '';
  useInterceptor('setClipboardData', {
    invoke: (args) => {
      data = args.data;
    },
    success: () => {
      clipboardData.value = data;
    },
  });

  const setClipboardData = (options: UniApp.SetClipboardDataOptions) =>
    new Promise<Parameter<Required<UniApp.SetClipboardDataOptions>['success']>>((resolve, reject) =>
      uni.setClipboardData({
        ...options,
        success: (result) => {
          options?.success?.(result);
          resolve(result);
        },
        fail: (error) => {
          options?.fail?.(error);
          reject(error);
        },
      }),
    );

  return {
    clipboardData,
    setClipboardData,
  };
}
