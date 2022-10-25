import { simplePromisify } from '../utils';

export const compressImage = simplePromisify(uni.compressImage);
