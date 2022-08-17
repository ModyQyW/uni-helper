export function usePullDownRefresh() {
  const start = (options: UniApp.StartPullDownRefreshOptions) => uni.startPullDownRefresh(options);
  const stop = () => uni.stopPullDownRefresh();
  return { start, stop };
}
