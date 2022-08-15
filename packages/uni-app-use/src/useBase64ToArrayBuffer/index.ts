import { MaybeComputedRef, resolveUnref } from '@vueuse/shared';
import { computed } from 'vue-demi';

/**
 * Get base64 corresponding ArrayBuffer
 */
export function useBase64ToArrayBuffer(base64: MaybeComputedRef<string>) {
  const arrayBuffer = computed(() => uni.base64ToArrayBuffer(resolveUnref(base64)));

  return arrayBuffer;
}
