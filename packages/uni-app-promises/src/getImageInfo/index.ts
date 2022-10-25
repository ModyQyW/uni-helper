import { simplePromisify } from '../utils';

export const getImageInfo = simplePromisify(uni.getImageInfo);
