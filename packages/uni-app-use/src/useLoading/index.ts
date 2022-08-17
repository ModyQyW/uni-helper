export function useLoading(options: UniApp.ShowLoadingOptions) {
  const showLoading = (newOptions: UniApp.ShowLoadingOptions) => {
    uni.showLoading({
      ...options,
      ...newOptions,
    });
  };
  const hideLoading = () => uni.hideLoading();
  return { showLoading, hideLoading };
}
