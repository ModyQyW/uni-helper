import { UanData } from '../types';
import { UanError } from './UanError';

export const isUanError = <T = UanData, D = UanData>(value: any): value is UanError<T, D> =>
  value?.isUanError === true;
