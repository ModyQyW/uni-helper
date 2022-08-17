export function useLocation() {
  const getLocation = (options: UniApp.GetLocationOptions) => uni.getLocation(options);
  const chooseLocation = (options: UniApp.ChooseLocationOptions) => uni.chooseLocation(options);
  const openLocation = (options: UniApp.OpenLocationOptions) => uni.openLocation(options);
  return { getLocation, chooseLocation, openLocation };
}
