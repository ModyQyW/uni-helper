import { reactive } from 'vue';
import { MaybeComputedRef, resolveUnref } from '@vueuse/core';

export interface UniSetNavigationBarTitleOptions extends UniApp.SetNavigationBarTitleOptions {}
export type SetNavigationBarTitleOptions = MaybeComputedRef<UniSetNavigationBarTitleOptions>;

export interface UniSetNavigationBarColorOptions extends UniApp.SetNavigationbarColorOptions {}
export type SetNavigationBarColorOptions = MaybeComputedRef<UniSetNavigationBarColorOptions>;

export function useNavigationBar() {
  const setTitle = (options?: SetNavigationBarTitleOptions) =>
    uni.setNavigationBarTitle(reactive({ title: '', ...resolveUnref(options) }));
  const setNavigationBarTitle = setTitle;

  const setColor = (options?: SetNavigationBarColorOptions) =>
    uni.setNavigationBarColor(reactive({ ...resolveUnref(options) }));
  const setNavigationBarColor = setColor;

  const showLoading = () => uni.showNavigationBarLoading();
  const showNavigationBarLoading = showLoading;

  const hideLoading = () => uni.hideNavigationBarLoading();
  const hideNavigationBarLoading = hideLoading;

  return {
    setNavigationBarTitle,
    setTitle,
    setNavigationBarColor,
    setColor,
    showNavigationBarLoading,
    showLoading,
    hideNavigationBarLoading,
    hideLoading,
  };
}
