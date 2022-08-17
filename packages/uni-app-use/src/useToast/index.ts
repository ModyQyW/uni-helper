export function useToast(options: UniApp.ShowToastOptions) {
  const showToast = (newOptions: UniApp.ShowToastOptions) => {
    uni.showToast({
      ...options,
      ...newOptions,
    });
  };
  const hideToast = () => uni.hideToast();
  return { showToast, hideToast };
}
