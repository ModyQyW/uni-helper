import { ref } from 'vue-demi';

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

  const setClipboardData = (options: UniApp.SetClipboardDataOptions) => {
    uni.setClipboardData({
      ...options,
      success: (result) => {
        options?.success?.(result);
        clipboardData.value = options?.data;
      },
    });
  };

  return {
    clipboardData,
    setClipboardData,
  };
}
