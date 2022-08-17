export function useModal(options: UniApp.ShowModalOptions) {
  const showModal = (newOptions: UniApp.ShowModalOptions) => {
    uni.showModal({
      ...options,
      ...newOptions,
    });
  };
  return showModal;
}
