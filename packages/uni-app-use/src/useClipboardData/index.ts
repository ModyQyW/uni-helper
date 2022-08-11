import { ref } from 'vue-demi';

export function useClipboardData() {
  const clipboardData = ref<string | undefined>(undefined);

  uni.getClipboardData({
    success: (result) => {
      clipboardData.value = result.data;
    },
    fail: () => {
      clipboardData.value = clipboardData.value ?? undefined;
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
