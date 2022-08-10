import { tryOnScopeDispose } from '@vueuse/shared';
import { getCurrentInstance, ref, computed } from 'vue-demi';

export function usePage() {
  const pages = ref(getCurrentPages());
  const instance = ref(getCurrentInstance());

  tryOnScopeDispose(() => {
    pages.value = getCurrentPages();
    instance.value = getCurrentInstance();
  });

  const current = computed(() => pages.value.at(-1));

  return {
    pages,
    instance,
    current,
  };
}
