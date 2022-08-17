import { computed } from 'vue-demi';

/**
 * Get ArrayBuffer corresponding base64
 */
export function useArrayBufferToBase64(arrayBuffer: ArrayBuffer) {
  const base64 = computed(() => uni.arrayBufferToBase64(arrayBuffer));

  return base64;
}
