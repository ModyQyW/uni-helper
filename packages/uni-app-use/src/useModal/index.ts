export function useModal(options: UniApp.ShowModalOptions) {
  const showModal = (newOptions: UniApp.ShowModalOptions, override = true) => {
    uni.showModal({
      ...(override ? undefined : options),
      ...newOptions,
    });
  };
  return showModal;
}
