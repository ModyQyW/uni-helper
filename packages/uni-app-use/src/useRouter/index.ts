import { tryOnScopeDispose } from '@vueuse/shared';
import { ref, computed } from 'vue-demi';

export function useRouter() {
  const pages = ref(getCurrentPages());
  tryOnScopeDispose(() => {
    pages.value = getCurrentPages();
  });

  const page = computed(() => pages.value.at(-1));

  const reLaunch = (options: UniApp.ReLaunchOptions) => uni.reLaunch(options);
  const switchTab = (options: UniApp.SwitchTabOptions) => uni.switchTab(options);
  const redirectTo = (options: UniApp.RedirectToOptions) => uni.redirectTo(options);
  const navigateTo = (options: UniApp.NavigateToOptions) => uni.navigateTo(options);
  const navigateBack = (options: UniApp.NavigateBackOptions) => uni.navigateBack(options);
  const navigateToMiniprogram = (options: UniApp.NavigateToMiniProgramOptions) =>
    uni.navigateToMiniProgram(options);
  const navigateBackMiniprogram = (options: UniApp.NavigateBackMiniProgramOptions) =>
    uni.navigateBackMiniProgram(options);

  return {
    pages,
    page,
    reLaunch,
    switchTab,
    redirectTo,
    navigateTo,
    navigateBack,
    navigateToMiniprogram,
    navigateBackMiniprogram,
  };
}
