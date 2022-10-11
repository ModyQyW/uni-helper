import { UanData } from './common';
import { UanConfig } from './config';
import { UanPromise } from './promise';

export interface UanAdapter<T = UanData, D = UanData> {
  (config: UanConfig<T, D>): UanPromise<T, D>;
}
