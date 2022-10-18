import { mergeDeepRight } from 'ramda';
import { UanConfig, UanData } from '../types';

export function mergeConfig<T = UanData, D = UanData>(
  config1?: UanConfig<T, D>,
  config2?: UanConfig<T, D>,
) {
  return mergeDeepRight(config1 ?? {}, config2 ?? {}) as UanConfig<T, D>;
}
