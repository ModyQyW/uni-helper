import { ref } from 'vue-demi';
import { useInterceptor } from '../useInterceptor';

/**
 * Get and set screen brightness
 */
export function useScreenBrightness(onError = (e: unknown) => console.error(e)) {
  const screenBrightness = ref<number>();
  let value = screenBrightness.value;

  uni.getScreenBrightness({
    success: (result) => {
      screenBrightness.value = result.value;
      value = result.value;
    },
    fail: (e) => {
      onError?.(e);
    },
  });

  useInterceptor('setScreenBrightness', {
    invoke: (args: UniApp.SetScreenBrightnessOptions) => {
      value = args.value;
    },
    success: () => {
      screenBrightness.value = value;
    },
  });

  const setScreenBrightness = (options: UniApp.SetScreenBrightnessOptions) =>
    uni.setScreenBrightness(options);

  return {
    screenBrightness,
    setScreenBrightness,
  };
}
