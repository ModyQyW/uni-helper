export function useAudio() {
  const backgroundAudioManager = uni.getBackgroundAudioManager();

  const useBackgroundAudioManager = () => uni.getBackgroundAudioManager();

  const createInnerAudioContext = () => uni.createInnerAudioContext();

  return {
    backgroundAudioManager,
    backgroundManager: backgroundAudioManager,
    useBackgroundAudioManager,
    useBackgroundManager: useBackgroundAudioManager,
    createInnerAudioContext,
    createInnerContext: createInnerAudioContext,
  };
}
