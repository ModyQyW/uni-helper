import { ref, shallowRef } from 'vue-demi';

export function useClipboardData() {
  const clipboardData = ref<string>();
  const error = shallowRef<UniApp.GeneralCallbackResult>();

  uni.getClipboardData({
    success: (result) => {
      clipboardData.value = result.data;
      error.value = undefined;
    },
    fail: (e) => {
      clipboardData.value = undefined;
      error.value = e;
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
