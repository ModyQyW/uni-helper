import { reactive } from 'vue';
import { MakeMaybeRef } from '../types';

export interface ShowActionSheetOptions
  extends Omit<UniApp.ShowActionSheetOptions, 'title' | 'itemList'> {
  itemList: string[];
}

export function useActionSheet(options?: MakeMaybeRef<ShowActionSheetOptions>) {
  const showActionSheet = (newOptions?: MakeMaybeRef<ShowActionSheetOptions>) => {
    uni.showActionSheet(
      reactive({
        itemList: [],
        ...options,
        ...newOptions,
      }),
    );
  };
  return showActionSheet;
}
