import { reactive } from 'vue';
import { MaybeComputedRef, resolveUnref } from '@vueuse/core';

export interface UniGetLocationOptions extends UniApp.GetLocationOptions {}
export type GetLocationOptions = MaybeComputedRef<UniGetLocationOptions>;

export interface UniChooseLocationOptions extends UniApp.ChooseLocationOptions {}
export type ChooseLocationOptions = MaybeComputedRef<UniChooseLocationOptions>;

export interface UniOpenLocationOptions extends UniApp.OpenLocationOptions {}
export type OpenLocationOptions = MaybeComputedRef<UniOpenLocationOptions>;

export function useLocation() {
  const getLocation = (options?: GetLocationOptions) =>
    uni.getLocation(reactive({ ...resolveUnref(options) }));
  const get = getLocation;

  const chooseLocation = (options?: ChooseLocationOptions) =>
    uni.chooseLocation(reactive({ ...resolveUnref(options) }));
  const choose = chooseLocation;

  const openLocation = (options?: OpenLocationOptions) =>
    uni.openLocation(reactive({ latitude: 0, longitude: 0, ...resolveUnref(options) }));
  const open = openLocation;

  return { getLocation, get, chooseLocation, choose, openLocation, open };
}
