import { ref } from 'vue-demi';

export function useApp() {
  const app = ref(getApp());

  return {
    app,
  };
}
