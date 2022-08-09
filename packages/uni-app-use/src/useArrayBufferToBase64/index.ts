import { MaybeRef } from '@vueuse/shared';
import { unref, computed } from 'vue-demi';

export function useArrayBufferToBase64(arrayBuffer: MaybeRef<ArrayBuffer>) {
  const base64 = computed(() => uni.arrayBufferToBase64(unref(arrayBuffer)));

  return base64;
}
