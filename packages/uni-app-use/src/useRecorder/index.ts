export function useRecorder() {
  const recorderManager = uni.getRecorderManager();

  const useRecorderManager = () => uni.getRecorderManager();

  return {
    recorderManager,
    manager: recorderManager,
    useRecorderManager,
    useManager: useRecorderManager,
  };
}
