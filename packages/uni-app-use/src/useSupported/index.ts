import { tryOnMounted } from '@vueuse/shared';
import { Ref, ref } from 'vue-demi';

export function useSupported(api: string, sync = false) {
  const isSupported = ref() as Ref<boolean>;

  const update = () => {
    isSupported.value = uni.canIUse(api);
  };

  update();

  tryOnMounted(update, sync);
  return isSupported;
}
