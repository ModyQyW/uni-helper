export interface UseVibrateOptions {
  success?: (result: any) => void;
  fail?: (error: any) => void;
  complete?: (result: any) => void;
}

export function useVibrate() {
  // @ts-expect-error
  const vibrate = (options: UseVibrateOptions) => uni.vibrate(options);
  const vibrateLong = (options: UseVibrateOptions) => uni.vibrateLong(options);
  const vibrateShort = (options: UseVibrateOptions) => uni.vibrateShort(options);

  return {
    vibrate,
    vibrateLong,
    vibrateShort,
  };
}
