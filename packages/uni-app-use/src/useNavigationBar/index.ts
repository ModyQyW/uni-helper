export function useNavigationBar() {
  const setTitle = (options: UniApp.SetNavigationBarTitleOptions) =>
    uni.setNavigationBarTitle(options);
  const setNavigationBarTitle = setTitle;

  const setColor = (options: UniApp.SetNavigationbarColorOptions) =>
    uni.setNavigationBarColor(options);
  const setNavigationBarColor = setColor;

  const showLoading = () => {
    uni.showNavigationBarLoading();
  };
  const showNavigationBarLoading = showLoading;

  const hideLoading = () => {
    uni.hideNavigationBarLoading();
  };
  const hideNavigationBarLoading = hideLoading;

  return {
    setNavigationBarTitle,
    setTitle,
    setNavigationBarColor,
    setColor,
    showNavigationBarLoading,
    showLoading,
    hideNavigationBarLoading,
    hideLoading,
  };
}
