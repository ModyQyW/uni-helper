import { reactive } from 'vue';
import { MaybeComputedRef, resolveUnref } from '@vueuse/core';

export interface UniAppShowActionSheetOptions
  extends Omit<UniApp.ShowActionSheetOptions, 'title' | 'itemList'> {
  itemList: string[];
}
export type ShowActionSheetOptions = MaybeComputedRef<UniAppShowActionSheetOptions>;

export function useActionSheet(options?: ShowActionSheetOptions) {
  const showActionSheet = (newOptions?: ShowActionSheetOptions) => {
    uni.showActionSheet(
      reactive({
        itemList: [],
        ...resolveUnref(options),
        ...resolveUnref(newOptions),
      }),
    );
  };
  return showActionSheet;
}
