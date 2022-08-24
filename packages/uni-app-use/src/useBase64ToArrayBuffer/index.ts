import { computed } from 'vue';

/**
 * Get base64 corresponding ArrayBuffer
 */
export function useBase64ToArrayBuffer(base64: string) {
  const arrayBuffer = computed(() => uni.base64ToArrayBuffer(base64));

  return arrayBuffer;
}
