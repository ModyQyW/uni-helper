import { computed } from 'vue-demi';
import { usePage } from '../usePage';

export function useRoute() {
  const page = usePage();

  const route = computed(() => page.value?.route);

  return route;
}
