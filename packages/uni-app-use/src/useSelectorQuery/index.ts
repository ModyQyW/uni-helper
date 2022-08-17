import { tryOnMounted } from '@vueuse/shared';

export function useSelectorQuery() {
  let query;
  tryOnMounted(() => {
    query = uni.createSelectorQuery();
  });
  return query;
}
