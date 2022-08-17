import { ref, readonly } from 'vue-demi';
import { tryOnScopeDispose } from '@vueuse/shared';

/**
 * Reactive dark theme preference.
 */
export function usePreferredDark() {
  const prefersDark = ref(uni.getSystemInfoSync().osTheme === 'dark');

  const updatePrefersDark = (result: UniApp.OnThemeChangeCallbackResult) => {
    prefersDark.value = result.theme === 'dark';
  };

  const callback = (result: UniApp.OnThemeChangeCallbackResult) => {
    updatePrefersDark(result);
  };

  uni.onThemeChange(callback);

  const stop = () => {
    // @ts-expect-error
    uni.offThemeChange(callback);
  };

  tryOnScopeDispose(stop);

  return readonly(prefersDark);
}
