export function usePullDownRefresh() {
  const start = (options: UniApp.StartPullDownRefreshOptions) => uni.startPullDownRefresh(options);
  const startPullDownRefresh = start;

  const stop = () => uni.stopPullDownRefresh();
  const stopPullDownRefresh = stop;

  return { startPullDownRefresh, start, stopPullDownRefresh, stop };
}
