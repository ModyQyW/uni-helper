import { simplePromisify } from '../utils';

export const getStorageInfo = simplePromisify(uni.getStorageInfo);
