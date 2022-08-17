import { ref } from 'vue-demi';

export function useNavigationBar() {
  const isLoading = ref(false);

  const setTitle = (options: UniApp.SetNavigationBarTitleOptions) =>
    uni.setNavigationBarTitle(options);

  const setColor = (options: UniApp.SetNavigationbarColorOptions) =>
    uni.setNavigationBarColor(options);

  const showLoading = () => {
    uni.showNavigationBarLoading();
    isLoading.value = true;
  };

  const hideLoading = () => {
    uni.hideNavigationBarLoading();
    isLoading.value = false;
  };

  const toggleLoading = () => {
    if (isLoading.value) {
      hideLoading();
    } else {
      showLoading();
    }
  };

  const hideHomeButton = () => {
    uni.hideHomeButton();
  };

  return {
    isLoading,
    setTitle,
    setColor,
    showLoading,
    hideLoading,
    toggleLoading,
    hideHomeButton,
  };
}
