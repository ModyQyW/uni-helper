export interface ShowActionSheetOptions
  extends Omit<UniApp.ShowActionSheetOptions, 'title' | 'itemList'> {
  itemList: string[];
}

export function useActionSheet(options?: ShowActionSheetOptions) {
  const showActionSheet = (newOptions?: ShowActionSheetOptions) => {
    uni.showActionSheet({
      itemList: [],
      ...options,
      ...newOptions,
    });
  };
  return showActionSheet;
}
