import { UrData } from '../types';
import { UrError } from './UrError';

export const isUrError = <T = UrData, D = UrData>(value: any): value is UrError<T, D> =>
  value?.isUrError === true;
