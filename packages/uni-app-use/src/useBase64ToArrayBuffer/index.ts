import { MaybeRef } from '@vueuse/shared';
import { unref, computed } from 'vue-demi';

export function useBase64ToArrayBuffer(base64: MaybeRef<string>) {
  const arrayBuffer = computed(() => uni.base64ToArrayBuffer(unref(base64)));

  return arrayBuffer;
}
