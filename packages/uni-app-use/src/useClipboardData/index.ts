import { ref } from 'vue-demi';

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
    uni.setClipboardData(options);
  };

  return {
    clipboardData,
    setClipboardData,
  };
}
