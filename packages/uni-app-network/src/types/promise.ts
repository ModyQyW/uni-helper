import { UanData } from './common';
import { UanResponse } from './response';

export type UanPromise<T = UanData, D = UanData> = Promise<UanResponse<T, D>>;
