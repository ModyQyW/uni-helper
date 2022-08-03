import { ref, readonly } from 'vue-demi';
import { noop, tryOnScopeDispose } from '@vueuse/shared';

/**
 * Reactive dark theme preference.
 */
export function usePreferredDark() {
  const prefersDark = ref(uni.getSystemInfoSync().osTheme === 'dark');

  uni.onThemeChange((result) => {
    prefersDark.value = result.theme === 'dark';
  });
  tryOnScopeDispose(() => {
    uni.offThemeChange(noop);
  });

  return readonly(prefersDark);
}
