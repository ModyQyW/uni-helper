export function useScanCode(options: UniApp.ScanCodeOptions) {
  const scan = (newOptions: UniApp.ScanCodeOptions) => {
    uni.scanCode({
      ...options,
      ...newOptions,
    });
  };

  return scan;
}
