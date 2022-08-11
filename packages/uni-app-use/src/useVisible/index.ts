import { ref } from 'vue-demi';
import { tryOnShow } from '../tryOnShow';
import { tryOnHide } from '../tryOnHide';

export function useVisible() {
  const isVisible = ref(true);

  tryOnShow(() => {
    isVisible.value = true;
  });

  tryOnHide(() => {
    isVisible.value = false;
  });

  return isVisible;
}
