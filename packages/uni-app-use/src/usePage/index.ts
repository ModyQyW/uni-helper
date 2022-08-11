import { computed } from 'vue-demi';
import { usePages } from '../usePages';

export function usePage() {
  const { pages } = usePages();

  const page = computed(() => pages.value.at(-1));

  return {
    page,
  };
}
