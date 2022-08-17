import { Parameter } from '../types';

export interface UseVibrateOptions {
  success?: (result: any) => void;
  fail?: (error: any) => void;
  complete?: (result: any) => void;
}

/**
 * Get vibrate methods
 */
export function useVibrate() {
  const vibrate = (options: UseVibrateOptions) =>
    new Promise<Parameter<Required<UseVibrateOptions>['success']>>((resolve, reject) =>
      // @ts-expect-error
      uni.vibrate({
        ...options,
        success: (result: any) => {
          options?.success?.(result);
          resolve(result);
        },
        fail: (error: any) => {
          options?.fail?.(error);
          reject(error);
        },
      }),
    );

  const vibrateLong = (options: UseVibrateOptions) =>
    new Promise<Parameter<Required<UseVibrateOptions>['success']>>((resolve, reject) =>
      uni.vibrateLong({
        ...options,
        success: (result) => {
          options?.success?.(result);
          resolve(result);
        },
        fail: (error: any) => {
          options?.fail?.(error);
          reject(error);
        },
      }),
    );

  const vibrateShort = (options: UseVibrateOptions) =>
    new Promise<Parameter<Required<UseVibrateOptions>['success']>>((resolve, reject) =>
      uni.vibrateShort({
        ...options,
        success: (result) => {
          options?.success?.(result);
          resolve(result);
        },
        fail: (error: any) => {
          options?.fail?.(error);
          reject(error);
        },
      }),
    );

  return {
    vibrate,
    vibrateLong,
    vibrateShort,
  };
}
