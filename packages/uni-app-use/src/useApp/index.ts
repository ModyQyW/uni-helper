import { ref, computed } from 'vue-demi';

export function useApp() {
  const app = ref(getApp());
  const globalData = computed({
    get: () => app.value.globalData,
    set: (nextGlobalData, override = false) => {
      app.value.globalData = override
        ? nextGlobalData
        : { ...app.value.globalData, ...nextGlobalData };
    },
  });

  return {
    app,
    globalData,
  };
}
