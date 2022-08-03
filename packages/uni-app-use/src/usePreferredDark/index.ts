import { ref } from 'vue-demi';
import { noop, tryOnScopeDispose } from '@vueuse/shared';

/**
 * Reactive dark theme preference.
 */
export function usePreferredDark() {
  const prefersDark = ref(false);

  const { osTheme } = uni.getSystemInfoSync();
  prefersDark.value = osTheme === 'dark';

  uni.onThemeChange((result: UniApp.OnThemeChangeCallbackResult) => {
    prefersDark.value = result.theme === 'dark';
  });
  tryOnScopeDispose(() => {
    uni.offThemeChange(noop);
  });

  return prefersDark;
}
