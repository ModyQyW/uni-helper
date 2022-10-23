import { tryOnMounted } from '@vueuse/core';

export function useVideo(videoId: string, currentComponent?: any) {
  let context: UniApp.VideoContext | undefined;
  tryOnMounted(() => {
    context = uni.createVideoContext(videoId, currentComponent);
  });
  return context;
}
