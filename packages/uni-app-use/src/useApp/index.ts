/**
 * Get the current application instance, use useGlobalData for globalData
 */
export function useApp() {
  const app = getApp();

  return app;
}
