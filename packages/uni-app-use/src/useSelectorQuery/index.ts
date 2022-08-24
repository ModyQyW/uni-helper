import { tryOnMounted } from '@vueuse/core';

export function useSelectorQuery() {
  let query;
  tryOnMounted(() => {
    query = uni.createSelectorQuery();
  });
  return query;
}
