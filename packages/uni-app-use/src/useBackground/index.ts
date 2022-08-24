import { reactive } from 'vue';
import { MakeMaybeRef } from '../types';

export function useBackground() {
  const setBackgroundColor = (options: MakeMaybeRef<UniApp.SetBackgroundColorOptions>) =>
    uni.setBackgroundColor(reactive(options));

  const setBackgroundTextStyle = (options: MakeMaybeRef<UniApp.SetBackgroundTextStyleOptions>) =>
    uni.setBackgroundTextStyle(reactive(options));

  return {
    setBackgroundColor,
    setBackgroundTextStyle,
  };
}
