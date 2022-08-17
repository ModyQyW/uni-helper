export function useTabBar() {
  const setTabBarItem = (options: UniApp.SetTabBarItemOptions) => uni.setTabBarItem(options);
  const setTabBarStyle = (options: UniApp.SetTabBarStyleOptions) => uni.setTabBarStyle(options);
  const showTabBar = (options: UniApp.ShowTabBarOptions) => uni.showTabBar(options);
  const hideTabBar = (options: UniApp.HideTabBarOptions) => uni.hideTabBar(options);
  const setTabBarBadge = (options: UniApp.SetTabBarBadgeOptions) => uni.setTabBarBadge(options);
  const removeTabBarBadge = (options: UniApp.RemoveTabBarBadgeOptions) =>
    uni.removeTabBarBadge(options);
  const showTabBarRedDot = (options: UniApp.ShowTabBarRedDotOptions) =>
    uni.showTabBarRedDot(options);
  const hideTabBarRedDot = (options: UniApp.HideTabBarRedDotOptions) =>
    uni.hideTabBarRedDot(options);
  return {
    setTabBarItem,
    setTabBarStyle,
    showTabBar,
    hideTabBar,
    setTabBarBadge,
    removeTabBarBadge,
    showTabBarRedDot,
    hideTabBarRedDot,
  };
}
