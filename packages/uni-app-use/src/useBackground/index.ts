export function useBackground() {
  const setBackgroundColor = (options: UniApp.SetBackgroundColorOptions) =>
    uni.setBackgroundColor(options);
  const setBackgroundTextStyle = (options: UniApp.SetBackgroundTextStyleOptions) =>
    uni.setBackgroundTextStyle(options);
  return {
    setBackgroundColor,
    setBackgroundTextStyle,
  };
}
