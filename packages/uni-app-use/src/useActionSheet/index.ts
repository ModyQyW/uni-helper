export function useActionSheet(options: UniApp.ShowActionSheetOptions) {
  const showActionSheet = (newOptions: UniApp.ShowActionSheetOptions) => {
    uni.showActionSheet({
      ...options,
      ...newOptions,
    });
  };
  return showActionSheet;
}
