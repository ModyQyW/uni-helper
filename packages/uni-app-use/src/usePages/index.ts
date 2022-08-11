import { tryOnScopeDispose } from '@vueuse/shared';
import { ref } from 'vue-demi';

export function usePages() {
  const pages = ref(getCurrentPages());

  tryOnScopeDispose(() => {
    pages.value = getCurrentPages();
  });

  return pages;
}
