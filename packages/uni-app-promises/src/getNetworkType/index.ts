import { simplePromisify } from '../utils';

export const getNetworkType = simplePromisify(uni.getNetworkType);
