export function useToast(options: UniApp.ShowToastOptions) {
  const showToast = (newOptions: UniApp.ShowToastOptions, override = true) => {
    uni.showToast({
      ...(override ? undefined : options),
      ...newOptions,
    });
  };
  const hideToast = () => uni.hideToast();
  return { showToast, hideToast };
}
