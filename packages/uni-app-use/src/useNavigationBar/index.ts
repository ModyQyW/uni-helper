export function useNavigationBar() {
  const setTitle = (options: UniApp.SetNavigationBarTitleOptions) =>
    uni.setNavigationBarTitle(options);

  const setColor = (options: UniApp.SetNavigationbarColorOptions) =>
    uni.setNavigationBarColor(options);

  const showLoading = () => {
    uni.showNavigationBarLoading();
  };

  const hideLoading = () => {
    uni.hideNavigationBarLoading();
  };

  return {
    setTitle,
    setColor,
    showLoading,
    hideLoading,
  };
}
