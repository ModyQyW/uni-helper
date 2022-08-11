import { ref } from 'vue-demi';

export function useRecorderManager() {
  const recorderManager = ref(uni.getRecorderManager());
  return recorderManager;
}
