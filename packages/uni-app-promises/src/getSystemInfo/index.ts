import { simplePromisify } from '../utils';

export const getSystemInfo = simplePromisify(uni.getSystemInfo);
