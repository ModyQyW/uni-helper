export function useActionSheet(options: UniApp.ShowActionSheetOptions) {
  const showActionSheet = (newOptions: UniApp.ShowActionSheetOptions, override = true) => {
    uni.showActionSheet({
      ...(override ? undefined : options),
      ...newOptions,
    });
  };
  return showActionSheet;
}
