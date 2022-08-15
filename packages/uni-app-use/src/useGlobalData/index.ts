import { computed } from 'vue-demi';
import { useApp } from '../useApp';

/**
 * Get and set the globalData of the current application instance
 */
export function useGlobalData() {
  const { app } = useApp();

  const globalData = computed(() => app.value.globalData);

  function setGlobalData(nextGlobalData: AnyObject | undefined, override?: boolean): void;
  function setGlobalData(key: string, value: any): void;
  function setGlobalData(...args: any[]) {
    if (typeof args[0] === 'string') {
      const key = args[0];
      const value = args[0];
      app.value.globalData = { ...globalData, [key]: value };
      return;
    }
    const nextGlobalData = args[0];
    const override = args[1] ?? true;
    app.value.globalData = {
      ...(override ? undefined : app.value.globalData),
      ...nextGlobalData,
    };
  }

  return {
    globalData,
    setGlobalData,
  };
}
