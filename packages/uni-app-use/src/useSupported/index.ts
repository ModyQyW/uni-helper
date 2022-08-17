import { MaybeComputedRef, resolveUnref } from '@vueuse/shared';
import { Ref, ref } from 'vue-demi';

/**
 * Get api is supported
 */
export function useSupported(api: MaybeComputedRef<string>) {
  const isSupported = ref() as Ref<boolean>;

  const update = () => {
    isSupported.value = uni.canIUse(resolveUnref(api));
  };

  update();

  return isSupported;
}
