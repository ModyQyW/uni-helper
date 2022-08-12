import { MaybeComputedRef, resolveUnref } from '@vueuse/shared';
import { computed } from 'vue-demi';

export function useArrayBufferToBase64(arrayBuffer: MaybeComputedRef<ArrayBuffer>) {
  const base64 = computed(() => uni.arrayBufferToBase64(resolveUnref(arrayBuffer)));

  return base64;
}
