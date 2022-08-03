import { noop, tryOnScopeDispose } from '@vueuse/shared';
import { ref, readonly } from 'vue-demi';

/**
 * Reactive Navigator Languages.
 */
export function usePreferredLanguage() {
  const locale = ref(uni.getLocale());

  uni.onLocaleChange((result) => {
    locale.value = result?.locale ?? locale.value;
  });
  tryOnScopeDispose(() => {
    // @ts-expect-error
    uni.offLocaleChange(noop);
  });

  return readonly(locale);
}
