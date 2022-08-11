import { ref } from 'vue-demi';

export function useBackgroundAudioManager() {
  const backgroundAudioManager = ref(uni.getBackgroundAudioManager());
  return { backgroundAudioManager };
}
