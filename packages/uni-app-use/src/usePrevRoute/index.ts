import { computed } from 'vue-demi';
import { usePrevPage } from '../usePrevPage';

export function usePrevRoute() {
  const prevPage = usePrevPage();
  const route = computed(() => prevPage?.route);
  return route;
}
