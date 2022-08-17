export function useScanCode(options: UniApp.ScanCodeOptions) {
  const scan = (newOptions: UniApp.ScanCodeOptions, override = true) => {
    uni.scanCode({
      ...(override ? undefined : options),
      ...newOptions,
    });
  };

  return scan;
}
