import { ref } from 'vue-demi';

export function useClipboardData() {
  const data = ref<string | undefined>(undefined);

  uni.getClipboardData({
    success: (result) => {
      data.value = result.data;
    },
    fail: () => {
      data.value = data.value ?? undefined;
    },
  });

  const setData = (options: UniApp.SetClipboardDataOptions) => {
    uni.setClipboardData(options);
  };

  return {
    data,
    setData,
  };
}
