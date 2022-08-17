import { Ref, ref } from 'vue-demi';

/**
 * Get api is supported
 */
export function useSupported(api: string) {
  const isSupported = ref() as Ref<boolean>;

  const update = () => {
    isSupported.value = uni.canIUse(api);
  };

  update();

  return isSupported;
}
