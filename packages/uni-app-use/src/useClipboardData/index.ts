import { ref } from 'vue-demi';
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
    uni.setClipboardData(options);

  return {
    clipboardData,
    setClipboardData,
  };
}
