export function useLoading(options: UniApp.ShowLoadingOptions) {
  const showLoading = (newOptions: UniApp.ShowLoadingOptions, override = true) => {
    uni.showLoading({
      ...(override ? undefined : options),
      ...newOptions,
    });
  };
  const hideLoading = () => uni.hideLoading();
  return { showLoading, hideLoading };
}
