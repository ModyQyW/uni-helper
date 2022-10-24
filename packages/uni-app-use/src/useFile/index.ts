import { MaybeComputedRef, resolveUnref } from '@vueuse/core';
import { reactive } from 'vue';

export interface UniChooseFileOptions extends UniApp.ChooseFileOptions {}
export type ChooseFileOptions = MaybeComputedRef<UniChooseFileOptions>;

export interface UniChooseMessageFileOptions extends UniApp.ChooseMessageFileOption {}
export type ChooseMessageFileOptions = MaybeComputedRef<UniChooseMessageFileOptions>;

export function useFile() {
  const chooseFile = (options?: ChooseFileOptions) =>
    uni.chooseFile(reactive({ ...resolveUnref(options) }));

  const chooseMessageFile = (options?: ChooseMessageFileOptions) =>
    uni.chooseMessageFile(reactive({ count: 9, ...resolveUnref(options) }));

  return { chooseFile, choose: chooseFile, chooseMessageFile, chooseMessage: chooseMessageFile };
}
